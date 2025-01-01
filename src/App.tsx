import { Fragment } from "react/jsx-runtime";

const App = () => {
  return (
    <Fragment>
      <div>
        <p className="text-lg font-medium">Count: 0</p>
        <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md transition-all">
          Increment
        </button>
        <button className="bg-red-500  hover:bg-red-600 px-4 py-2 rounded-md text-white ml-2">
          Decrement
        </button>
      </div>
    </Fragment>
  );
};

export default App;
