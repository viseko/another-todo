import * as Icons from "@ant-design/icons";

const ButtonIcon = ({
  icon,
  type = "button",
  title,
  ...props
}) => {
  const AntIcon = Icons[icon];
  const className = `
    w-7
    h-7
    p-0
    flex
    items-center
    justify-center
    text-white
    text-lg
    bg-slate-600
    hover:bg-slate-700
    active:opacity-70
    rounded-md
  `;

  return (
    <button
      className={className}
      title={title}
      type={type}
      {...props}
    >
      {AntIcon && <AntIcon />}
    </button>
  );
};

export default ButtonIcon;