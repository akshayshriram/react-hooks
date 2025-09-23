import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}
interface Action {
  type: "increment" | "decrement";
}

const reducerFunction = (state: State, action: Action) => {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum Limit Reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum Limit Reached" : null,
      };
    }
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    error: null,
  });

  return (
    <>
      <h1 className="mb-4">useReducer Hook</h1>
      <p className="mb-4">Count: {state.count}</p>
      {state.error && <p className="text-red-500 mb-4">{state.error}</p>}
      <div className="flex gap-3 justify-center">
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseReducer;
