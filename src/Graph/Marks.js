import "./Graph.css";
import { line, curveNatural, reduce } from "d3";

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  // tooltipFormat,
  circleRadius,
  anzeigeAnAus,
  farbe
}) => (
  <g className="mark" stroke={farbe}>
    <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={farbe}
      d={
        line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yValue(d)))(data)
        // .curve(curveNatural)(data) -> um Ecken runder zu machen
      }
    />

    {data.map((d) => (
      <circle
        className="mark"
        fill={farbe}
        visibility={anzeigeAnAus}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={2}
      ></circle>
    ))}
  </g>
);

//  {/* <title>{tooltipFormat(xValue(d))}</title> */} für data.map
