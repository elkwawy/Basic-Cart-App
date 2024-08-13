import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/Cart/AppNavbar";
import Products from "./components/Cart/Products";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
