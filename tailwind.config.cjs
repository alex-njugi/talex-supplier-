/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#2563EB", dark: "#1E40AF" },   // premium Talex blue
        mpesa:  { DEFAULT: "#1BA548", dark: "#14863C" }   // M-Pesa green
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.06)",
        xlsoft: "0 30px 60px -12px rgba(2,6,23,0.25)"
      },
      borderRadius: { xl2: "1.25rem" },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
}
