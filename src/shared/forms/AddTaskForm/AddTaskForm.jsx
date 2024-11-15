  import Field from "@/shared/inputs/Field";
  import Button from "@/shared/buttons/Button/Button";
  import { useRef, useEffect } from "react";
  import useTaskCreator from "./hooks/useTaskCreator";
  import ScaleRadio from "@/shared/inputs/ScaleRadio";

  const AddTaskForm = () => {
    // * хук для создания новой задачи
    const {
      newTask,
      setTitle,
      setDescription,
      setCost,
      setDifficult,
      setPriority,
      setDeadline,
      setTimeCost,
      addTask,
    } = useTaskCreator();

    // * рефа для автофокуса
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
        <Field
          label="Оценка времени"
          value={newTask.timeCost}
          onInput={setTimeCost}
          placeholder="Оценка срока"
          type="time"
        />
        <Field
          label="Дедлайн"
          value={newTask.dateDeadline}
          onInput={setDeadline}
          placeholder="Дедлайн"
          type="datetime-local"
        />
        <Field
          label="Оценка, руб"
          value={newTask.cost}
          onInput={setCost}
          placeholder="0"
          type="number"
        />
        <ScaleRadio
          label="Приоритет"
          size="5"
          value={newTask.priority}
          onChange={setPriority}
        />
        <ScaleRadio
          label="Сложность"
          size="5"
          value={newTask.difficult}
          onChange={setDifficult}
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