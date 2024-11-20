import AntIcon from "@/shared/small-parts/AntIcon";

const ButtonIcon = ({
  icon,
  type = "button",
  title,
  ...props
}) => {
  const className = `
    size-6
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
      { icon && <AntIcon name={icon} className="size-3" /> }
    </button>
  );
};

export default ButtonIcon;