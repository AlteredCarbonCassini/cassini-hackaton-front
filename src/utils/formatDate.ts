export const formatDate = (date: Date) => {
  const options = {
    day: "2-digit",
    month: "2-digit",
    // year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return date.toLocaleString("en-GB", options as any).replace(",", "");
};
