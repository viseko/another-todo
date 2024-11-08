const PanelBody = ({children}) => {
  return (
    <div
      className="grow flex flex-col-reverse md:flex-row gap-1"
    >
      {children}
    </div>
  );
};

export default PanelBody;