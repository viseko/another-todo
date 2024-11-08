const Container = ({children}) => {

  return (
    <div
      className="grow flex flex-col container max-w-container px-4"
    >
      {children}
    </div>
  );
};

export default Container;