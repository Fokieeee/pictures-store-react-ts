import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartProvider";
import PicturesContext, { PhotosProvider } from "./context/PhotosProvider";

import './styles/reset.scss'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <PhotosProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PhotosProvider>
    </HashRouter>
  </React.StrictMode>
);
