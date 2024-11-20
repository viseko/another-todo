import useTaskStore from "@/app/zustand/useTaskStore";
import ButtonIcon from "@/shared/buttons/ButtonIcon";
import { useTaskContext } from "../../context/TaskContext";

const TaskControls = () => {
  const {item} = useTaskContext();
  const {remove, update, editTask, taskToEdit} = useTaskStore();

  const checkHandler = () => {
    update({
      ...item,
      checked: !item.checked
    })
  };

  const deleteHandler = () => {
    // ** выход из режима редактирования, если редактируемую карточку удаляем
    if (taskToEdit && (item.id === taskToEdit.id)) {
      editTask(null);
    }

    remove(item.id);
  };

  const editHandler = () => {
    editTask(item.id);
  };

  return (
    <div className="flex gap-1">
      {!item.checked && (
        <ButtonIcon icon="EditOutlined" onClick={editHandler} />
      )}
      <ButtonIcon
        icon={item.checked ? "RedoOutlined" : "CheckOutlined"}
        onClick={checkHandler}
      />
      <ButtonIcon icon="DeleteOutlined" onClick={deleteHandler} />
    </div>
  );
};

export default TaskControls;
