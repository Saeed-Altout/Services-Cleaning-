import { Key } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { routes } from "@/config";

import { Button } from "@/components/ui/button";
import { SwitcherLang } from "@/components/switcher-lang";
import { useOrderModal } from "@/hooks/use-order-modal";

export const Desktop = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const orderModal = useOrderModal();

  return (
    <ul
      className={cn(
        "hidden items-center justify-center gap-4",
        !isMobile && "flex"
      )}
    >
      {routes?.map(({ label, href }, index: Key) => (
        <a href={href} key={index}>
          <Button variant="ghost" size="sm" className="capitalize">
            {label}
          </Button>
        </a>
      ))}
      <Button onClick={() => orderModal.onOpen()} className="bg-blue-500">
        Request An Estimate
      </Button>
      <SwitcherLang />
    </ul>
  );
};
