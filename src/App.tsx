import { Fragment } from "react/jsx-runtime";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Button } from "./components/ui/button";

const App = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);

  function handleIncrement(amount: number) {
    dispatch(increment(amount));
  }

  function handleDecrement(amount: number) {
    dispatch(decrement(amount));
  }

  console.log(counter);

  return (
    <Fragment>
      <div>
        <p className="text-lg font-medium">Count: {counter.count}</p>
        <button
          onClick={() => handleIncrement(3)}
          className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md transition-all"
        >
          Increment
        </button>
        <button
          onClick={() => handleDecrement(1)}
          className="bg-red-500  hover:bg-red-600 px-4 py-2 rounded-md text-white ml-2"
        >
          Decrement
        </button>
        <Button>Payment</Button>
      </div>
    </Fragment>
  );
};

export default App;
