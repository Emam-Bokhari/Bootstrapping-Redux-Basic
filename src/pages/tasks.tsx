import { useAppSelector } from "@/redux/hooks";
import { Fragment } from "react/jsx-runtime";

const Tasks = () => {
  const tasks = useAppSelector((state) => state.todo.tasks);

  console.log(tasks);

  return (
    <Fragment>
      <div className="max-w-screen-xl mx-auto my-10">
        This is task component
      </div>
    </Fragment>
  );
};

export default Tasks;
