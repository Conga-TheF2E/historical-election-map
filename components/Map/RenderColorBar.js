export default function RenderColorBar(
  mapMode,
  selectedCity,
  enteredSecondPage
) {
  if (!enteredSecondPage || selectedCity || !mapMode) {
    return null;
  }
  return (
    <section
      className={`bottom-0 left-0 ${
        !enteredSecondPage || selectedCity ? "hidden" : "absolute"
      }`}
    >
      <img src={`/images/colorBar_${mapMode}.png`} alt="colorBar" />
    </section>
  );
}
