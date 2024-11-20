export default function formatDeadlineString(dateString) {
  const now = new Date();
  const date = new Date(dateString);

  if (date < now) {
    return "Просрочена!"
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();

  if ((nowYear === year) && (nowMonth === month)) {
    if (day === nowDate) {
      return `Сегодня в ${hour}:${minutes}`;
    }

    if (day === nowDate + 1) {
      return `Завтра в ${hour}:${minutes}`;
    }
  }

  return `${day}.${month}.${year}-${hour}:${minutes}`;
}