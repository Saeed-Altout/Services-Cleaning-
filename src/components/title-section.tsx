import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TitleSectionProps {
  title: string;
  subTitle?: string;
  description: string;
  href?: string;
  label?: string;
}

export const TitleSection = ({
  title,
  subTitle,
  description,
  href,
  label,
}: TitleSectionProps) => {
  return (
    <>
      <p className="text-blue-500 font-semibold capitalize">---- {subTitle}</p>
      <h3 className="text-3xl font-semibold py-2">{title}</h3>
      <div className="flex justify-between items-center gap-5 flex-wrap">
        <p className="max-w-xl">{description}</p>
        <a href={href}>
          <Button className="bg-blue-500">
            {label} <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </a>
      </div>
    </>
  );
};
