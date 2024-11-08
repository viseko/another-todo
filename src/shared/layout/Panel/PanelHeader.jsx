
const PanelHeader = ({children, title}) => {
  return (
    <div
      className={`
        p-4
        text-white
        text-lg
        bg-slate-800
        rounded-md
      `}
    >
      {title}
      {children}
    </div>
  );
};

export default PanelHeader;