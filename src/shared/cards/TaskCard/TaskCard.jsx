import ButtonIcon from "../../buttons/ButtonIcon";

const TaskCard = ({
  title,
  onCheck,
  onDelete,
  index,
  checked
}) => {
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
    ${checked ? "line-through": ""}
    ${checked ? "opacity-20": ""}
  `;

  return (
    <div
      className={className}
    >
      { title }
      <div className="flex flex-row gap-1">
        <ButtonIcon
          icon={checked ? "RedoOutlined" : "CheckOutlined"}
          onClick={() => onCheck(index)}
        />
        <ButtonIcon
          icon="DeleteOutlined"
          onClick={() => onDelete(index)}
        />
        {checked}
      </div>
    </div>
  );
};

export default TaskCard;