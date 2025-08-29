// src/pages/Home.tsx
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/product/ProductCard";
import SocialLinks from "@/components/ui/SocialLinks";
import SearchBar from "@/components/ui/SearchBar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { setProducts } from "@/store/slices/productSlice";
import { BRAND } from "@/lib/brand";
import { ShieldCheck, Truck, Store, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1920&q=80"; // poster fallback
const HERO_POSTER = HERO_IMAGE;
const HERO_VIDEO_MP4 = "/media/talex-hero.mp4";
const HERO_VIDEO_WEBM = "/media/talex-hero.webm";

export default function Home() {
  const d = useAppDispatch();
  const products = useAppSelector((s) => s.product.products);

  useEffect(() => {
    d(
      setProducts([
        {
          id: "swc-3d",
          title: "3D Steering Wheel Covers (Assorted)",
          slug: "3d-steering-wheel-covers",
          sku: "SWC-3D",
          brand: "Talex",
          category_id: "car",
          price_cents: 80000,
          stock: 12,
          is_active: true,
          images: [{ url: "https://picsum.photos/seed/talex-swc/600/400" }],
        },
        {
          id: "wipers-metal",
          title: "Metallic Wiper Blades (Pair)",
          slug: "metallic-wiper-blades",
          sku: "WIPER-METAL",
          brand: "Talex",
          category_id: "car",
          price_cents: 45000,
          stock: 20,
          is_active: true,
          images: [{ url: "https://picsum.photos/seed/talex-wiper/600/400" }],
        },
        ...Array.from({ length: 6 }).map((_, i) => ({
          id: `feat-${i + 1}`,
          title: `Premium Car Accessory ${i + 1}`,
          slug: `premium-car-accessory-${i + 1}`,
          sku: `SKU${i + 1}`,
          brand: i % 2 ? "Bosch" : "Talex",
          category_id: "car",
          price_cents: 249900,
          stock: i % 3 ? 12 : 0,
          is_active: true,
          images: [{ url: `https://picsum.photos/seed/talex-${i}/600/400` }],
        })),
      ])
    );
  }, [d]);

  return (
    <>
      {/* HERO — video bg, NO white fade */}
      <section className="relative isolate overflow-hidden">
        {/* Background video + dark vignette (mobile poster fallback) */}
        <div className="absolute inset-0 pointer-events-none">
          <video
            className="hidden sm:block h-[580px] w-full object-cover object-[center_35%]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            aria-hidden="true"
          >
            <source src={HERO_VIDEO_WEBM} type="video/webm" />
            <source src={HERO_VIDEO_MP4} type="video/mp4" />
          </video>

          {/* Mobile fallback image */}
          <img
            src={HERO_POSTER}
            alt=""
            className="sm:hidden h-[580px] w-full object-cover object-[center_35%]"
            loading="eager"
          />

          {/* Dark overlay only (removed white bottom fade) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/20" />
        </div>

        <Container>
          <div className="relative pt-32 pb-16">
            {/* Glass headline panel with gradient border */}
            <div className="mx-auto max-w-4xl p-[1.5px] rounded-2xl bg-gradient-to-r from-white/40 to-white/10">
              <div className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_24px_60px_-12px_rgba(2,6,23,0.45)] px-6 py-8 text-center">
                <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                  Car Accessories • Power-Line Tools
                </p>
                <h1 className="mt-1 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
                    Talex
                  </span>{" "}
                  <span className="text-white">Suppliers Ltd</span>
                </h1>
                <p className="mt-3 text-white/90">{BRAND.blurb}</p>

                <div className="mt-6">
                  <SearchBar />
                </div>

                {/* Single primary CTA → products page */}
                <div className="mt-5">
                  <Link
                    to="/shop"
                    className="btn-primary rounded-xl px-6 py-3 text-base sm:text-lg"
                    aria-label="Shop all products"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust row */}
            <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-4">
              <div className="card-glass p-4 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-mpesa" />
                <div className="text-sm">
                  <b>Secure payments</b>
                  <div className="opacity-80">M-Pesa STK checkout</div>
                </div>
              </div>
              <div className="card-glass p-4 flex items-center gap-3">
                <Truck className="h-5 w-5 text-white" />
                <div className="text-sm">
                  <b>Countrywide</b>
                  <div className="opacity-80">Same-day Nairobi</div>
                </div>
              </div>
              <div className="card-glass p-4 flex items-center gap-3">
                <Store className="h-5 w-5 text-white" />
                <div className="text-sm">
                  <b>Wholesale &amp; Retail</b>
                  <div className="opacity-80">Fair prices</div>
                </div>
              </div>
              <div className="card-glass p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-white" />
                <div className="text-sm">
                  <b>Visit us</b>
                  <div className="opacity-80">{BRAND.address}</div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </Container>
      </section>

      {/* Shop by category — clear IA */}
      <Section title="Shop by Category" subtitle="Clear routes to what you need">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/shop?category=car-accessories"
            className="relative overflow-hidden rounded-2xl group shadow-soft"
          >
            <img
              className="h-56 w-full object-cover transition group-hover:scale-[1.03]"
              src="https://images.unsplash.com/photo-1542367597-8849eb96105a?auto=format&fit=crop&w=1400&q=80"
              alt="Car accessories"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white text-xl font-semibold">
              Car Accessories
            </div>
          </Link>

          <Link
            to="/shop?category=power-tools"
            className="relative overflow-hidden rounded-2xl group shadow-soft"
          >
            <img
              className="h-56 w-full object-cover transition group-hover:scale-[1.03]"
              src="https://images.unsplash.com/photo-1504148455329-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80"
              alt="Power-line tools"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white text-xl font-semibold">
              Power-line Tools
            </div>
          </Link>
        </div>
      </Section>

      {/* Trending today */}
      <Section title="Trending Today" subtitle="Popular picks from our social channels">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
