import React, { useEffect, useLayoutEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface DemoProps {}

const userIds = ["admin", "b", "c"];

function App({}: DemoProps) {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  //slow down rendering
  let now = performance.now();
  while (performance.now() - now < 300) {
    //doing nothing for a bit
  }

  //useEffect는 비동기라서 userId(느림)보다 isAdmin(더느림)을 따로보여줌, 렌더링후
  //useLayoutEffect는 동시에 결과를 보여줌(더느림속도), 동기적, 랜더링전(화면이 보여지기전 일부 조작이 필요한경우)
  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleChange = () => {
    debugger;
    const otherId = userIds.find((id: any) => id !== userId)!; //현재값과 다른 아이디를 보여줌
    setUserId(otherId);
  };

  return (
    <>
      <p>userId: {userId}</p>
      <p>Admin: {isAdmin ? "true" : "false"}</p>
      <button onClick={handleChange}>Change user</button>
    </>
  );
}

export default App;
