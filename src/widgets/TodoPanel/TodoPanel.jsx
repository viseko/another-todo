
import {PanelHeader, PanelBody, PanelControls, PanelDesk, PanelWrapper} from "../../shared/layout/Panel";
import Field from "../../shared/inputs/Field";
import Button from "../../shared/buttons/Button/Button";
import { useCallback, useState } from "react";
import TaskCard from "../../shared/cards/TaskCard/TaskCard";

const TodoPanel = () => {
  const [newTaskName, setNewTaskName]  = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskInput = useCallback((event) => {
    const value = event.target.value;
    setNewTaskName(value);
  }, []);

  const addTask = () => {
    const newTask = {
      title: newTaskName,
      checked: false
    };

    setTaskList([...taskList, newTask]);
    setNewTaskName("");
  };

  const toggleCheckTask = (index) => {
    const list = [...taskList];
    const item = list[index];
    item.checked = !item.checked;

    setTaskList(list);
  };

  const deleteTask = (index) => {
    setTaskList(taskList.filter((item, itemIndex) => (itemIndex!== index)));
  };

  return (
    <PanelWrapper>
      <PanelHeader title="Список задач" />
      <PanelBody>
        <PanelDesk>
          <ul className="flex flex-col gap-2">
            {
              taskList.map((task, index) => (
                <TaskCard
                  title={task.title}
                  checked={task.checked}
                  key={index}
                  index={index}
                  onCheck={toggleCheckTask}
                  onDelete={deleteTask}
                />
              ))
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