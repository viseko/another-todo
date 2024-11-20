import Container from "../Container";

const Page = ({children}) => {
  return (
    <div
      className="grow flex flex-col py-2 lg:py-10"
    >
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Page;