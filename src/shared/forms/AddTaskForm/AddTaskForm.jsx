  import Field from "@/shared/inputs/Field";
  import Button from "@/shared/buttons/Button/Button";
  import { useRef, useEffect } from "react";
  import useTaskCreator from "./hooks/useTaskCreator";

  const AddTaskForm = () => {
    // * хук для создания новой задачи
    const {
      newTask,
      setTitle,
      setDescription,
      addTask,
    } = useTaskCreator();

    // * рефа на поле ввода названия задачи (для автофокуса)
    const inputRef = useRef();
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    // * рендер
    return (
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
          inputRef.current.focus();
        }}
      >
        <Field
          placeholder="Название задачи"
          value={newTask.title}
          onInput={setTitle}
          inputRef={inputRef}
        />
        <Field
          placeholder="Описание задачи"
          value={newTask.description}
          onInput={setDescription}
          type="textarea"
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