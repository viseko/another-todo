  import { useRef, useEffect, useCallback } from "react";
  import useTaskCreator from "./hooks/useTaskCreator";
  import useTaskStore from "@/app/zustand/useTaskStore";

  import Field from "@/shared/inputs/Field";
  import Button from "@/shared/buttons/Button/Button";
  import ScaleRadio from "@/shared/inputs/ScaleRadio";

  const TaskForm = () => {
    // * хук хранилища
    const {taskToEdit, editTask, editMode} = useTaskStore();

    // * хук для создания/редактирования задачи
    const {
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
      prepareEmptyTask,
    } = useTaskCreator();

    // * рефа для автофокуса на названии задачи
    const inputRef = useRef();

    // * заполнение полей при редактировании задачи
    useEffect(() => {
      if (taskToEdit) {
        setNewTask(taskToEdit);
      } else {
        inputRef.current.focus();
      }
    }, [setNewTask, taskToEdit]);

    // * обработчики
    // ** создание
    const submitHandler = useCallback((event) => {
      event.preventDefault();
      addTask();
      inputRef.current.focus();
    });

    // ** редактирование
    const cancelHandler = useCallback(() => {
      editTask(null);
      prepareEmptyTask();
    });
  
    const saveHandler = useCallback(() => {
      updateTask();
      editTask(null);
    });

    // * рендер
    return (
      <form
        className="flex flex-col gap-2"
        onSubmit={submitHandler}
      >
        <Field
          placeholder="Название задачи"
          value={task.title}
          onInput={setTitle}
          inputRef={inputRef}
        />
        <Field
          placeholder="Описание задачи"
          value={task.description}
          onInput={setDescription}
          type="textarea"
        />
        <Field
          label="Оценка времени"
          value={task.timeCost}
          onInput={setTimeCost}
          placeholder="Оценка срока"
          type="time"
        />
        <Field
          label="Дедлайн"
          value={task.dateDeadline}
          onInput={setDeadline}
          placeholder="Дедлайн"
          type="datetime-local"
        />
        <Field
          label="Оценка, руб"
          value={task.cost}
          onInput={setCost}
          placeholder="0"
          type="number"
        />
        <ScaleRadio
          label="Приоритет"
          size="5"
          value={task.priority}
          onChange={setPriority}
        />
        <ScaleRadio
          label="Сложность"
          size="5"
          value={task.difficult}
          onChange={setDifficult}
        />
        <div className="mb-3"></div>
        {
          editMode ? (
            <>
              <Button
                type="submit"
                text="Сохранить изменения"
                disabled={task.title.length === 0}
                onClick={saveHandler}
              />
              <Button
                type="button"
                text="Отмена"
                onClick={cancelHandler}
              />
            </>
          ) :
          <Button
            type="submit"
            text="Добавить"
            disabled={task.title.length === 0}
          />
        }
      </form>
    );
  };

  export default TaskForm;