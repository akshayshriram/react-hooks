import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(0);
  const focusRef = useRef<HTMLInputElement | null>(null);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State Count", count);
    console.log("countRef: ", countRef.current);
  };
  //   const handleFocus = () => {
  //     focusRef.current?.focus();
  //   };
  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <>
      <h1 className="mb-4">useRef Hook</h1>
      <p className="mb-4">Count: {countRef.current}</p>
      <div className="flex gap-3 justify-center mb-4">
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <input
        type="text"
        ref={focusRef}
        // onClick={handleFocus}
        className="p-4 rounded-xl border-1"
        placeholder="Click the input it will focus"
      />
    </>
  );
};

export default UseRef;
