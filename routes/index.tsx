export default function Home() {
  const currentYear = new Date().getFullYear();
  const daysInTheYear = new Date(currentYear, 1, 29).getMonth() === 1
    ? 365
    : 366;

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
        class={`h-[8px] ${
          index > dayCount || index < 0 ? "bg-neutral-800" : "bg-white"
        } ${index === dayCount ? "animate-pulse" : ""}`}
      >
      </li>
    );
  };

  const daysInTheYearArray = Array.from(
    { length: daysInTheYear },
    (_, i) => <Day index={i + 1} />,
  );

  return (
    <div class="p-8 text-white flex items-center flex-col">
      <h1 class="text-white text-4xl font-bold mb-4">{currentYear}</h1>
      <ul class="my-4 grid grid-cols-7 gap-1 w-[80%] max-w-[700px]">
        <Day index={-2} />
        <Day index={-1} />
        {daysInTheYearArray}
      </ul>
    </div>
  );
}
