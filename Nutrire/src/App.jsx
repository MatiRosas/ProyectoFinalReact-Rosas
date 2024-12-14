import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import Card from "./components/Card";
import { CartProvider } from "./cotext/CartContext";
import { NotificationProvider } from "./cotext/NotificationContext";
// import ProductUpload from "./components/ProductsUpload/ProductUpload";

function App() {

  return (
    <BrowserRouter>
    <NotificationProvider>
    <CartProvider>
      <NavBar title="NUTRIRE" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />}  />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Route Product Upload usarla una sola vez!! (Truco) */}
          {/* <Route path="/productupload" element={<ProductUpload />} /> */}
          <Route path="/contacto" element={<Card />} />
          <Route path="*" element={<h1> Error 404 -  Página/Producto no encontrado </h1>} />
        </Routes>
    </CartProvider>
    </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
