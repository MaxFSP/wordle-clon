import { createRoot } from "react-dom/client";
import Rows from "./components/Rows";
import { useEffect, useState } from "react";

const App = () => {
  const [letter, setletter]= useState("");
  useEffect(()=>{
    const listener = (e:KeyboardEvent)=>{
      const key = e.key;
      setletter(key);

      }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }

    })

  return (<div className="m-0 p-0 bg-black flex items-center justify-center">
      <div className="Board w-50">

      <p className="text-white">{letter}</p>
      <Rows rowNumber="1"/>
      <Rows rowNumber="2"/>
      <Rows rowNumber="3"/>
      <Rows rowNumber="4"/>
      <Rows rowNumber="5"/>
      <Rows rowNumber="6"/>
      </div>
      

      
 
  

    </div>);};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
