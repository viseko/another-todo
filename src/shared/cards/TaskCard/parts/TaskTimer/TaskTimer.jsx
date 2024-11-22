import ButtonIcon from "@/shared/buttons/ButtonIcon";
import { useState, useEffect } from "react";
import useTaskStore from "@/app/zustand/useTaskStore";

const TaskTimer = ({ taskID }) => {
  const [playState, setPlayState] = useState(false);
  const [timeString, setTimeString] = useState("0:00:00");
  const time = useTaskStore(state => state.timers[taskID] || 0); // Устанавливаем значение по умолчанию
  const activeTimer = useTaskStore(state => state.activeTimer);
  const setTimer = useTaskStore(state => state.setTimer);
  const setActiveTimer = useTaskStore(state => state.setActiveTimer);

  useEffect(() => {
    let interval = null;

    if (playState && activeTimer === taskID) {
      const startTime = Date.now() - time * 1000;
      interval = setInterval(() => {
        const newTime = Math.floor((Date.now() - startTime) / 1000);
        setTimer(taskID, newTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [playState, time, taskID, activeTimer, setTimer]);

  useEffect(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    setTimeString(`${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
  }, [time]);

  const togglePlayState = () => {
    if (playState) {
      setPlayState(false);
    } else {
      setPlayState(true);
      setActiveTimer(taskID);
    }
  };
  
  useEffect(() => {
    if (activeTimer !== taskID) {
      setPlayState(false); // Останавливаем таймер, если активный таймер другой
    }
  }, [activeTimer, taskID]);

  return (
    <div className="flex items-center gap-1">
      <ButtonIcon
        icon={playState && activeTimer === taskID ? "mdiPause" : "mdiPlay"}
        title={playState && activeTimer === taskID ? "Поставить на паузу" : "Начать учёт времени"}
        onClick={togglePlayState}
      />
      <span className="font-semibold text-sm opacity-50">{timeString}</span>
    </div>
  );
};

export default TaskTimer;
