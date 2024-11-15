import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/Product/ProductPage";
import { UserProvider } from "./components/context/UserContext";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
