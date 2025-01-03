import { Fragment } from "react/jsx-runtime";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <Fragment>
      <div className=" border-[1px] border-gray-700 rounded-sm px-4 py-2">
        <div className="flex items-center">
          {/* task title */}
          <div className="flex items-center gap-2  flex-1">
            <div
              className={cn("w-3 h-3 rounded-full", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-red-500": task.priority === "high",
              })}
            ></div>
            <p
              className={
                (cn("text-sm text-[#2a2c2a]"),
                task.isCompleted ? "line-through" : "")
              }
            >
              {task.title}
            </p>
          </div>
          {/* action */}
          <div className="flex items-center gap-2 ">
            <button onClick={() => handleDeleteTask(task.id)}>
              <Trash2 className="w-6 h-6 text-red-500 hover:text-red-600 transition-all" />
            </button>
            <Checkbox onClick={() => dispatch(toggleCompleteState(task.id))} />
          </div>
        </div>
        {/* description */}
        <div className="mt-5">
          <p>{task.description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default TaskCard;
