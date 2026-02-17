"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-background/70 hover:text-background transition-colors"
        aria-label="Menü"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-foreground border-b border-background/10 py-4 px-6 flex flex-col gap-4">
          <a
            href="#szolgaltatasok"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-background/70 transition-colors hover:text-background"
          >
            Szolgáltatások
          </a>
          <a
            href="#arak"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-background/70 transition-colors hover:text-background"
          >
            Árak
          </a>
          <a
            href="#rolunk"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-background/70 transition-colors hover:text-background"
          >
            Rólunk
          </a>
          <a
            href="#kapcsolat"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-background/70 transition-colors hover:text-background"
          >
            Kapcsolat
          </a>
        </div>
      )}
    </div>
  );
}
