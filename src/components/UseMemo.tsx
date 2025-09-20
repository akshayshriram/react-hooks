import { useMemo, useState } from "react";
import { initialItems } from "../constant/initialItems";

type T = {
  id: number;
  isSelected: boolean;
};

const UseMemo = () => {
  const [count, setCount] = useState<number>(0);
  const [items] = useState<Array<T>>(initialItems);

  //   const selectedItem = items.find((item) => item.isSelected); // Heavy Recalculation

  const selectedItem = useMemo(() => {
    return items.find((item) => item.isSelected);
  }, [items]);

  //   const selectedItem = useMemo(() => {
  //     return items.find((item) => item.id === count);
  //   }, [count, items]);

  return (
    <>
      <h1 className="mb-4">useMemo Hook</h1>
      <p className="mb-4">Count: {count}</p>
      <p className="mb-4">Selected Item: {selectedItem?.id}</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
};

export default UseMemo;
