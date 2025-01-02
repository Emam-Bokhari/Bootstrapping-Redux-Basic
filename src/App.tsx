import { Fragment } from "react/jsx-runtime";
import Navbar from "./components/Layout/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default App;
