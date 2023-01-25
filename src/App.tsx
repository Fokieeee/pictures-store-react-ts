import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { PicturesList } from "./components/picturesList/PicturesList";
import "./App.css";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);
  return (
    <div className="App">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <Routes>
        <Route path="/" element={<PicturesList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
