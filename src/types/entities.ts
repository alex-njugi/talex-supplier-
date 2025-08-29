// src/types/entities.ts
export interface Product {
  id: string;
  title: string;
  slug: string;
  sku: string;
  brand: string;
  category_id: string;
  price_cents: number;
  compare_at_cents?: number | null;
  stock: number;
  is_active: boolean;
  images?: { url: string; alt?: string }[];
}
