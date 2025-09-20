import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState<number>(0);
  const [isAutoDec, setIsAutoDec] = useState<boolean>(false);

  //   Without cleanup function it does not clean up for clean up we need to use useRef

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (count === 5) {
      const autoDecrement = (val: number) => {
        if (val > 0) {
          timeoutId = setTimeout(() => {
            setCount(val - 1);
            autoDecrement(val - 1);
          }, 500);
        }
      };
      autoDecrement(5);
      setIsAutoDec(false);
    }

    return () => {
      if (timeoutId && isAutoDec) {
        console.log("clean-up");
        clearTimeout(timeoutId);
      }
    };
  }, [isAutoDec, count]);

  return (
    <>
      <h1 className="mb-4">useEffect Hook</h1>
      <p className="mb-4">Count: {count}</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button disabled={count === 0} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseEffect;
