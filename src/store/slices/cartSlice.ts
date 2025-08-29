// src/store/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string; // product id
  title: string;
  price_cents: number;
  qty: number;
  image?: string;
}
interface CartState {
  items: CartItem[];
  totalQty: number;
  total_cents: number;
  isOpen: boolean;
}
const initial: CartState = { items: [], totalQty: 0, total_cents: 0, isOpen: false };

const calc = (state: CartState) => {
  state.totalQty = state.items.reduce((a,b)=>a+b.qty,0);
  state.total_cents = state.items.reduce((a,b)=>a+b.qty*b.price_cents,0);
};

const slice = createSlice({
  name: "cart",
  initialState: initial,
  reducers: {
    add(state, { payload }: PayloadAction<CartItem>) {
      const ex = state.items.find(i=>i.id===payload.id);
      if (ex) ex.qty += payload.qty;
      else state.items.push(payload);
      calc(state);
      state.isOpen = true;
    },
    remove(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter(i=>i.id!==payload);
      calc(state);
    },
    setQty(state, { payload }: PayloadAction<{id:string; qty:number}>) {
      const it = state.items.find(i=>i.id===payload.id);
      if (it) it.qty = Math.max(1, payload.qty);
      calc(state);
    },
    open(state){ state.isOpen = true; },
    close(state){ state.isOpen = false; },
    clear(state){ state.items = []; calc(state); }
  }
});

export const { add, remove, setQty, open, close, clear } = slice.actions;
export default slice.reducer;
