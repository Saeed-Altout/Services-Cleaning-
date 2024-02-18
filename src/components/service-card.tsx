import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  label: string;
  href: string;
}

export const ServiceCard = ({
  title,
  icon: Icon,
  description,
  label,
  href,
}: ServiceCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="bg-blue-500 w-12 h-12 flex justify-center items-center text-white rounded-md">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle>
          <h3 className="font-semibold text-xl">{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <a href={href}>
          <Button variant="outline">
            {label} <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
