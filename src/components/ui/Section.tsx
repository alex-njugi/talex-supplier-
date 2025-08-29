// src/components/ui/Section.tsx (replace file)
import { ReactNode } from "react";
import Container from "../layout/Container";

export default function Section({ title, subtitle, children }: { title?: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="py-14">
      <Container>
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
