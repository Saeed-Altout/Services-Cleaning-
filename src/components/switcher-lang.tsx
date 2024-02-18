import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

import { changeLanguage } from "@/i18n";

import { Button } from "./ui/button";

export const SwitcherLang = () => {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => (lang === "ar" ? setLang("en") : setLang("ar"))}
    >
      <Languages className="h-4 w-4" />
    </Button>
  );
};
