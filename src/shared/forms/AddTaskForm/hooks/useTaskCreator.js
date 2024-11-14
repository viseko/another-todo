import { useState, useCallback } from "react";
import useTaskStore from "@/app/zustand/useTaskStore";
import createTask from "@/entities/Task/createTask";

export default function useTaskCreator() {
  const [newTask, setNewTask] = useState(createTask());
  const {add} = useTaskStore();

  // * ФВП для генерации методов
  const setTaskProperty = (property) => {
    return useCallback((event) => {
      const value = event.target.value;
      setNewTask({
        ...newTask,
        [property]: value
      });
    }, [newTask]);
  };

  // * установка названия
  const setTitle = setTaskProperty("title");
  // * Установка описания
  const setDescription = setTaskProperty("description");

  // * добавление созданной задачи
  const addTask = () => {
    add(newTask);
    setNewTask(createTask());
  };

  return {
    setTitle,
    addTask,
    setDescription,
    newTask
  };
}