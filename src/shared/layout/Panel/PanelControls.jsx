const PanelControls = ({children}) => {
  return (
    <div
      className="bg-slate-200 shrink-0 w-72 rounded-md"
    >
      {children}
    </div>
  );
};

export default PanelControls;