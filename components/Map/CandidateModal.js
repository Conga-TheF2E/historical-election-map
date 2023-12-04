import React from "react";

function CandidatesModal({ mapMode, cityCode, screenLevel }) {
  return (
    <section
      className="absolute bottom-[50px] left-1/2 -translate-x-[350px] xl:bottom-1/2 xl:-translate-x-[594px] xl:translate-y-1/2"
      style={{
        // FIXME: 可用( mapMode == "common" || cityCode || screenLevel == "sm" ) ? null : (...你的section)
        // 或是用 && 的方式處理
        display:
          mapMode == "common" || cityCode || screenLevel == "sm"
            ? "none"
            : "block",
      }}
    >
      <img src={`/img/${mapMode}_modal.svg`} alt="" />
    </section>
  );
}

export default CandidatesModal;
