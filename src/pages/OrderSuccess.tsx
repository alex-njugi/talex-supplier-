// src/pages/OrderSuccess.tsx
import Container from "@/components/layout/Container";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, Clock } from "lucide-react";

export default function OrderSuccess() {
  const { id } = useParams();

  return (
    <Container className="py-16 text-center">
      <div className="mx-auto max-w-lg card-glass p-8">
        <CheckCircle2 className="h-10 w-10 mx-auto text-brand" />
        <h1 className="mt-2 text-2xl font-bold">Order placed</h1>
        <p className="mt-1 text-gray-600">Order #{id}</p>

        <div className="mt-5 inline-flex items-center gap-2 badge-mpesa">
          <Clock className="h-4 w-4" />
          <span>Payment status: Pending confirmation</span>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          We’ve sent an M-Pesa STK prompt to your phone. If it didn’t arrive, you can try again from
          the order page or contact us on WhatsApp.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/shop" className="btn-outline rounded-xl px-5 py-2.5">
            Continue Shopping
          </Link>
          <Link to="/cart" className="btn-primary rounded-xl px-5 py-2.5">
            View Cart
          </Link>
        </div>
      </div>
    </Container>
  );
}
