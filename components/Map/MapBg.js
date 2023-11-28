import { useEffect, useState } from "react";

export default function MapBg({ selectedCity, mapMode }) {
  const [ratio, setRatio] = useState([53, 53]);
  useEffect(() => {
    if (!selectedCity) return;
    // return;
    const g_party = Number(selectedCity.voteDetail["民主進步黨"].percentage);
    const b_party = Number(selectedCity.voteDetail["中國國民黨"].percentage);
    const totalPercent = g_party + b_party;
    setRatio([
      (g_party / totalPercent).toFixed(2) * 100 + 5,
      (b_party / totalPercent).toFixed(2) * 100 + 5,
    ]);
  }, [selectedCity]);

  return mapMode === "common" ? (
    <>
      <div
        className={`delay-325 absolute left-0 top-0 z-0 h-full bg-green-400 transition-all duration-500 ease-in  ${
          selectedCity ? "translate-x-0" : " -translate-x-full "
        }`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
          width: `${ratio[0]}%`,
        }}
      ></div>
      <div
        className={`delay-325 absolute right-0 top-0 z-0  h-full bg-blue-400 transition-all duration-500 ease-in
          ${selectedCity ? "translate-x-0" : "translate-x-full"}`}
        style={{
          clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
          width: `${ratio[1]}%`,
        }}
      ></div>
    </>
  ) : null;
}
