export default function formatDeadlineString(dateString) {
  const now = new Date();
  const date = new Date(dateString);

  if (date < now) {
    return "Просрочена!";
  }

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  };

  const isToday = (now, date) => {
    return (
      now.getFullYear() === date.getFullYear() &&
      now.getMonth() === date.getMonth() &&
      now.getDate() === date.getDate()
    );
  };

  const isTomorrow = (now, date) => {
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    return (
      tomorrow.getFullYear() === date.getFullYear() &&
      tomorrow.getMonth() === date.getMonth() &&
      tomorrow.getDate() === date.getDate()
    );
  };

  if (isToday(now, date)) {
    return `Сегодня в ${formatTime(date)}`;
  }

  if (isTomorrow(now, date)) {
    return `Завтра в ${formatTime(date)}`;
  }

  return `${formatDate(date)}-${formatTime(date)}`;
}
