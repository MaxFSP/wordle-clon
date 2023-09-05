interface IRow {
  rowNumber: string;
}

const Rows = (props: IRow) => {
  return (
    <div
      className="mb-3 grid grid-cols-5 gap-1"
      aria-label={`Row ${props.rowNumber}`}
    >
      <div className="h-20 w-20 border-2 border-gray-500 bg-black"> </div>
      <div className="h-20 w-20 border-2 border-gray-500 bg-black"> </div>
      <div className="h-20 w-20 border-2 border-gray-500 bg-black"> </div>
      <div className="h-20 w-20 border-2 border-gray-500 bg-black"> </div>
      <div className="h-20 w-20 border-2 border-gray-500 bg-black"> </div>
    </div>
  );
};

export default Rows;
