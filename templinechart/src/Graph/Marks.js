// import "./Graph.css";
// import { line, curveNatural, reduce } from "d3";

// export const Marks = ({
//   data,
//   xScale,
//   yScale,
//   xValue,
//   yValue,
//   // tooltipFormat,
//   circleRadius,
//   anzeigeAnAus,
//   yQuantileGroß,
//   yQuantileKlein,
//   farbe
// }) => (
//   <g className="mark" stroke={farbe}>
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yValue(d)))(data)
//         // .curve(curveNatural)(data) -> um Ecken runder zu machen
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yQuantileKlein(d)))(data)
//         // .curve(curveNatural)(data) -> um Ecken runder zu machen
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yQuantileGroß(d)))(data)
//         // .curve(curveNatural)(data) -> um Ecken runder zu machen
//       }
//     />
//   </g>
// );

// //  {/* <title>{tooltipFormat(xValue(d))}</title> */} für data.map
// // {data.map((d) => (
// //   <circle
// //     className="mark"
// //     fill={farbe}
// //     visibility={anzeigeAnAus}
// //     cx={xScale(xValue(d))}
// //     cy={yScale(yValue(d))}
// //     r={2}
// //   ></circle>
// // ))}

// import "./Graph.css";
// import { line, curveNatural, reduce, area } from "d3";

// export const Marks = ({
//   data,
//   xScale,
//   yScale,
//   xValue,
//   yValue,
//   // tooltipFormat,
//   circleRadius,
//   anzeigeAnAus,
//   yQuantileGroß,
//   yQuantileKlein,
//   farbe
// }) => (
//   <g className="mark" stroke={farbe}>
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yValue(d)))(data)
//         // .curve(curveNatural)(data) -> um Ecken runder zu machen
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yQuantileKlein(d)))(data)
//         // .curve(curveNatural)(data) -> um Ecken runder zu machen
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yQuantileGroß(d)))(data)
//         // .curve(curveNatural)(data) -> um Ecken runder zu machen
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill={farbe}
//       d={
//         area()
//           .x((d) => xScale(xValue(d)))
//           .y0((d) => yScale(yQuantileKlein(d)))
//           .y1((d) => yScale(yQuantileGroß(d)))(data)
//       }
//     />
//   </g>
// );

// import "./Graph.css";
// import { line, curveNatural, reduce, area } from "d3";

// export const Marks = ({
//   data,
//   xScale,
//   yScale,
//   xValue,
//   yValue,
//   // tooltipFormat,
//   circleRadius,
//   anzeigeAnAus,
//   yQuantileGroß,
//   yQuantileKlein,
//   farbe
// }) => (
//   <g className="mark" stroke={farbe}>
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yValue(d)))(data)
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yQuantileKlein(d)))(data)
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill="none"
//       stroke={farbe}
//       d={
//         line()
//           .x((d) => xScale(xValue(d)))
//           .y((d) => yScale(yQuantileGroß(d)))(data)
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill={"rgba(255,0,0,0.2)"}
//       d={
//         area()
//           .x((d) => xScale(xValue(d)))
//           .y0((d) => yScale(yQuantileKlein(d)))
//           .y1((d) => yScale(yValue(d)))(data)
//       }
//     />
//     <path
//       visibility={anzeigeAnAus}
//       fill={"rgba(255,0,0,0.2)"}
//       d={
//         area()
//           .x((d) => xScale(xValue(d)))
//           .y0((d) => yScale(yValue(d)))
//           .y1((d) => yScale(yQuantileGroß(d)))(data)
//       }
//     />
//   </g>
// );


import "./Graph.css";
import { line, curveNatural, reduce, area } from "d3";

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  // tooltipFormat,
  circleRadius,
  anzeigeAnAus,
  yQuantileGroß,
  yQuantileKlein,
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
    <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={`rgba(${farbe},0.4)`}
      d={
        line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yQuantileKlein(d)))(data)
      }
    />
    <path
      visibility={anzeigeAnAus}
      fill="none"
      stroke={`rgba(${farbe},0.4)`}
      d={
        line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yQuantileGroß(d)))(data)
      }
    />
    <path
      visibility={anzeigeAnAus}
      fill={`rgba(${farbe},0.2)`}
      d={
        area()
          .x((d) => xScale(xValue(d)))
          .y0((d) => yScale(yQuantileKlein(d)))
          .y1((d) => yScale(yValue(d)))(data)
      }
    />
    <path
      visibility={anzeigeAnAus}
      fill={`rgba(${farbe},0.2)`}
      d={
        area()
          .x((d) => xScale(xValue(d)))
          .y0((d) => yScale(yValue(d)))
          .y1((d) => yScale(yQuantileGroß(d)))(data)
      }
    />
  </g>
);
