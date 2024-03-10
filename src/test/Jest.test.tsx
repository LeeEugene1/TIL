import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Jest from "./Jest";
import renderer from "react-test-renderer";

// https://www.youtube.com/watch?v=L1dtkLeIz-M
// https://www.youtube.com/watch?v=ML5egqL3YFE

//npm run test:watch

// test("renders Jest Component and find jest", () => {
//   render(<Jest />);
//   const linkElement = screen.getByText(/jest/i);
//   expect(linkElement).toBeInTheDocument();
// });

afterEach(() => {
  cleanup();
});

describe("renders Jest Component", () => {
  it("sould render completed", () => {
    const tasks = [{ id: 1, title: "유진", completed: true }];
    //방법1 getByTestId
    render(<Jest tasks={tasks} />);
    const elem = screen.getByTestId("todo-1");
    expect(elem).toHaveTextContent("유진");
    // expect(elem).toHaveTextContent("건물주");
    expect(elem).toContainHTML("em");
  });

  it("sould render not completed", () => {
    const tasks = [
      {
        id: 2,
        title: "건물주",
        completed: false,
      },
    ];
    //방법2 container
    const { container } = render(<Jest tasks={tasks} />);
    expect(container).toHaveTextContent("건물주");
    expect(container).not.toContainHTML("em");
  });
});

test("maches snapshot", () => {
  const tasks = [{ id: 1, title: "유진", completed: true }];

  const tree = renderer.create(<Jest tasks={tasks} />).toJSON();
  expect(tree).toMatchSnapshot();
});
