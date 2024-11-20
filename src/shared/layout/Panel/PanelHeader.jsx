
const PanelHeader = ({children, title}) => {
  return (
    <div
      className={`
        px-4
        py-2
        text-white
        text-lg
        bg-slate-800
      `}
    >
      {title}
      {children}
    </div>
  );
};

export default PanelHeader;