import "./Graph.css";
import { line, curveNatural, reduce, area } from "d3";

export const MarksFede = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  anzeigeAnAus,
  farbe
}) => (
  <g className="mark" stroke={farbe}>
    <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={`rgba(${farbe},0.9)`}
      d={
        line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yValue(d)))(data)
      }
    />
  </g>
);
