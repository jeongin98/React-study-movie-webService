/*
  <Deps 개념>
  - useEffect의 두 번째 인자
  - [] 안의 내용 유무에 따라 useEffect 내부 코드 실행 횟수 달라짐

  빈 []일 경우 : 한 번만 실행

  [keyword] : keyword가 변화할 때만 useEffect 내부 코드가 실행됨

  [keyword, counter] : keyword 또는 counter가 변화할 때 useEffect 내부 코드가 실행됨

*/

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
