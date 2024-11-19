import { useState, useCallback } from "react";
import useTaskStore from "@/app/zustand/useTaskStore";
import createTask from "@/entities/Task/createTask";

export default function useTaskCreator() {
  const [newTask, setNewTask] = useState(createTask());
  const { add, update } = useTaskStore();

  const setTask = (property, getValue) => useCallback(
    (value) => {
      setNewTask((prevTask) => ({
        ...prevTask,
        [property]: getValue(value),
      }));
    },
    []
  );

  const setTaskProperty = (property) => setTask(property, (event) => event.target.value);
  const setTaskValue = (property) => setTask(property, (value) => value);

  // * установка свойств
  const setTitle = setTaskProperty("title");
  const setDescription = setTaskProperty("description");
  const setCost = setTaskProperty("cost");
  const setDeadline = setTaskProperty("dateDeadline");
  const setTimeCost = setTaskProperty("timeCost");
  const setDifficult = setTaskValue("difficult");
  const setPriority = setTaskValue("priority");

  // * добавление созданной задачи
  const addTask = () => {
    const updatedTask = {
      ...newTask,
      dateCreated: Number(new Date()),
    };
    add(updatedTask);
    setNewTask(createTask());
  };

  // * обновление существующей задачи
  const updateTask = () => {
    update({
      ...newTask
    });
    setNewTask(createTask());
  };

  return {
    setTitle,
    addTask,
    setDescription,
    setCost,
    setDifficult,
    setPriority,
    setDeadline,
    setTimeCost,
    newTask,
    setNewTask,
    updateTask
  };
}
