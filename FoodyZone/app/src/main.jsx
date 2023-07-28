import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";
const GlobalStyle =  createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
body{
  background-color:#5D5A5A;
}
`;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
