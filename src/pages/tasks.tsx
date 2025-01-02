import { AddTask } from "@/components/module/tasks/AddTask";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";
import { Fragment } from "react/jsx-runtime";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);

  return (
    <Fragment>
      <div className="max-w-screen-xl mx-auto my-10">
        {/* action */}
        <div className="flex items-center justify-between">
          <p>Task</p>
          <AddTask />
        </div>

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
