import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home/Home.jsx";
import "../src/assets/styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Home /> {}
    </React.StrictMode>,
);
