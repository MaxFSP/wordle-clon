import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wordle from "./Wordle";

const App = () => {
  return (<div className="m-0 p-0">
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Wordle/>}/>
    </Routes>
  
    </BrowserRouter>

    </div>);};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
