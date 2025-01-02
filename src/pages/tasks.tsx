import TaskCard from "@/components/module/tasks/taskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import { Fragment } from "react/jsx-runtime";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);

  return (
    <Fragment>
      <div className="max-w-screen-xl mx-auto my-10">
        <p>Task</p>

        {/* task card */}
        <div className="space-y-3 mt-5">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Tasks;
