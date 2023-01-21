import { useState, useEffect } from "react";
import { useData } from "../Graph/useData";

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
      <thead>
        <tr>
          <th>Bundesland</th>
          <th>Aktuellster Datenstand</th>
          <th>Datenstand am Tag des Nowcast</th>
          <th>Untere Grenze Unsicherheitsintervall</th>
          <th>Nowcast</th>
          <th>Obere Grenze Unsicherheitsintervall</th>
          <th>Korrekturfaktor</th>
          <th>Prozentuale Veränderung zur Vorwoche</th>
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
