import cn from "classnames";

import { TaskProvider } from "./context/TaskContext";
import TaskFooter from "./parts/TaskFooter";
import TaskHeader from "./parts/TaskHeader";
import TaskBody from "./parts/TaskBody";

const TaskCard = ({item}) => {
  const className = cn(
    "flex",
    "flex-col",
    "p-3",
    "bg-slate-200",
    "hover:bg-slate-300",
    "rounded-md",
    "transition",
    "duration-300",
    "rounded-md",
    {
      "line-through": item.checked,
      "opacity-20": item.checked
    }
  );
 
  return (
    <TaskProvider item={item}>
      <div className={className}>
        <div className="flex flex-col gap-1">
          <TaskHeader />
          <TaskBody />
          <TaskFooter />
        </div>
      </div>
    </TaskProvider>
  );
};

export default TaskCard;
