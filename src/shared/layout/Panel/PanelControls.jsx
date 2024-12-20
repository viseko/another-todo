const PanelControls = ({children}) => {
  return (
    <div
      className="bg-slate-200 shrink-0 w-full md:w-72 p-4"
    >
      {children}
    </div>
  );
};

export default PanelControls;