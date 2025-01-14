export default function Home() {
  const currentYear = new Date().getFullYear();
  const daysInTheYear = new Date(currentYear, 1, 29).getMonth() === 1
    ? 366
    : 365;

  const today = new Date().toDateString().toString();

  const getDayOfYear = function () {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const diff = today.getTime() - startOfYear.getTime();
    const dayNumber = Math.round(diff / (24 * 60 * 60 * 1000));
    return dayNumber;
  };

  const dayCount = getDayOfYear();

  const Day = function ({ index }: { index: number }) {
    return (
      <li
        data-day-count={index}
        class={`h-[4px] ${
          index > dayCount || index < 0 ? "bg-neutral-800" : "bg-green-500"
        } ${index === dayCount ? "animate-pulse bg-orange-400" : ""}`}
      >
      </li>
    );
  };

  const daysInTheYearArray = Array.from(
    { length: daysInTheYear },
    (_, i) => <Day index={i + 1} />,
  );

  return (
    <div class="p-4 text-white flex items-center flex-col">
      <hgroup class="mb-2">
        <h1 class="text-white text-lg font-bold">{today}</h1>
        <p class="text-neutral-300">Day {dayCount} of {daysInTheYear}</p>
      </hgroup>
      <ul class="my-2 grid grid-cols-7 gap-1 w-[80%] max-w-[700px]">
        <Day index={-2} />
        <Day index={-1} />
        {daysInTheYearArray}
      </ul>
    </div>
  );
}
