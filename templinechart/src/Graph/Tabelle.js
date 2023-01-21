import { useState, useEffect } from "react";
import { useData } from "../Graph/useData";
import "./DesignTabelle.css";

export const Tabelle = ({
  menuAge,
  selectedScope,
  intervall,
  anzeige,
  date,
  dataTabelleMethode,
}) => {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const data = useData(
    dataTabelleMethode,
    menuAge,
    selectedScope,
    intervall,
    anzeige,
    date
  );

  useEffect(() => {
    if (data) {
      setDataArray(data);
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <table>
      <thead >
        <tr class="Tabelle_header" >
          <th class="tabelle_hd">Bundesland</th>
          <th class="tabelle_hd">Aktuellster Datenstand</th>
          <th class="tabelle_hd">Datenstand am Tag des Nowcast</th>
          <th class="tabelle_hd">Untere Grenze Unsicherheitsintervall</th>
          <th class="tabelle_hd">Nowcast</th>
          <th class="tabelle_hd">Obere Grenze Unsicherheitsintervall</th>
          <th class="tabelle_hd">Korrekturfaktor</th>
          <th class="tabelle_hd">Prozentuale Veränderung zur Vorwoche</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>{"Deutschland"}</td>
            <td>{"****"}</td>
            <td>{"****"}</td>
            <td>{item.quantileKlein}</td>
            <td>{item.value}</td>
            <td>{item.quantileGroß}</td>
            <td>{"****"}</td>
            <td>{"****"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
