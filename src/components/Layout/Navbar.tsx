import { Fragment } from "react/jsx-runtime";
import Logo from "../../assets/Apache Airflow.png";

const Navbar = () => {
  return (
    <Fragment>
      <nav className=" max-w-screen-xl mx-auto h-16">
        <div className="flex items-center mt-4">
          {/* logo */}
          <img src={Logo} width="30" height="30" />{" "}
          <span className="font-bold ml-2">Task</span> Master
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
