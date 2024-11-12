
import {PanelHeader, PanelBody, PanelControls, PanelDesk, PanelWrapper} from "../../shared/layout/Panel";
import Field from "../../shared/inputs/Field";
import Button from "../../shared/buttons/Button/Button";
import { useCallback, useState } from "react";
import TaskCard from "../../shared/cards/TaskCard/TaskCard";
import { v4 as uuidv4 } from "uuid";

import useTaskStore from "../../app/zustand/useTaskStore";

const TodoPanel = () => {
  const {add, remove, update, allID, byID} = useTaskStore();

  const [newTaskName, setNewTaskName]  = useState("");

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
  };

  const toggleCheckTask = (id) => {
    const item = byID[id];
    update({
      ...item,
      checked: !item.checked
    }) 
  };

  const taskCards = allID.map((id) => {
    const item = byID[id];

    return (
      <TaskCard
        title={item.title}
        checked={item.checked}
        key={id}
        index={id}
        onCheck={toggleCheckTask}
        onDelete={remove}
      />
    )
  });

  return (
    <PanelWrapper>
      <PanelHeader title="Список задач" />
      <PanelBody>
        <PanelDesk>
          <ul className="flex flex-col gap-2">
            {
              taskCards
            }
          </ul>
        </PanelDesk>
        <PanelControls>
          <Field
            placeholder="Название задачи"
            value={newTaskName}
            onInput={handleTaskInput}
          />
          <Button
            text="Добавить"
            disabled={newTaskName.length === 0}
            onClick={addTask}
          />
        </PanelControls>
      </PanelBody>
    </PanelWrapper>
  );
};

export default TodoPanel;