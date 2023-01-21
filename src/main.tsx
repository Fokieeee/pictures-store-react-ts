import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartProvider";
import PicturesContext, { PhotosProvider } from "./context/PhotosProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PhotosProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PhotosProvider>
  </React.StrictMode>
);
