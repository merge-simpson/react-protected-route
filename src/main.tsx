import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <App />
    </Routes>
  </BrowserRouter>
);
