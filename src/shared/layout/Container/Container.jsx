const Container = ({children}) => {

  return (
    <div
      className="container max-w-container"
    >
      {children}
    </div>
  );
};

export default Container;