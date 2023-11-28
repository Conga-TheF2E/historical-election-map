export default function RenderColorBar({
  screenLevel,
  mapMode,
  selectedCity,
  enteredSecondPage,
}) {
  console.log(screenLevel);
  return (
    <section
      className={`bottom-0 mx-auto w-[348px] md:w-[768px] xl:w-[1320px] ${
        !enteredSecondPage || (!selectedCity && mapMode !== "common")
          ? "hidden"
          : "relative"
      }`}
    >
      {screenLevel && (
        <img
          className={`absolute bottom-[19px] md:bottom-[50px] xl:bottom-9 ${
            screenLevel == "xl"
              ? "left-[332px]"
              : screenLevel == "md"
                ? "left-[476px]"
                : "left-5"
          }`}
          src={`/img/colorbar_${screenLevel}_${mapMode}.svg`}
          alt="colorBar"
        />
      )}
    </section>
  );
}
