export const formatToYMD = (date: Date): string => {
  return date.toISOString().split("T")[0];
};
