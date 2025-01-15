export default function YearProgress() {
  const currentYear: number = new Date().getFullYear();
  const daysInTheYear: number = new Date(currentYear, 1, 29).getMonth() === 1
    ? 366
    : 365;

  const todaysDate: string = new Date().toDateString();

  const getDayOfTheYear = function () {
    const date = new Date();
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const day = Math.trunc(
      (date.getTime() - startOfYear.getTime() + 86400000) / 86400000,
    );

    return day;
  };

  const dayOftheYear: string = getDayOfTheYear().toString();

  const Day = function ({ index }: { index: number }) {
    let tw;

    switch (true) {
      case index < getDayOfTheYear() && index > 0:
        tw = "bg-green-500";
        break;
      case index < 0:
        tw = "bg-transparent";
        break;
      case index === getDayOfTheYear():
        tw = "animate-pulse bg-orange-400";
        break;
      default:
        tw = "bg-neutral-300 dark:bg-neutral-800";
        break;
    }

    return <li data-day-count={index} key={index} class={`h-1 ${tw}`}></li>;
  };

  const daysInTheYearArray = Array.from(
    { length: daysInTheYear },
    (_, i) => <Day index={i + 1} />,
  );

  const daysFromPreviousYearArray = Array.from(
    { length: (new Date(new Date().getFullYear(), 0, 1).getDay() - 1) },
    (_, i) => <Day index={-1 - i} />,
  );

  return (
    <div
      class="p-4 text-white flex items-center flex-col"
      data-days-year={daysInTheYear}
    >
      <hgroup class="mb-2">
        <h1 class="text-black text-lg font-bold dark:text-white leading-tight">
          {todaysDate}
        </h1>
        <p class="text-neutral-500 leading-none">
          Day {dayOftheYear} of {daysInTheYear}
        </p>
      </hgroup>
      <ul class="my-2 grid grid-cols-7 gap-1 w-[80%] max-w-[700px]">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} class="text-xs text-neutral-500">{day}</div>
        ))}
        {daysFromPreviousYearArray}
        {daysInTheYearArray}
      </ul>
    </div>
  );
}
