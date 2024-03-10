import "./App.css";
import Jest from "./test/Jest";

function App() {
  const tasks = [
    { id: 1, title: "유진", completed: false },
    {
      id: 2,
      title: "건물주",
      completed: true,
    },
  ];
  return (
    <>
      <Jest tasks={tasks} />
      {/* <UseLayoutEffect /> */}
      {/* <UseReducer /> */}
    </>
  );
}

export default App;
