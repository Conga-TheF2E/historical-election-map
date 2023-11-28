export default function RenderColorBar({
  mapMode,
  selectedCity,
  enteredSecondPage,
}) {
  return (
    <section
      className={`bottom-0 left-0 ${
        !enteredSecondPage || (!selectedCity && mapMode !== "common")
          ? "hidden"
          : "absolute"
      }`}
    >
      <img src={`/img/colorBar_${mapMode}.svg`} alt="colorBar" />
    </section>
  );
}
