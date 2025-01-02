import { Fragment } from "react/jsx-runtime";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types";
import { cn } from "@/lib/utils";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <Fragment>
      <div className=" border-[1px] border-gray-700 rounded-sm px-4 py-2">
        <div className="flex items-center">
          {/* task title */}
          <div className="flex items-center gap-2  flex-1">
            <div
              className={cn("w-3 h-3 rounded-full", {
                "bg-green-500": task.priority === "Low",
                "bg-yellow-500": task.priority === "Medium",
                "bg-red-500": task.priority === "High",
              })}
            ></div>
            <p className="text-sm text-[#2a2c2a]">{task.title}</p>
          </div>
          {/* action */}
          <div className="flex items-center gap-2 ">
            <button>
              <Trash2 className="w-6 h-6 text-red-500 hover:text-red-600 transition-all" />
            </button>
            <Checkbox />
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
