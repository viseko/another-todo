import { useMemo } from "react";
import cn from "classnames";

import { useTaskContext } from "../../context/TaskContext";
import formatDateString from "@/shared/lib/formatDateString";
import formatDeadlineString from "@/shared/lib/formatDeadlineString";
import Badge from "@/shared/small-parts/Badge";
import StatusIndicator from "@/shared/small-parts/StatusIndicator";

const TaskFooter = () => {
  const {item} = useTaskContext();
  
  const className = cn(
    `flex flex-row flex-wrap gap-2 items-center pt-4 text-xs text-slate-500`
  );

  const formattedDate = useMemo(() => {
    const timestamp = item.dateCreated;
    return timestamp ? formatDateString(timestamp) : null;
  }, [item.dateCreated]);

  const formattedDeadline = useMemo(() => {
    const deadline = item.dateDeadline;
    return deadline ? formatDeadlineString(deadline) : null;
  }, [item.dateDeadline]);
  
  return (
    <div className={className}>
      { formattedDate }
      { formattedDeadline && <Badge text={formattedDeadline} theme="red" /> }
      { Boolean(item.timeCost) && <Badge text={item.timeCost} icon="ClockCircleOutlined" /> }
      { Boolean(item.cost) && <Badge text={`${item.cost} руб.`} /> }
      { Boolean(item.difficult) && (
        <div className="flex flex-row items-center gap-1">
          Сложность: <StatusIndicator value={item.difficult} />
        </div>
      )}
      { Boolean(item.priority) && (
        <div className="flex flex-row items-center gap-1">
          Приоритет: <StatusIndicator value={item.priority} />
        </div>
      )}
    </div>
  );
};

export default TaskFooter;
