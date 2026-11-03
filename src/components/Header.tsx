import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useCart } from "../context/CardContext"

export default function Header() {
  const { cart } = useCart()
  const totalItem = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-black-600">
          🛍️ VinnMart
        </Link>

        <nav className="flex items-center gap-2">
          <Link to="/">
            <Button variant="outline" size="sm">Home</Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="sm">Products</Button>
          </Link>
          <Link to="/cart">
            <Button size="sm">
              Cart ({totalItem})
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}