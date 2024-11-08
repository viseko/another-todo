const PanelWrapper = ({children}) => {
  return (
    <div
      className={`
        grow
        flex
        flex-col
        gap-1
        w-full
        p-2
        bg-slate-400
        rounded-lg
      `}
    >
      {children}
    </div>
  );
};

export default PanelWrapper;