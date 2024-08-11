import { Routes, Route } from "react-router-dom";
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import ProductList from './components/ProductList';
import ProductUpdates from "./views/ProductUpdates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route element={<ProductUpdates/>} path="/:id/edit"/>


    </Routes>
  );
}

export default App;
