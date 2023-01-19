

// export const Tabelle = (dataTabelle) => {
//    console.log(dataTabelle);
export  function Tabelle (){
  // render() {
    // if(!this.props.data) return "hi";
    return (
      // <table>
      //   <thead>
      //     <tr>
      //       <th>Header 1</th>
      //       <th>Header 2</th>
      //       <th>Header 3</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {this.props.data.map((row, index) => (
      //       <tr key={index}>
      //         <td>{row.location}</td>
      //         <td>{row.quantileGroß}</td>
      //         <td>{row.quantileKlein}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
      
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.props.data.map((row, index) => ( */}
            <tr>
              <td>{"hi1"}</td>
              <td>{"2"}</td>
              <td>{"3"}</td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    );
  }



