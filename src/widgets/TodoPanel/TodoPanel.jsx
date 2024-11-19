
import {
  PanelHeader,
  PanelBody,
  PanelControls,
  PanelDesk,
  PanelWrapper
} from "@/shared/layout/Panel";

import AddTaskForm from "@/shared/forms/AddTaskForm/AddTaskForm";
import useTaskStore from "@/app/zustand/useTaskStore";
import EditTaskForm from "@/shared/forms/EditTaskForm";

const TodoPanel = () => {
  const {editMode} = useTaskStore();

  return (
    <PanelWrapper>
      <PanelHeader title="Список задач" />
      <PanelBody>
        <PanelDesk />
        <PanelControls>
          {
            editMode ?
              <EditTaskForm /> :
              <AddTaskForm />
          }
        </PanelControls>
      </PanelBody>
    </PanelWrapper>
  )
};

export default TodoPanel;