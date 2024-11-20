import { useTaskContext } from "../../context/TaskContext";
import TaskControls from "../TaskControls";

const TaskHeader = () => {
  const {item} = useTaskContext();

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <div className="text-lg font-medium">
        { item.title }
      </div>
      <TaskControls />
    </div>
  );
};

export default TaskHeader;