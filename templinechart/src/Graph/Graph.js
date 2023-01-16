import React, { useEffect, useState, useCallback } from "react";
import { scaleLinear, scaleTime, timeFormat, min, max, tickStep } from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import "./Graph.css";
import { line, curveNatural } from "d3";


const height = 500;
const margin = { top: 20, right: 10, bottom: 65, left: 100 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

//_______________________________________________________

export const Graph = ({
  isVisible,
  isDatenstand,
  isEpiforecast,
  isILM,
  isKIT,
  isLMU,
  isNowcast,
  isRIVM,
  isRKI,
  isSU,
  isSZ,
  menuAge, 
  anzeige,
  selectedScope, 
  date, 
  intervall
}) => {
  let width = 800;

  const date1 = date.toString();

  console.log(date);
  let anzeigeDatenstand;

  let anzeigeEpiforecast;
  let anzeigeILM;
  let anzeigeKIT;
  let anzeigeLMU;
  let anzeigeNowcast;
  let anzeigeRIVM;
  let anzeigeRKI;
  let anzeigeSU;
  let anzeigeSZ;

  const data = useData("ILM-prop"); //muss noch gelöscht werden

  const EPIdata = useData("Epiforecasts-independent", date1);
  const ILMdata = useData("ILM-prop", date1);
  const KITdata = useData("KIT-simple_nowcast", date1);
  const LMUdata = useData("LMU_StaBLab-GAM_nowcast", date1);
  const Nowcastdata = useData("NowcastHub-MeanEnsemble", date1);
  const RIVMdata = useData("RIVM-KEW", date1);
  const RKIdata = useData("RKI-weekly_report", date1);
  const SUdata = useData("SU-hier_bayes", date1 );
  const SZdata = useData("SZ-hosp_nowcast", date1);

  if (isVisible === true) {
    width = 800;
  } else {
    width = 1100;
  }

  if (isEpiforecast) {
    anzeigeDatenstand = "visible";
  } else {
    anzeigeDatenstand = "hidden";
  }

  if (isDatenstand) {
    anzeigeEpiforecast = "visible";
  } else {
    anzeigeEpiforecast = "hidden";
  }

  if (isILM) {
    anzeigeILM = "visible";
  } else {
    anzeigeILM = "hidden";
  }

  if (isKIT) {
    anzeigeKIT = "visible";
  } else {
    anzeigeKIT = "hidden";
  }

  if (isLMU) {
    anzeigeLMU = "visible";
  } else {
    anzeigeLMU = "hidden";
  }

  if (isNowcast) {
    anzeigeNowcast = "visible";
  } else {
    anzeigeNowcast = "hidden";
  }

  if (isRIVM) {
    anzeigeRIVM = "visible";
  } else {
    anzeigeRIVM = "hidden";
  }

  if (isRKI) {
    anzeigeRKI = "visible";
  } else {
    anzeigeRKI = "hidden";
  }

  if (isSU) {
    anzeigeSU = "visible";
  } else {
    anzeigeSU = "hidden";
  }

  if (isSZ) {
    anzeigeSZ = "visible";
  } else {
    anzeigeSZ = "hidden";
  }

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  //please change

  const xValue = (d) => d.date;
  const xAxisLabel = "Meldedatum";

  const yValue = (d) => d.value;
  const yAxisLabel = "7 Tage Hospitalisierungsinzidenz";

  // const siFormat = format('.2s');
  // const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

  const xAxisTickFormat = timeFormat("%d.%m.%Y");

  //Für das richtige timeformat siehe: https://gist.github.com/zanarmstrong/ca0adb7e426c12c06a95

  //vll wieder zu scaleLinear ändern
  const xScale = scaleTime()
    .domain([min(data, xValue), max(data, xValue)])
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])
    .nice();

  // .range([innerHeight, 0])

  // anstatt 0 kann man auch :min(data, yValue) nehmen

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={10}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset - 25},${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={10} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset + 10}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <g className="mark">
          <Marks
            data={EPIdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeEpiforecast}
            farbe={"red"}
            menuAge={menuAge}
            selectedScope={selectedScope}
          />

          <Marks
            data={ILMdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeILM}
            farbe={"blue"}
                menuAge={menuAge}
            selectedScope={selectedScope}
          />
          <Marks
            data={KITdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeKIT}
            farbe={"yellow"}
          />
          <Marks
            data={LMUdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeLMU}
            farbe={"black"}
          />
          <Marks
            data={Nowcastdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeNowcast}
            farbe={"green"}
          />

          <Marks
            data={RIVMdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeRIVM}
            farbe={"brown"}
          />
          <Marks
            data={RKIdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeRKI}
            farbe={"purple"}
          />
          <Marks
            data={SUdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeSU}
            farbe={"grey"}
          />
          <Marks
            data={SZdata}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            circleRadius={3}
            anzeigeAnAus={anzeigeSZ}
            farbe={"green"}
          />
        </g>
      </g>
    </svg>
  );
};

// Für Punkte im Graphen:
// {data.map((d) => (
//   <circle
//     // className="mark"
//     cx={xScale(xValue(d))}
//     cy={yScale(yValue(d))}
//     r={3}
//   >
//     <title>{xAxisTickFormat(xValue(d))}</title>
//   </circle>
// ))
// }

{
  /* <Marks
        data={data}
        xScale={xScale}
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        tooltipFormat={tooltipFormat}
        circleRadius={circleRadius}
        isDatenstand={isDatenstand}
      /> */
}
