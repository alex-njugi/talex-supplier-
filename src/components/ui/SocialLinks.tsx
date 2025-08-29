// src/components/ui/SocialLinks.tsx
import { BRAND } from "@/lib/brand";
import { Facebook, Instagram } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a href={BRAND.socials.facebook} target="_blank" rel="noreferrer"
         className="p-2 rounded-xl bg-white/70 backdrop-blur border hover:bg-white">
        <Facebook className="h-4 w-4 text-[#1877F2]" />
      </a>
      <a href={BRAND.socials.instagram} target="_blank" rel="noreferrer"
         className="p-2 rounded-xl bg-white/70 backdrop-blur border hover:bg-white">
        <Instagram className="h-4 w-4" />
      </a>
      <a href={BRAND.socials.tiktok} target="_blank" rel="noreferrer"
         className="p-2 rounded-xl bg-white/70 backdrop-blur border hover:bg-white">
        <SiTiktok size={16} />
      </a>
      <a href={BRAND.socials.whatsapp} target="_blank" rel="noreferrer"
         className="p-2 rounded-xl bg-white/70 backdrop-blur border hover:bg-white"
         title={`WhatsApp ${BRAND.whatsappNumber}`}>
        <SiWhatsapp size={16} color="#25D366" />
      </a>
    </div>
  );
}
