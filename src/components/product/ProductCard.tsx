// src/components/product/ProductCard.tsx (replace file)
import { Product } from "@/types/entities";
import { Link } from "react-router-dom";
import { toKSh } from "@/utils/currency";
import { useAppDispatch } from "@/store";
import { add } from "@/store/slices/cartSlice";
import { ShoppingCart, Bell } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductCard({ p }: { p: Product }) {
  const d = useAppDispatch();
  const img = p.images?.[0]?.url || "https://picsum.photos/seed/talex/600/400";

  const onAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    d(add({ id: p.id, title: p.title, price_cents: p.price_cents, qty: 1, image: img }));
    toast.success("Added to cart");
  };

  return (
    <Link to={`/product/${p.slug}`} className="card-glass overflow-hidden group transition will-change-transform hover:-translate-y-0.5 hover:shadow-xl">
      <div className="relative">
        <img src={img} alt={p.title} loading="lazy" className="h-52 w-full object-cover transition group-hover:scale-[1.03]" />
        {p.stock === 0 && (
          <span className="absolute top-3 left-3 badge bg-gray-900/80 text-white inline-flex items-center gap-1.5">
            <Bell className="h-3.5 w-3.5" /> Notify me
          </span>
        )}
        {p.stock > 0 && (
          <button
            onClick={onAdd}
            className="absolute bottom-3 right-3 hidden group-hover:inline-flex btn-primary rounded-xl px-3 py-1.5 text-sm"
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add
          </button>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{p.brand}</div>
        <div className="font-semibold leading-snug line-clamp-2 min-h-[3rem]">{p.title}</div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark font-extrabold">
            {toKSh(p.price_cents)}
          </div>
          <div className="text-xs text-gray-500">{p.stock > 0 ? "In stock" : "Out of stock"}</div>
        </div>
      </div>
    </Link>
  );
}
