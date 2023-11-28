import { useEffect, useState } from "react";

export default function MapBg({ cityDetail = null, selectedCity }) {
  const [ratio, setRatio] = useState([50, 50]);
  useEffect(() => {
    if (!selectedCity) return;
    // return;
    const g_party = selectedCity.voteDetail["民主進步黨"].percentage;
    const b_party = selectedCity.voteDetail["中國國民黨"].percentage;
    const totalPercent = g_party + b_party;
    setRatio([
      (g_party / totalPercent).toFixed(2) * 100 + 10,
      (b_party / totalPercent).toFixed(2) * 100 + 10,
    ]);
  }, [selectedCity]);
  return selectedCity ? (
    <>
      <div
        className={`absolute left-0 top-0 h-full bg-green-500 transition-transform ${
          selectedCity ? "translate-x-0" : " -translate-x-full"
        }}`}
        style={{
          clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)",
          width: `${ratio[0]}%`,
        }}
      ></div>
      <div
        className={`absolute right-0 top-0 h-full translate-x-full bg-blue-500 transition-transform
          ${selectedCity ? "translate-x-full" : "translate-x-0"}`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
          width: `${ratio[0]}%`,
        }}
      ></div>
    </>
  ) : null;
}
