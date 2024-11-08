const PanelControls = ({children}) => {
  return (
    <div
      className="bg-slate-200 shrink-0 flex flex-col gap-2 w-full md:w-72 rounded-md p-4"
    >
      {children}
    </div>
  );
};

export default PanelControls;