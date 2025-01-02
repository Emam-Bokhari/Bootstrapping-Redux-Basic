import { Fragment } from "react/jsx-runtime";
import Logo from "../../assets/Apache Airflow.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className=" max-w-screen-xl mx-auto h-16 flex items-center gap-5">
        {/* logo */}
        <div className="flex items-center">
          <img src={Logo} width="30" height="30" />{" "}
          <span className="font-bold ml-2">Task</span> Master
        </div>
        <Link to="/">
          <span className="hover:text-violet-500 transition-all">Tasks</span>
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navbar;
