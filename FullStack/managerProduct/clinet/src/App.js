import { Routes, Route } from "react-router-dom";
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import ProductList from './components/ProductList';
<<<<<<< HEAD
import ProductUpdates from "./views/ProductUpdates";
=======
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
<<<<<<< HEAD
      <Route element={<ProductUpdates/>} path="/:id/edit"/>


=======
>>>>>>> 1152d6b7181357108f73b8ef5e05d6f9369da92f
    </Routes>
  );
}

export default App;
