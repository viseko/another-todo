import { useTaskContext } from "../../context/TaskContext";
import TaskTimer from "../TaskTimer";

const TaskBody = () => {
  const {item} = useTaskContext();

  const isDescriptionExist = Boolean(item.description && item.description.length);

  return (
    <div className="flex flex-col gap-3">
      <TaskTimer taskID={item.id} />
      {
        isDescriptionExist && 
        <div className="text-sm text-slate-600">
          {item.description}
        </div>
      }
    </div>
  );
};

export default TaskBody;