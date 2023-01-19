import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Graph.css";

const datum = "2023-01-10";

const csvUrl =
  "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/nowcast_viz_de/plot_data/" +
  datum +
  "_forecast_data.csv";

export const useDataFede = (
  methode,
  menuAge,
  selectedScope,
  intervall,
  anzeige,
  date
) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.value = +d.mean;
      d.date = new Date(d.target_end_date);
      return d;
    };

    csv(csvUrl, row).then((loadedData) => {
      const filteredData = loadedData.filter(
        (d) =>
          d.model === methode && d.location === "DE" && d.age_group === menuAge
      );
      setData(filteredData);
    });
  }, [methode, menuAge, selectedScope, intervall, anzeige]);

  return data;
};
