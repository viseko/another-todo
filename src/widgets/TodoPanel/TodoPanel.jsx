
import {
  PanelHeader,
  PanelBody,
  PanelControls,
  PanelDesk,
  PanelWrapper
} from "@/shared/layout/Panel";

import TaskForm from "@/shared/forms/TaskForm/TaskForm";

const TodoPanel = () => {
  return (
    <PanelWrapper>
      <PanelHeader title="Список задач" />
      <PanelBody>
        <PanelDesk />
        <PanelControls>
          <TaskForm />
        </PanelControls>
      </PanelBody>
    </PanelWrapper>
  )
};

export default TodoPanel;