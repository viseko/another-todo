import { useState, useCallback } from "react";
import useTaskStore from "@/app/zustand/useTaskStore";
import createTask from "@/entities/Task/createTask";

export default function useTaskCreator() {
  const [newTask, setNewTask] = useState(createTask());
  const { add } = useTaskStore();

  // * ФВП для генерации методов
  const setTaskProperty = (property) =>
    useCallback(
      (event) => {
        const value = event.target.value;
        setNewTask({
          ...newTask,
          [property]: value,
        });
      },
      [newTask]
    );

  const setTaskValue = (property) =>
    useCallback(
      (value) => {
        setNewTask({
          ...newTask,
          [property]: value,
        });
      },
      [newTask]
    );

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
      dateCreated: Number(new Date())
    };
    add(updatedTask);
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
  };
}
