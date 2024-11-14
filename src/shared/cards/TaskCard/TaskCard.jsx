import ButtonIcon from "@/shared/buttons/ButtonIcon";
import useTaskStore from "@/app/zustand/useTaskStore";

const TaskCard = ({item}) => {
  const className = `
    flex
    flex-col
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
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="text-lg">
            { item.title }
          </div>

          <div className="flex gap-1">
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
        {
          Boolean(item.description && item.description.length) && (
            <div className="text-sm text-slate-600">
              {item.description}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TaskCard;