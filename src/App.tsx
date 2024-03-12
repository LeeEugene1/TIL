import { useCallback, useState } from "react";
import "./App.css";
import Jest from "./test/Jest";

function App() {
  const [number, setNumber] = useState(0);
  // const tasks = [
  //   { id: 1, title: "유진", completed: false },
  //   {
  //     id: 2,
  //     title: "건물주",
  //     completed: true,
  //   },
  // ];

  const increment = useCallback(() => {
    //increment 함수를 메모이제이션, 함수캐시
    setNumber(number + 1);
  }, [number]); //number을 의존성배열에두면 number가 변경될때마다 increment 함수를 호출
  //이를해결하려면 의존성비열을 []빈배열로두고 이전데이터를 파라미터로 넘기면됨
  //setNumber((prevNumber) => prevNumber + 1);
  //혹은 함수자체를 한번더 useCallback으로 감싸기

  // const increment = () => {
  //   setNumber(number + 1);
  // };

  //유지보수성과 가독성을 높이기위해 중간함수를 한번더 useCallck으로 감싼다.
  const middleFunc = useCallback(increment, [increment]);

  return (
    <>
      <button onClick={middleFunc}>clickme!</button>
      {number}
      {/* <Jest tasks={tasks} /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseReducer /> */}
    </>
  );
}

export default App;
