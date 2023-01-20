import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import "./App.css";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { PicturesList } from "./components/picturesList/PicturesList";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);
  const pageContent = viewCart ? <Cart /> : <PicturesList />;
  return (
    <div className="App">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
    </div>
  );
}

export default App;
