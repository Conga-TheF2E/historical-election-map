"use client";
import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

import cityCenter from "@/public/map/city-center.json";

const getMercatorScale = () => {
  if (typeof window === "undefined") return 0;
  const w = window.innerWidth;
  const h = window.innerHeight;

  if (w > 1600) {
    return 15000;
  } else if (w > 1200) {
    return 12000;
  } else if (w > 700 && h > 800) {
    return 10000;
  } else {
    return 8000;
  }
};

function returnColor(percent, party, mode = "common") {
  let color = "blue";
  let level = 300;
  if (mode === "common") {
    if (party === "中國國民黨") {
      color = "blue";
    } else if (party === "民主進步黨") {
      color = "green";
    }
  } else if (mode === "blue") {
    color = "blue";
  } else if (mode === "green") {
    color = "green";
  } else if (mode === "orange") {
    color = "orange";
  }

  if (percent > 65) {
    level = 600;
  } else if (percent > 60) {
    level = 500;
  } else if (percent > 55) {
    level = 400;
  } else {
    level = 300;
  }

  return `fill-${color}-${level}`;
}

export default React.memo(function Map({
  svgSize,
  onCityClick,
  enteredSecondPage,
  cityDetail,
  cityCode,
  setCityCode,
  mapMode,
  setIsMapLoading,
}) {
  // 各城鎮的顏色
  const [cityColor, setCityColor] = useState(null);

  useEffect(() => {
    if (!cityDetail) return;
    const color = {};
    cityDetail.forEach((city) => {
      color[city.cityCode] = returnColor(
        city.voteDetail[city.voteDetail.winner].percentage,
        city.voteDetail.winner,
        mapMode
      );
    });

    setCityColor(color);
  }, [cityDetail, mapMode]);

  useEffect(() => {
    if (!svgSize || !cityColor) return;
    const { width, height, size } = svgSize;
    const isMobile = size === "sm";
    const mercatorScale = getMercatorScale();

    d3.select("#map").selectAll("svg").remove();

    const svg = d3
      .select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("background-color", "transparent");

    const g = svg.append("g");

    var projectmethod = d3
      .geoMercator()
      .center([120.95, 23.96])
      .scale(mercatorScale)
      .translate([width / 2, height / 2.5]);

    var pathGenerator = d3.geoPath().projection(projectmethod);

    const topoJson = "/map/topo.json";

    d3.json(topoJson).then((data) => {
      const countyGeometries = topojson.feature(
        data,
        data.objects["COUNTY_MOI_1090820"]
      );

      const countyPaths = g.selectAll("path").data(countyGeometries.features);

      function pathClass(cityID) {
        return `${cityColor[cityID]} hover:opacity-50 will-change-fill delay-200 during-150 transition ease-out cursor-pointer`;
      }

      countyPaths
        .enter()
        .append("path")
        .attr("d", pathGenerator)
        .attr("id", (d) => d.properties.COUNTYID)
        .attr("stroke", "black")
        .attr("class", (d) => pathClass(d.properties.COUNTYID))
        .on("click", function (event, d) {
          const currentCityCenter = cityCenter[d.properties.COUNTYID];
          setCityCode(d.properties.COUNTYID);
          onCityClick({ dx, dy, scale });

          const [x, y] = projectmethod([
            currentCityCenter.longitude,
            currentCityCenter.latitude,
          ]);

          const scale = isMobile ? 1.1 : 1;
          const dx = isMobile ? -(x - width / 2) * scale : 0;
          const dy = isMobile ? -(y - height / 2) * scale - 90 : 0; // 多向上移動 50px

          // 修改除被点击路径外其他路径元素的类

          d3.selectAll("path").each(function () {
            const currentPath = d3.select(this);
            currentPath.classed("hover:opacity-50", false);

            if (currentPath.node().id !== d.properties.COUNTYID) {
              const fillColor = currentPath
                .attr("class")
                .match(/\bfill-\S+-\d+\b/g);
              if (fillColor?.[0] && fillColor[0] !== "fill-gray-100") {
                currentPath.classed(fillColor[0], false);
                currentPath.classed("fill-gray-100", true);
              }
            } else {
              const fillColor = currentPath
                .attr("class")
                .match(/\bfill-\S+-\d+\b/g);
              if (fillColor?.[0] && fillColor[0] === "fill-gray-100") {
                currentPath.classed(fillColor[0], false);
                currentPath.classed(cityColor[currentPath.attr.id], true);
              }
            }
          });
        });
    });

    d3.transition().on("end", function () {
      setIsMapLoading(false);
    });
  }, [svgSize, cityColor]);

  useEffect(() => {
    if (enteredSecondPage || cityCode !== "") return;
    // refill paths
    d3.selectAll("path").each(function () {
      const currentPath = d3.select(this);
      const pathID = currentPath.id;
      const fillColor = currentPath.attr("class").match(/\bfill-\S+-\d+\b/g);
      if (fillColor?.[0] && fillColor[0] === "fill-gray-100") {
        currentPath.classed("fill-gray-100", false);
        currentPath.classed(cityColor(pathID), true);
      }
    });
  }, [enteredSecondPage, cityCode]);

  return (
    <>
      <div
        className="inline-block"
        id="map"
        style={{
          visibility: enteredSecondPage ? "visible" : "hidden",
          position: enteredSecondPage ? "relative" : "absolute",
        }}
      >
        {/* 地圖會以 D3 產生 */}
      </div>

      {/* 避免 tree-shaking 讓class失效 */}
      <div className="hidden fill-blue-300 fill-blue-400 fill-blue-500 fill-blue-600 fill-green-300 fill-green-400 fill-green-500 fill-green-600"></div>
    </>
  );
});
