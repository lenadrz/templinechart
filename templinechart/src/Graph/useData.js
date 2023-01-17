import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Graph.css";

const datum = "2023-01-10";

const csvUrl =
  "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/nowcast_viz_de/plot_data/" +
  datum +
  "_forecast_data.csv";

export const useData = (methode, menuAge) => { 

  const selectedScope1 = "DE";
  const unteresQuantile = "q0.025"; 
  const oberesQuantile = "q0.975";

  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      //Wie kann ich q0.5 nutzen? Da macht mir nämlich der Punkt ein Problem.
      d.value = +d.mean; 
      d.quantileKlein = +d[unteresQuantile];
      d.quantileGroß= +d[oberesQuantile];
      d.date = new Date(d.target_end_date);
      return d;
    };

    csv(csvUrl, row).then((loadedData) => {
      const filteredData = loadedData.filter(
        (d) =>
          d.model === methode && d.location === selectedScope1 && d.age_group === "00+"

      );
      setData(filteredData);
    });
  }, []);

  return data;
};
