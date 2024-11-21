import Icon from '@mdi/react';
import * as Pathes from '@mdi/js';

const MaterialIcon = ({className, name, size="20"}) => {
  const path = Pathes[name];

  return (
    <Icon
      path={path}
      className={className}
      size={size}
    />
  );
};

export default MaterialIcon;