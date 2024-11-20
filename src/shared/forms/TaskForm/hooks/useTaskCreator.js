import { useState, useCallback } from "react";
import useTaskStore from "@/app/zustand/useTaskStore";
import createTask from "@/entities/Task/createTask";

export default function useTaskCreator() {
  const [task, setNewTask] = useState(createTask());
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

  // * подготовка новой задачи
  const prepareEmptyTask = () => {
    setNewTask(createTask());
  };

  // * добавление созданной задачи
  const addTask = () => {
    const updatedTask = {
      ...task,
      dateCreated: Number(new Date()),
    };
    add(updatedTask);
    prepareEmptyTask();
  };

  // * обновление существующей задачи
  const updateTask = () => {
    update({
      ...task
    });
    prepareEmptyTask();
  };

  return {
    task,
    setNewTask,
    setTitle,
    setDescription,
    setCost,
    setDifficult,
    setPriority,
    setDeadline,
    setTimeCost,
    addTask,
    updateTask,
    prepareEmptyTask
  };
}
