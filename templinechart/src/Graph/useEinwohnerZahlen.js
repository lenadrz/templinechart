// import React, { useState, useEffect } from "react";
// import { csv } from "d3";
// import "./Graph.css";

// const csvUrl =
// "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/other_data/population_sizes.csv";

// export function useEinwohnerZahlen(menuAge, selectedScope) {

  
//   if(!menuAge){menuAge ="00+"}
//   if(!selectedScope){selectedScope="DE"}


//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const row = (d) => {
//       d.population = +d.population;

//       return d;
//     };

//     csv(csvUrl, row).then((loadedData) => {
//       const filteredData = loadedData.filter(
//         (d) => d.location === selectedScope && d.age_group === menuAge
//       );
//       setData(filteredData);
//     });
//   }, [menuAge, selectedScope]);

//   return data;
// }
