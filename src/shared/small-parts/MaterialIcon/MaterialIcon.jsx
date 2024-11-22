import Icon from '@mdi/react';
import {
  mdiPencil,
  mdiRedo,
  mdiCheck,
  mdiTrashCan,
  mdiClockOutline,
  mdiCurrencyRub,
  mdiPlay,
  mdiPause
} from '@mdi/js';

const icons = {
  mdiPencil,
  mdiRedo,
  mdiCheck,
  mdiTrashCan,
  mdiClockOutline,
  mdiCurrencyRub,
  mdiPlay,
  mdiPause
};

const MaterialIcon = ({className, name, size="20"}) => {
  const path = icons[name];

  return (
    <Icon
      path={path}
      className={className}
      size={size}
    />
  );
};

export default MaterialIcon;