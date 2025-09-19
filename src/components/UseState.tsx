import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="mb-4">useState Hook</h1>
      <p className="mb-4">Count: {count}</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
};

export default UseState;
