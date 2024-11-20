import { useTaskContext } from "../../context/TaskContext";

const TaskBody = () => {
  const {item} = useTaskContext();

  const isDescriptionExist = Boolean(item.description && item.description.length);
  if (!isDescriptionExist) return null;

  return (
    <div className="text-sm text-slate-600">
      {item.description}
    </div>
  );
};

export default TaskBody;