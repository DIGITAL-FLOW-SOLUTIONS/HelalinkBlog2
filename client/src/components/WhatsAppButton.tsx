import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254713332676"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      data-testid="button-whatsapp-float"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    </a>
  );
}
