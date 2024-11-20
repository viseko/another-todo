import * as Icons from "@ant-design/icons";
import cn from "classnames";

const AntIcon = ({
  className,
  name
}) => {
  const classes = cn(
    className
  );

  const AntIcon = Icons[name];

  return <AntIcon className={classes} />;
};

export default AntIcon;