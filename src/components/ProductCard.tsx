import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import type { Product } from "../data/product"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-black-600 font-bold mt-1">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        <Link to={`/products/${product.id}`}>
          <Button className="w-full mt-3" size="sm">
            Lihat Detail
          </Button>
        </Link>
      </div>
    </div>
  )
}