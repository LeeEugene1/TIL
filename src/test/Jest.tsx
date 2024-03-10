import React from "react";

interface Props {
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
}

const Jest: React.FC<Props> = ({ tasks }) => {
  // cra에는 기본적으로 jest가 설치되어있음
  return (
    <ul>
      {tasks.map(({ id, title, completed }) => {
        const text = completed ? <em>{title}</em> : title;
        return (
          <li key={id} data-testid={`todo-${id}`}>
            {text}
          </li>
        );
      })}
    </ul>
  );
};
export default Jest;
