import { Fragment } from "react/jsx-runtime";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  console.log(counter);

  return (
    <Fragment>
      <div>
        <p className="text-lg font-medium">Count: {counter.count}</p>
        <button
          onClick={handleIncrement}
          className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md transition-all"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500  hover:bg-red-600 px-4 py-2 rounded-md text-white ml-2"
        >
          Decrement
        </button>
      </div>
    </Fragment>
  );
};

export default App;
