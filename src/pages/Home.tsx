import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import ProductCard from "../components/ProductCard"
import { products } from "../data/product"
import {
  Flame,
  ShoppingBag,
  Sparkles,
  Truck,
  Wallet,
  Star,
  ShieldCheck,
  ArrowRight,
  Gift,
  PartyPopper,
} from "lucide-react"

export default function Home() {
  // ambil 4 produk pertama sebagai "terlaris"
  const featuredProducts = products.slice(0, 4)

  const features = [
    { icon: Truck, title: "Gratis Ongkir", desc: "Min. belanja Rp 100rb" },
    { icon: Wallet, title: "Harga Murah", desc: "Lebih hemat tiap hari" },
    { icon: Star, title: "Kualitas Terjamin", desc: "Produk pilihan" },
    { icon: ShieldCheck, title: "Aman & Terpercaya", desc: "Pembayaran aman" },
  ]

  return (
    <div className="py-8 space-y-16">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="relative z-10 px-8 md:px-12 py-14 md:py-20 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-sm font-semibold px-3 py-1 rounded-full mb-4">
            <Flame className="w-4 h-4" /> Promo Spesial Hari Ini
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Belanja Mudah,<br />
            Harga Bersahabat
          </h1>

          <p className="mt-4 text-purple-100 text-base md:text-lg">
            Temukan produk favoritmu di VinnMart. Kualitas terjamin,
            pengiriman cepat ke seluruh Indonesia.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products">
              <Button
                size="default"
                className="bg-white text-purple-600 hover:bg-purple-50 font-semibold"
              >
                Belanja Sekarang <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button
                variant="outline"
                size="default"
                className="border-white text-purple-600 hover:bg-white/10 hover:text-white"
              >
                Lihat Keranjang
              </Button>
            </Link>
          </div>
        </div>

        {/* dekorasi icon */}
        <ShoppingBag className="absolute -right-6 -bottom-6 w-[180px] h-[180px] opacity-20 select-none hidden md:block" />
        <Sparkles className="absolute right-24 top-8 w-16 h-16 opacity-30 select-none hidden md:block" />
      </section>

      {/* ================= FITUR / KEUNGGULAN ================= */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 inline-flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" /> Kenapa Belanja di VinnMart?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-purple-50 text-purple-600">
                    <Icon className="w-5 h-5" />
                  </span>
                </div>
                <p className="font-semibold text-gray-800 text-sm">{f.title}</p>
                <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================= PRODUK TERLARIS ================= */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 inline-flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" /> Produk Terlaris
          </h2>
          <Link
            to="/products"
            className="text-purple-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
          >
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500 text-white text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold inline-flex items-center justify-center gap-2">
          <PartyPopper className="w-7 h-7" /> Diskon 20% untuk Pembelian Pertama
        </h2>
        <p className="mt-2 text-white/90">
          Gunakan kode promo:{" "}
          <span className="font-mono font-bold bg-white/20 px-2 py-1 rounded">
            VINN20
          </span>
        </p>
        <Link to="/products">
          <Button
            size="default"
            className="mt-6 bg-white text-purple-600 hover:bg-purple-50 font-bold"
          >
            Klaim Sekarang
          </Button>
        </Link>
        <Gift className="absolute -left-8 -top-8 w-28 h-28 opacity-20 select-none" />
        <PartyPopper className="absolute -right-8 -bottom-8 w-28 h-28 opacity-20 select-none" />
      </section>
    </div>
  )
}