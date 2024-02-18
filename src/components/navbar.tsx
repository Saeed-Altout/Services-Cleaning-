import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Mobile } from "@/components/mobile";
import { Desktop } from "@/components/desktop";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="h-16 w-full bgGlass flex justify-between items-center container mx-auto">
        <h1>Logo</h1>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <span className="sr-only">Menu</span>
          <Menu className="h-4 w-4" />
        </Button>
        <Desktop />
        <Mobile isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
};
