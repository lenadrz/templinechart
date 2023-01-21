import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Graph.css";
// import { getPopulation, Population } from "./Population";

let zwischenspeicher

const csvUrl =
  "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/data-truth/COVID-19/COVID-19_hospitalizations_preprocessed.csv";

export const useDataDatenstand = (methode, menuAge, selectedScope, anzeige, date) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {

    for(let i = 0; i <= 80; i++){
        zwischenspeicher = "value_" + i + "d";
        d.value[i] = +d.zwischenspeicher;
    }

      d.date = new Date(d.target_end_date);
      return d;
    };

    csv(csvUrl, row).then((loadedData) => {
      const filteredData = loadedData.filter(
        (d) =>
          d.model === methode &&
          d.location === selectedScope &&
          d.age_group === menuAge
      );
      setData(filteredData);
    });
  }, [methode, menuAge, selectedScope, anzeige]);

  console.log(data);
  return data;
};
