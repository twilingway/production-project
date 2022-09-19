import { useState } from "react";

import s from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={s.btn}>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
