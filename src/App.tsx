import React, { useReducer, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseLayoutEffect from "./UseLayoutEffect";

function App() {
  //reducer가 필요한이유: useState가 너무많을때 줄일 수 있음. 리덕스 action 처럼 사용가능
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error();
    }
  };

  // const [count, setCount] = useState(0);
  // const [count, setCount] = useReducer((prev: any, next: any) => next, 0); //새로오는 값 next는 count + 1
  const [state, dispatch] = useReducer(reducer, { count: 0 }); //새로오는 값 next는 count + 1

  return (
    <>
      {/* {count}
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      {/* <UseLayoutEffect /> */}
    </>
  );
}

export default App;
