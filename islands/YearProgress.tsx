export default function YearProgress() {
  const currentYear = new Date().getFullYear();
  const daysInTheYear = new Date(currentYear, 1, 29).getMonth() === 1
    ? 366
    : 365;

  const now = new Date().toDateString();

  const getDayOfYear = function () {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const dayNumber = Math.trunc(
      (now.getTime() - startOfYear.getTime() + 86400000) / 86400000,
    );

    return dayNumber;
  };

  const dayCount = getDayOfYear();

  const Day = function ({ index }: { index: number }) {
    let tw;

    switch (true) {
      case index < dayCount && index > 0:
        tw = "bg-green-500";
        break;
      case index < 0:
        tw = "bg-transparent";
        break;
      case index === dayCount:
        tw = "animate-pulse bg-orange-400";
        break;
      default:
        tw = "bg-neutral-300 dark:bg-neutral-800";
        break;
    }

    return <li data-day-count={index} class={`h-1 ${tw}`}></li>;
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
          {now}
        </h1>
        <p class="text-neutral-500 leading-none">
          Day {dayCount} of {daysInTheYear}
        </p>
      </hgroup>
      <ul class="my-2 grid grid-cols-7 gap-1 w-[80%] max-w-[700px]">
        <div class="text-xs text-neutral-500">Mon</div>
        <div class="text-xs text-neutral-500">Tue</div>
        <div class="text-xs text-neutral-500">Wed</div>
        <div class="text-xs text-neutral-500">Thu</div>
        <div class="text-xs text-neutral-500">Fri</div>
        <div class="text-xs text-neutral-500">Sat</div>
        <div class="text-xs text-neutral-500">Sun</div>
        {daysFromPreviousYearArray}
        {daysInTheYearArray}
      </ul>
    </div>
  );
}
