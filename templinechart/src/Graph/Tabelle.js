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
          <th>Model</th>
          <th>Target Type</th>
          <th>Forecast Date</th>
          <th>Target End Date</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>{item.model}</td>
            <td>{item.target_type}</td>
            <td>{item.forecast_date}</td>
            <td>{item.target_end_date}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
