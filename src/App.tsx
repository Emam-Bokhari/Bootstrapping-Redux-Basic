import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import { decrement, increment } from "./redux/features/counter/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

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
