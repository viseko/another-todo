import {PanelHeader, PanelBody, PanelControls, PanelDesk, PanelWrapper} from "../../shared/layout/Panel";

const TodoPanel = () => {

  return (
    <PanelWrapper>
      <PanelHeader title="Список задач" />
      <PanelBody>
        <PanelDesk></PanelDesk>
        <PanelControls></PanelControls>
      </PanelBody>
    </PanelWrapper>
  );
};

export default TodoPanel;