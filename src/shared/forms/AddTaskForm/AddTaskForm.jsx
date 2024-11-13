import Field from "@/shared/inputs/Field";
import Button from "@/shared/buttons/Button/Button";
import { useState, useCallback, useRef, useEffect } from "react";
import useTaskStore from "@/app/zustand/useTaskStore";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = () => {
  // * методы хранилища
  const {add} = useTaskStore();

  // * рефа на поле ввода имени новой задачи
  const inputRef = useRef();
  
  // * фокусимся сразу при монтировании формы
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // * заготовка под новую задачу
  const createNewTask = () => ({
    id: uuidv4(),
    title: "",
    checked: false
  });

  const [newTask, setNewTask]  = useState(createNewTask());
  const handleTaskInput = useCallback((event) => {
    const value = event.target.value;
    setNewTask({
      ...newTask,
      title: value
    });
  }, [newTask]);

  // * обработчик добавления новой задачи
  const addTask = () => {
    add(newTask);
    setNewTask(createNewTask());
    inputRef.current.focus();
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}
    >
      <Field
        placeholder="Название задачи"
        value={newTask.title}
        onInput={handleTaskInput}
        inputRef={inputRef}
      />
      <Button
        type="submit"
        text="Добавить"
        disabled={newTask.title.length === 0}
      />
    </form>
  );
};

export default AddTaskForm;