import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import  JugadoresApp  from "./JugadoresApp";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <JugadoresApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
