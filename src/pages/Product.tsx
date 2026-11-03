import { products } from "../data/product"
import ProductCard from "../components/ProductCard"

export default function Products() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Daftar Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}