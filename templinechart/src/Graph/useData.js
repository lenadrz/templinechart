import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Graph.css";
import { getPopulation, Population } from "./Population"

const datum = "2023-01-10";

// const csvUrl =
//   "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/nowcast_viz_de/plot_data/" +
//   datum +
//   "_forecast_data.csv";

  const csvUrl = "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/nowcast_viz_de/plot_data/2023-01-20_forecast_data.csv";

export const useData = (
  methode,
  menuAge,
  selectedScope,
  intervall,
  anzeige,
  date
) => {
  let unteresQuantile;
  let oberesQuantile;

// console.log(methode + " " +selectedScope + " " + menuAge + " " + intervall + " " + " " + anzeige + " " + date);

  // let populationTabelle = getPopulation(menuAge,selectedScope);

  // console.log(populationTabelle);
  
  // let population = populationTabelle[0].population;


  // d.value = (+d.mean/+population) * 100000;
  // d.quantileKlein = (+[unteresQuantile]/population) * 100000;
  // d.quantileGroß = (+d[oberesQuantile]/population) * 100000;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (intervall === "FÜNFZIG") {
      unteresQuantile = "q0.25";
      oberesQuantile = "q0.75";
    } else if (intervall === "FÜNFundNEUNZIG") {
      unteresQuantile = "q0.025";
      oberesQuantile = "q0.975";
    } else {
      unteresQuantile = "mean";
      oberesQuantile = "mean";
    }

    const row = (d) => {
  
      if (anzeige === "hunderttausend") {
        d.value = +d.mean
        d.quantileKlein = +[unteresQuantile]
        d.quantileGroß = +d[oberesQuantile]
      } else {
        d.value = +d.mean;
        d.quantileKlein = +d[unteresQuantile];
        d.quantileGroß = +d[oberesQuantile];
      }

      d.date = new Date(d.target_end_date);
      return d;
    }; 

    csv(csvUrl, row).then((loadedData) => {
      const filteredData = loadedData.filter(
        (d) =>
          d.model === methode &&
          d.location ===  selectedScope &&
          d.age_group === menuAge
  
      );
      setData(filteredData);
    });
  }, [methode, menuAge, selectedScope, intervall, anzeige]);

  return data;
};







const csvUrl =
'https://github.com/KITmetricslab/hospitalization-nowcast-hub/blob/main/data-truth/COVID-19/COVID-19_hospitalizations_preprocessed.csv';


export const useDataFede = (
  menuAge,
  bundesland,
  // location,
  // date
) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.value = +d.value_0d;
      d.date = new Date(d.date);
      return d;
    };


    //    mit .startsWith('Value_') kann man filtern
    //    mit .map kann man die wiederaufrufen und verändern
    //    mit .reduce kann mann alle vorherigen Zahlen aufsummieren
    //    mit einer kombination der 3 ist es möglich die auf zu summieren
    //    WICHTIG! Das Startdatum soll zu den "Kalender" verknüpft setInterval, damit die Linie sich bewegen kann
    //    die reduce Zahl ist die die returned wird 
    //    Es handelt sich hierbei um die 7 Tage-Inzidenz, also muss man ja, die Werte der letzten 7 Tage ausfsummieren
    
        // sowas könnte für die 7 Tage-inzidenz helfen

    //     const subs = csvUrl.filter(
    //       x => 
    //       x.age_group === menuAge && 
    //       x.location === location &&
    //       x.date <= date
    //        );
    //       const matr = subs.filter(x => x.colnames(subs).startsWith("value_"));
    //       const matr_dates = Array.from({length: matr.length}, (_, i) => subs[i].date);
    //       const matr_delays = Array.from({length: matr_dates.length}, (_, i) => i);
    //       const matr_reporting_date = matr_dates.map((x, i) => x + matr_delays[i]);
    //       for (let i = 0; i < matr_reporting_date.length; i++) {
    //         if (matr_reporting_date[i] > date) {
    //         matr[i] = 0;
    //       }
    // }
    //     const newData = {date: subs.date, 
    //       value: Array(6).fill(null).concat(
    //         matr.map(x => x.reduce((a, b) => a + b)).map((x, i) => x.slice(i, i + 7))
    //       )
    //     };

  


    csv(csvUrl, row).then((loadedData) => {
      const filteredData = loadedData.filter(
        (d) =>
          d.location === bundesland && 
          d.age_group === menuAge
      );
      setData(filteredData);
    });
  }, [bundesland, menuAge]);

  return data;
};