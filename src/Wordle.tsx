import Rows from "./components/Rows";
import { useEffect, useState } from "react";

const Wordle = () => {
  const [letter, setletter] = useState("");
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const key = e.key;

      setletter(key);
    };
    window.addEventListener("keyup", listener);

    return () => {
      window.removeEventListener("keyup", listener);
    };
  });
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="Board w-50">
        <p className="text-white">{letter}</p>
        <Rows rowNumber="1" />
        <Rows rowNumber="2" />
        <Rows rowNumber="3" />
        <Rows rowNumber="4" />
        <Rows rowNumber="5" />
        <Rows rowNumber="6" />
      </div>
    </div>
  );
};

export default Wordle;
