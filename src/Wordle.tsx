import { useState } from "react";
import Rows from "./components/Rows";

const Wordle = () => {


  return(
      <div className="flex items-center justify-center min-h-screen">
      <div className="Board w-1/4">
      <Rows rowNumber="1"/>
      <Rows rowNumber="2"/>
      <Rows rowNumber="3"/>
      <Rows rowNumber="4"/>
      <Rows rowNumber="5"/>
      <Rows rowNumber="6"/>
      </div>
      </div>
      )

  };


  export default Wordle;
