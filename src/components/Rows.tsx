
interface IRow {
  rowNumber: string;
  
  }


  const Rows = (props:IRow) => {

return(
    <div className="mb-3 grid-cols-5 grid" aria-label={`Row ${props.rowNumber}`}> 

      <input type="text" maxLength={1} className=" border-2 w-20 h-20 border-black"/> 
      <input type="text" maxLength={1} className=" border-2 w-20 h-20 border-black"/> 
      <input type="text" maxLength={1} className=" border-2 w-20 h-20 border-black"/> 
      <input type="text" maxLength={1} className=" border-2 w-20 h-20 border-black"/> 
      <input type="text" maxLength={1} className=" border-2 w-20 h-20 border-black"/> 

      </div>
);

  };


export default Rows;
