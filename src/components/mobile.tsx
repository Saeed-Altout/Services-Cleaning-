import { Key } from "react";
import { useMediaQuery } from "usehooks-ts";

import i18n from "@/i18n";
import { routes } from "@/config";

import { SwitcherLang } from "@/components/switcher-lang";
import { Button } from "@/components/ui/button";
import { useOrderModal } from "@/hooks/use-order-modal";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export const Mobile = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const orderModal = useOrderModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <>
      {isMobile && (
        <Sheet open={isOpen} onOpenChange={onChange}>
          <SheetContent side={i18n.language === "ar" ? "right" : "left"}>
            <ul className="flex items-start justify-start flex-col gap-4 mt-16">
              {routes?.map(({ label, href }, index: Key) => (
                <a href={href} key={index}>
                  <Button variant="ghost" size="sm" className="capitalize">
                    {label}
                  </Button>
                </a>
              ))}
              <div className="flex justify-between items-center gap-10">
                <Button
                  onClick={() => orderModal.onOpen()}
                  className="bg-blue-500"
                >
                  Request An Estimate
                </Button>
                <SwitcherLang />
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};
