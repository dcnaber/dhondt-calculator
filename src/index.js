import './index.css';
import reportWebVitals from './reportWebVitals';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

import Calculator from "./pages/Calculator";
import App from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <App />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
