import useTaskStore from "@/app/zustand/useTaskStore";
import { useEffect } from "react";
import useTaskCreator from "../AddTaskForm/hooks/useTaskCreator";

import Field from "@/shared/inputs/Field";
import Button from "@/shared/buttons/Button/Button";
import ScaleRadio from "@/shared/inputs/ScaleRadio";

const EditTaskForm = () => {
  const {taskToEdit, editTask} = useTaskStore();

  const {
    newTask,
    setNewTask,
    setTitle,
    setDescription,
    setCost,
    setDifficult,
    setPriority,
    setDeadline,
    setTimeCost,
    updateTask
  } = useTaskCreator();

  useEffect(() => {
    setNewTask(taskToEdit);
  }, [setNewTask, taskToEdit]);

  const handleCancel = () => {
    editTask(null);
  };

  const handleSave = () => {
    updateTask();
    editTask(null);
  };

  return (
    <form
      className="flex flex-col gap-2"
    >
      <Field
        placeholder="Название задачи"
        value={newTask.title}
        onInput={setTitle}
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
        text="Сохранить изменения"
        disabled={newTask.title.length === 0}
        onClick={handleSave}
      />
      <Button
        type="button"
        text="Отмена"
        onClick={handleCancel}
      />
    </form>
  );
};

export default EditTaskForm;