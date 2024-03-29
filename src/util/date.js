export function getFormatDate(inputDateString) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Date(inputDateString).toLocaleString(
    "ko-KR",
    options
  );
  return formattedDate;
}
