import useTaskStore from "@/app/zustand/useTaskStore";
import TaskCard from "@/shared/cards/TaskCard/TaskCard";


const PanelDesk = () => {
  const {byID, allID} = useTaskStore();

  const cardList = allID.map(id => {
    const item = byID[id];

    return (
      <TaskCard key={id} item={item} />
    );
  });

  return (
    <div
      className="bg-slate-100 grow p-2"
    >
      <ul className="flex flex-col gap-2">
        { cardList }
      </ul>
    </div>
  );
};

export default PanelDesk;