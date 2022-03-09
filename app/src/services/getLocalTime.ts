const setTime = (value: number) => {
  return value < 10 ? '0' + value : value;
};

export function getLocalTime() {
  const date = new Date();
  const mounth = setTime(date.getUTCMonth() + 1);
  const day = setTime(date.getUTCDate());
  const year = setTime(date.getUTCFullYear());
  const hours = setTime(date.getHours());
  const minutes = setTime(date.getMinutes());

  return `${year}-${mounth}-${day}T${hours}:${minutes}`;
}
