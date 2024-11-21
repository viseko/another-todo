import cn from "classnames";
import MaterialIcon from "../MaterialIcon";

const Badge = ({
  text,
  theme = "default",
  icon
}) => {

  return (
    <div className={
      cn(
        "flex gap-1 items-center",
        "py-1 px-2",
        "rounded-md",
        "text-white",
        {
          "bg-red-800" : (theme === "red"),
          "bg-slate-500" : (theme === "default"),
        }
      )
    }>
      {icon && <MaterialIcon name={icon} size="14" />}
      {text}
    </div>
  );
};

export default Badge;