import React, { useSelector } from "react";

function CandidatesModal({
  mapMode,
  cityCode,
  screenLevel,
  enteredSecondPage,
}) {
  console.log(
    !enteredSecondPage || mapMode == "common" || cityCode || screenLevel
  );
  return !enteredSecondPage ||
    mapMode == "common" ||
    cityCode ||
    screenLevel == "sm" ? null : (
    <section className="absolute bottom-[50px] left-1/2 -translate-x-[350px] xl:bottom-1/2 xl:-translate-x-[594px] xl:translate-y-1/2">
      <img src={`/img/${mapMode}_modal.svg`} alt="" />
    </section>
  );
}

export default CandidatesModal;
