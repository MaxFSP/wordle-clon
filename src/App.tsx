import { createRoot } from "react-dom/client";

import Wordle from "./Wordle";

const App = () => {
  return (
    <div className="m-0 p-0">
      <Wordle />
    </div>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);

root.render(<App />);
