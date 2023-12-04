export default function RenderColorBar({
  screenLevel,
  mapMode,
  selectedCity,
  enteredSecondPage,
}) {
  return (
    <section
      className={`bottom-0 mx-auto w-[348px] md:w-[768px] xl:w-[1320px] ${
        !enteredSecondPage || selectedCity ? "hidden" : "relative"
      }`}
    >
      {/* FIXME: ? */}
      <div className="h-0">1</div>
      {screenLevel && (
        // FIXME: 不得不說 left 真的好醜，但應該跟設計相關就算了
        <img
          className={`absolute bottom-[19px] md:bottom-[50px] xl:bottom-9 ${
            screenLevel == "xl"
              ? "left-8"
              : screenLevel == "sm"
                ? "left-5"
                : mapMode == "common"
                  ? "left-9"
                  : "left-[476px]"
          }`}
          src={`/img/colorbar_${screenLevel}_${mapMode}.svg`}
          alt="colorBar"
        />
      )}
    </section>
  );
}
