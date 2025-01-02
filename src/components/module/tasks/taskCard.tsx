import { Fragment } from "react/jsx-runtime";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const TaskCard = () => {
  return (
    <Fragment>
      <div className="mt-1 border-[1px] border-gray-700 rounded-sm px-4 py-2">
        <div className="flex items-center">
          {/* task title */}
          <div className="flex items-center gap-2  flex-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-sm text-[#2a2c2a]">Task Title</p>
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
          <p>Description</p>
        </div>
      </div>
    </Fragment>
  );
};

export default TaskCard;
