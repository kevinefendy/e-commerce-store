import { useCart } from "../context/CardContext"
import { Button } from "../components/ui/button"
import { Link, useNavigate } from "react-router-dom"

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleCheckout = () => {
    // 1. alert dulu
    alert(`Terima kasih! Total belanja kamu Rp ${total.toLocaleString("id-ID")}`)

    // 2. setelah alert ditutup → kosongkan cart & pindah ke Home
    clearCart()
    navigate("/")
  }

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Keranjang kamu masih kosong 🛒</p>
        <Link to="/products">
          <Button className="mt-4">Belanja Sekarang</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Keranjang</h1>

      <div className="space-y-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.qty} x Rp {item.price.toLocaleString("id-ID")}
              </p>
            </div>
            <p className="font-bold text-blue-600">
              Rp {(item.price * item.qty).toLocaleString("id-ID")}
            </p>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeFromCart(item.id)}
            >
              Hapus
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total</span>
          <span className="text-xl font-bold text-blue-600">
            Rp {total.toLocaleString("id-ID")}
          </span>
        </div>
        <Button className="w-full" onClick={handleCheckout}>
          Beli Sekarang
        </Button>
      </div>
    </div>
  )
}