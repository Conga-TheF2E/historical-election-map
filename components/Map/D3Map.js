"use client";
import React, { useEffect } from "react";
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

export default React.memo(function Map({
  svgSize,
  onCityClick,
  enteredSecondPage,
  voteDetail,
}) {
  function setColor(percent, party) {
    let color = "blue";
    let level = 300;
    if (party === "中國國民黨") {
      color = "blue";
    } else if (party === "民主進步黨") {
      color = "green";
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
    return `fill-${color}${level}`;
    // return Math.random() > 0.5 ? "fill-blue-500" : "fill-green-500";
  }

  useEffect(() => {
    if (!svgSize) return;
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

      function pathClass() {
        console.log({ voteDetail });
        return `fill-transparent hover:opacity-50 will-change-fill delay-200 during-150 transition ease-out`;
      }

      countyPaths
        .enter()
        .append("path")
        .attr("d", pathGenerator)
        .attr("id", (d) => "city" + d.properties.COUNTYCODE)
        .attr("stroke", "black")
        .attr("class", () => pathClass())
        .on("click", function (event, d) {
          const currentCityCenter = cityCenter[d.properties.COUNTYID];

          const [x, y] = projectmethod([
            currentCityCenter.longitude,
            currentCityCenter.latitude,
          ]);

          const scale = isMobile ? 1.1 : 1;
          const dx = isMobile ? -(x - width / 2) * scale : 0;
          const dy = isMobile ? -(y - height / 2) * scale - 90 : 0; // 多向上移動 50px

          onCityClick({ dx, dy, scale });

          // 修改除被点击路径外其他路径元素的类

          d3.selectAll("path").each(function () {
            const currentPath = d3.select(this);
            currentPath.classed("hover:opacity-50", false);

            if (currentPath.node().id !== `city${d.properties.COUNTYCODE}`) {
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
                currentPath.classed(getRandomColor(), true);
              }
            }
          });
        });
    });
  }, [svgSize]);

  useEffect(() => {
    if (enteredSecondPage) return;
    // refill paths
    d3.selectAll("path").each(function () {
      const currentPath = d3.select(this);
      const fillColor = currentPath.attr("class").match(/\bfill-\S+-\d+\b/g);
      if (fillColor?.[0] && fillColor[0] === "fill-gray-100") {
        currentPath.classed("fill-gray-100", false);
        currentPath.classed(getRandomColor(), true);
      }
    });
  }, [enteredSecondPage]);

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
    </>
  );
});
