import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CardContext"
import Header from "./components/Header"
import Home from "./pages/Home"
import Products from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-5xl mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}