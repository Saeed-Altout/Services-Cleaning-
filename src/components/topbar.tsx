import { Key } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { Button } from "./ui/button";

export const Topbar = () => {
  const iconLinks = [
    {
      label: "Facebook",
      href: "/",
      icon: FaFacebookF,
    },
    {
      label: "FaInstagram",
      href: "/",
      icon: FaInstagram,
    },
  ];

  return (
    <div className="h-12 bg-blue-500">
      <div className="h-full container mx-auto text-white flex justify-between items-center">
        <p className="hidden md:block text-sm">
          Call for free estimate! We are always available : 123-456-7890
        </p>
        <p className="block md:hidden text-sm">Phone Number 123-456-7890</p>
        <div>
          {iconLinks?.map(({ label, href, icon: Icon }, index: Key) => (
            <a href={href} key={index}>
              <Button variant="link" size="icon">
                <span className="sr-only">{label}</span>
                <Icon className="h-4 w-4 text-white" />
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
