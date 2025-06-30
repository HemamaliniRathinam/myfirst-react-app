import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import StoreContextProvider from "./Context/storecontext.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <BrowserRouter>
  <StoreContextProvider>
    <App />
    </StoreContextProvider>
   </BrowserRouter>
   </React.StrictMode>
   
   
  
)
