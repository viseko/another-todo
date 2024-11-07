import Container from "../../shared/layout/Container";

const Header = () => {
  const className = `
    px-10
    py-4
    text-white
    bg-slate-800
  `;

  return (
    <div
      className={className}
    >
      <Container>
        Header
      </Container>
    </div>
  );
};

export default Header;