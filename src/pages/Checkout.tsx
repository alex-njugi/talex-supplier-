// src/pages/Checkout.tsx
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useAppSelector } from "@/store";
import { toKSh } from "@/utils/currency";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Smartphone } from "lucide-react";

export default function Checkout() {
  const { items, total_cents } = useAppSelector((s) => s.cart);
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mock place order → go to success
    const id = Date.now().toString();
    nav(`/order/success/${id}`);
  };

  return (
    <Container className="py-10">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <form onSubmit={onSubmit} className="lg:col-span-2 space-y-4">
          <div className="card-soft p-5 space-y-3">
            <div className="font-semibold">Contact & Delivery</div>
            <input
              className="input"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <div className="grid md:grid-cols-2 gap-3">
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                className="input"
                placeholder="Phone (M-Pesa)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <textarea
              className="input min-h-[90px]"
              placeholder="Delivery address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
            />
          </div>

          <div className="card-soft p-5 space-y-3">
            <div className="font-semibold">Payment</div>
            <div className="pill-mpesa">
              <Smartphone className="h-4 w-4 text-mpesa" />
              <span>M-Pesa Till — STK push on Place Order</span>
            </div>
            <button type="submit" className="btn-mpesa w-full rounded-xl py-3">
              Place Order & Pay
            </button>
          </div>
        </form>

        <div className="card-soft p-5 h-max">
          <div className="text-lg font-semibold mb-2">Order Summary</div>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            {items.map((it) => (
              <li key={it.id} className="flex justify-between">
                <span className="truncate pr-3">{it.title} × {it.qty}</span>
                <span>{toKSh(it.qty * it.price_cents)}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>{toKSh(total_cents)}</span>
          </div>
          <div className="mt-2 text-xs text-gray-500">Shipping calculated at dispatch.</div>
        </div>
      </div>
    </Container>
  );
}
