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
          <th>***</th>
          <th>Aktuellster Datenstand</th>
          <th>Untere Grenze Unsicherheitsintervall</th>
          <th>Nowcast</th>
          <th>Obere Grenze Unsicherheitsintervall</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>{"***"}</td>
            <td>{"***"}</td>
            <td>{item.quantileKlein}</td>
            <td>{item.value}</td>
            <td>{item.quantileGroß}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
