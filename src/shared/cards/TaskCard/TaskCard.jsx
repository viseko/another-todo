import { useMemo } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import ButtonIcon from "@/shared/buttons/ButtonIcon";
import useTaskStore from "@/app/zustand/useTaskStore";
import cn from "classnames";

const TaskCard = ({item}) => {
  const className = cn(
    "flex",
    "flex-col",
    "p-3",
    "bg-slate-300",
    "hover:bg-slate-400",
    "rounded-md",
    "transition",
    "duration-3",
    "rounded-md",
    {
      "line-through": item.checked,
      "opacity-20": item.checked
    }
  );

  const {remove, update, editTask} = useTaskStore();

  const checkHandler = () => {
    update({
      ...item,
      checked: !item.checked
    })
  };

  const deleteHandler = () => {
    // ** выход из режима редактирования, если редактируемую карточку удаляем
    if (item.id === taskToEdit) {
      editTask(null);
    }

    remove(item.id);
  };

  const editHandler = () => {
    editTask(item.id);
    console.log(item.id);
  };

  const formattedDate = useMemo(() => {
    const timestamp = item.dateCreated;
    if (!timestamp) return null;

    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}.${month}.${year}`;
  }, [item]);

  const formattedDeadline = useMemo(() => {
    const deadline = item.dateDeadline;
    if (!deadline) return null;

    const now = new Date();
    const date = new Date(deadline);

    if (date < now) {
      return "Просрочена!"
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const nowDate = now.getDate();

    if ((nowYear === year) && (nowMonth === month)) {
      if (day === nowDate) {
        return `Сегодня в ${hour}:${minutes}`;
      }

      if (day === nowDate + 1) {
        return `Завтра в ${hour}:${minutes}`;
      }
    }

    return `${day}.${month}.${year}-${hour}:${minutes}`;
  }, [item]);

  const priorityColors = ["green", "lime", "yellow", "orange", "red"];
 
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
            {
              !item.checked && 
              <ButtonIcon
                icon="EditOutlined"
                onClick={editHandler}
              />
            }
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
        {/* Футер */}
        <div className="flex flex-row gap-2 items-center pt-4 text-xs text-slate-500">
          { formattedDate && formattedDate }
          {
            formattedDeadline && (
              <div className="py-1 px-2 rounded-md bg-red-800 text-white">{formattedDeadline}</div>
            )
          }
          {
            Boolean(item.timeCost) && (
              <div className="py-1 px-2 flex items-center rounded-md bg-slate-500 text-white">
                <ClockCircleOutlined className="mr-1" />
                {item.timeCost}
              </div>
            )
          }
          {
            Boolean(item.cost) && (
              <div className="py-1 px-2 rounded-md bg-slate-500 text-white">{item.cost} руб.</div>
            )
          }
          {
            Boolean(item.difficult) && (
              <div className="flex flex-row items-center gap-1">
                Сложность:
                <div className={`size-4 rounded-xl bg-${priorityColors[item.difficult - 1]}-500 `} />
              </div>
            )
          }
          {
            Boolean(item.priority) && (
              <div className="flex flex-row items-center gap-1">
                Приоритет:
                <div className={`size-4 rounded-xl bg-${priorityColors[item.priority - 1]}-500 `} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default TaskCard;