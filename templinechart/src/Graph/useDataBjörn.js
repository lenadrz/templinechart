import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Graph.css";
// import { getPopulation, Population } from "./Population";

let zwischenspeicher;

const dateEnde = new Date("2023-01-19"); //dies muss nachher noch global festgelegt und übergeben werden. Zur einfacheren Handhabung lege ich es hier fest.
const dateAnfang = new Date("2022-12-23"); //das gleiche gilt hierfür. Dies ergebt sich aus dem Anfang der Methoden. Also dem Start des Graphen

const csvUrl =
  "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/data-truth/COVID-19/COVID-19_hospitalizations_preprocessed.csv";

export const useDataDatenstand = (
  methode,
  menuAge,
  selectedScope,
  anzeige,
  date
) => {
  const [data, setData] = useState(null);
  const [datesAfterEnde, setDatesAfterEnde] = useState(null);

  useEffect(() => {
    const row = (d) => {
      for (let i = 0; i <= 80; i++) {
        d[`value_${i}d`] = parseFloat(d[`value_${i}d`]);
      }
      d["value_>80d"] = parseFloat(d["value_>80d"]);
      d.date = new Date(d.date).toISOString().substring(0, 10);
      return d;
    };

    csv(csvUrl, row).then((loadedData) => {
      const filteredData = loadedData.filter(
        (d) => d.location === selectedScope && d.age_group === menuAge
      );
      setData(filteredData);

      // Find the number of dates after dateEnde in the filtered data
      const dateEndePosition = filteredData.findIndex(
        (d) => d.date.getTime() === dateEnde.getTime()
      );
      const datesAfterEnde = filteredData.slice(dateEndePosition + 1).length;
      setDatesAfterEnde(datesAfterEnde);

      // Iterate through the filtered data and calculate the sums
      const sums = [];
      const dates = [];
      for (let i = 0; i < filteredData.length - datesAfterEnde; i++) {
        if (
          filteredData[i].date >= dateAnfang &&
          filteredData[i].date <= dateEnde
        ) {
          let sum = 0;
          for (let j = i; j < i + 7; j++) {
            for (let k = 0; k <= 80; k++) {
              sum += filteredData[j][`value_${k}d`];
            }
          }
          sums.push(sum);
          dates.push(filteredData[i].date);
        }
      }
      setData({ dates: dates, sums: sums });
    });



  }, [methode, menuAge, selectedScope, anzeige]);

  console.log(datesAfterEnde);

  return data;
};
