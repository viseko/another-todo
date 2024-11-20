const PanelBody = ({children}) => {
  return (
    <div
      className="grow flex flex-col-reverse md:flex-row"
    >
      {children}
    </div>
  );
};

export default PanelBody;