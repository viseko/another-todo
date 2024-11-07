import Container from "../Container";

const Page = ({children}) => {
  return (
    <div
      className="py-10"
    >
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Page;