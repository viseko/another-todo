import Field from "../../../shared/inputs/Field";
import Button from "../../../shared/buttons/Button/Button";
import { useState, useCallback, useRef } from "react";
import useTaskStore from "../../../app/zustand/useTaskStore";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = () => {
  const [newTaskName, setNewTaskName]  = useState("");
  const {add} = useTaskStore();
  const inputRef = useRef();

  const handleTaskInput = useCallback((event) => {
    const value = event.target.value;
    setNewTaskName(value);
  }, []);

  const addTask = () => {
    const newTask = {
      id: uuidv4(),
      title: newTaskName,
      checked: false
    };

    add(newTask);
    setNewTaskName("");
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
        value={newTaskName}
        onInput={handleTaskInput}
        inputRef={inputRef}
      />
      <Button
        type="submit"
        text="Добавить"
        disabled={newTaskName.length === 0}
      />
    </form>
  );
};

export default AddTaskForm;