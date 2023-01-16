import React, { useState, useEffect } from "react";
import { csv } from "d3";
import "./Style/General.css";

const csvkitladen = "https://raw.githubusercontent.com/KITmetricslab/hospitalization-nowcast-hub/main/data-processed/KIT-simple_nowcast/2023-01-09-KIT-simple_nowcast.csv";

export const useKITData = () => {
  const [dataKIT, setDataKIT] = useState(null);

  useEffect(() => {
    
    const row = (d) => {
//please change
      d.value = +d.value;
      d.target_end_date = new Date(d.target_end_date);

      return d;
    };

    csv(csvkitladen, row).then(setDataKIT);
  }, []);

  return dataKIT;


};