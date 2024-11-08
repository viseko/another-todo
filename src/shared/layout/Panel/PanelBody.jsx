const PanelBody = ({children}) => {
  return (
    <div
      className="grow flex gap-1"
    >
      {children}
    </div>
  );
};

export default PanelBody;