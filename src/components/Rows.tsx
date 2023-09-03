
interface IRow {
  rowNumber: string;
  
  }


  const Rows = (props:IRow) => {

return(
    <div className="mb-3 grid-cols-5 grid gap-1" aria-label={`Row ${props.rowNumber}`}> 

      <div className="border-2 w-20 h-20 border-gray-500 bg-black"> </div> 
      <div className="border-2 w-20 h-20 border-gray-500 bg-black"> </div> 
      <div className="border-2 w-20 h-20 border-gray-500 bg-black"> </div> 
      <div className="border-2 w-20 h-20 border-gray-500 bg-black"> </div> 
      <div className="border-2 w-20 h-20 border-gray-500 bg-black"> </div> 
      </div>
);

  };


export default Rows;
