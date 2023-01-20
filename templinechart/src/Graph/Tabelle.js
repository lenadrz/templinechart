

// // export const Tabelle = (dataTabelle) => {
// //    console.log(dataTabelle);
// export  function Tabelle (){
//   // render() {
//     // if(!this.props.data) return "hi";
//     return (
//       // <table>
//       //   <thead>
//       //     <tr>
//       //       <th>Header 1</th>
//       //       <th>Header 2</th>
//       //       <th>Header 3</th>
//       //     </tr>
//       //   </thead>
//       //   <tbody>
//       //     {this.props.data.map((row, index) => (
//       //       <tr key={index}>
//       //         <td>{row.location}</td>
//       //         <td>{row.quantileGroß}</td>
//       //         <td>{row.quantileKlein}</td>
//       //       </tr>
//       //     ))}
//       //   </tbody>
//       // </table>
      
//       <table>
//         <thead>
//           <tr>
//             <th>Header 1</th>
//             <th>Header 2</th>
//             <th>Header 3</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.props.data.map((row, index) => (
//             <tr>
//               <td>{row.population}</td>
//               <td>{"2"}</td>
//               <td>{"3"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }

export const Tabelle = ({ data }) => {
  if(!data) {return "loading"}
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
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.model}</td>
            <td>{item.target_type}</td>
            <td>{item.forecast_date}</td>
            <td>{item.target_end_date}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


// const App = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     loadData().then(loadedData => {
//       setData(loadedData);
//       setIsLoading(false);
//     });
//   }, []);

//   return (
//     <div>
//       {isLoading ? <p>Loading data...</p> : <Tabelle data={data} />}
//     </div>
//   );
// };
