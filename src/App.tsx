// src/App.tsx
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";

// interactivity
import CartDrawer from "@/components/cart/CartDrawer";
import CartFab from "@/components/cart/CartFab";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import { Toaster } from "react-hot-toast";

// NEW pages
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderSuccess from "@/pages/OrderSuccess";

function Shell() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* global UI helpers */}
      <CartFab />
      <CartDrawer />
      <WhatsAppFab />
      <Toaster position="top-center" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/success/:id" element={<OrderSuccess />} />
      </Route>
    </Routes>
  );
}
