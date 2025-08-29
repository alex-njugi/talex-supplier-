// src/utils/currency.ts
export function toKSh(cents: number) {
  const amount = cents / 100;
  return amount.toLocaleString("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  });
}
