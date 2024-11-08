
const Button = ({
  text = "Button",
  type = "button",
  onClick,
  disabled
}) => {
  const className = `
    px-4
    py-2
    text-white
    bg-slate-800
    rounded-md
    transition
    duration-1
    select-none
    hover:bg-slate-700
    active:opacity-70
    disabled:pointer-events-none
    disabled:opacity-50
  `;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;