import { useParams, useNavigate } from "react-router-dom"
import { products } from "../data/product"
import { Button } from "../components/ui/button"
import { useCart } from "../context/CardContext"

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return <p className="py-10 text-center">Produk tidak ditemukan 😢</p>
  }

  const handleAdd = () => {
    addToCart(product)
    alert(`${product.name} ditambahkan ke keranjang!`)
  }

  return (
    <div className="py-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl text-black-600 font-bold mt-2">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="flex gap-3 mt-6">
            <Button onClick={handleAdd}>Tambah ke Cart</Button>
            <Button variant="outline" onClick={() => navigate("/products")}>
              Kembali
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}