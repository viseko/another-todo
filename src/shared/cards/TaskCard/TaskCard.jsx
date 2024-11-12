import ButtonIcon from "../../buttons/ButtonIcon";
import useTaskStore from "../../../app/zustand/useTaskStore";

const TaskCard = ({item}) => {
  const className = `
    flex
    items-center
    justify-between
    p-3
    bg-slate-300
    hover:bg-slate-400
    rounded-md,
    transition
    duration-3
    rounded-md
    ${item.checked ? "line-through": ""}
    ${item.checked ? "opacity-20": ""}
  `;

  const {remove, update} = useTaskStore();

  const checkHandler = () => {
    update({
      ...item,
      checked: !item.checked
    })
  };

  const deleteHandler = () => {
    remove(item.id);
  };
 
  return (
    <div
      className={className}
    >
      { item.title }
      <div className="flex flex-row gap-1">
        <ButtonIcon
          icon={item.checked ? "RedoOutlined" : "CheckOutlined"}
          onClick={checkHandler}
        />
        <ButtonIcon
          icon="DeleteOutlined"
          onClick={deleteHandler}
        />
      </div>
    </div>
  );
};

export default TaskCard;