import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./scss/app.scss";

import { App } from "./components/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
