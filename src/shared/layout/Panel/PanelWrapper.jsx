const PanelWrapper = ({children}) => {
  return (
    <div
      className={`
        grow
        flex
        flex-col
        w-full
        bg-slate-400
        rounded-lg
        overflow-hidden
      `}
    >
      {children}
    </div>
  );
};

export default PanelWrapper;