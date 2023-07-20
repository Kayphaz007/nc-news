// a function that takes date and time in string, and output the difference in time with now

export function timeSince(date) {
  const prevTime = new Date(date).getTime();
  const currentTime = new Date().getTime();
  const timeDifference = (currentTime - prevTime) / 1000;

  const minute = Math.floor(timeDifference / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  const week = Math.floor(day / 7);
  const month = Math.floor(week / 4);
  const year = Math.floor(month / 12);

  if (year > 0) {
    return `${year}y`;
  } else if (month > 0) {
    return `${month}m`;
  } else if (week > 0) {
    return `${week}w`;
  } else if (day > 0) {
    return `${day}d`;
  } else if (hour > 0) {
    return `${hour}h`;
  } else if (minute > 0) {
    return `${minute}m`;
  } else return `${timeDifference}s`;
}
