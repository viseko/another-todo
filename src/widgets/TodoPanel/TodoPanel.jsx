
import {
  PanelHeader,
  PanelBody,
  PanelControls,
  PanelDesk,
  PanelWrapper
} from "@/shared/layout/Panel";

import AddTaskForm from "@/shared/forms/AddTaskForm/AddTaskForm";

const TodoPanel = () => (
  <PanelWrapper>
    <PanelHeader title="Список задач" />
    <PanelBody>
      <PanelDesk />
      <PanelControls>
        <AddTaskForm />
      </PanelControls>
    </PanelBody>
  </PanelWrapper>
);

export default TodoPanel;