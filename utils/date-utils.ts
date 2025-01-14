export const now = new Date().toDateString();
export const currentYear = new Date().getFullYear();
export const daysInTheYear = new Date(currentYear, 1, 29).getMonth() === 1
  ? 366
  : 365;
export const isLeapYear = daysInTheYear === 366 ? true : false;
export const getDayOfYear = function () {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const dayNumber = Math.trunc(
    (now.getTime() - startOfYear.getTime() + 86400000) / 86400000,
  );

  return dayNumber;
};

export const dayOfYear = getDayOfYear();
