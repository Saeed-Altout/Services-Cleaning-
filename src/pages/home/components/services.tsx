import { Key } from "react";
import { Home } from "lucide-react";

import { TitleSection } from "@/components/title-section";
import { ServiceCard } from "@/components/service-card";

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Recurring Cleaning",
      description:
        "We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty.",
      href: "/",
      label: "Learn more",
    },
    {
      icon: Home,
      title: "Occasional Cleaning",
      description:
        "Needs that do not necessarily mean you have a party planned or awaiting a special occasion, or expecting guests.",
      href: "/",
      label: "Learn more",
    },
    {
      icon: Home,
      title: "Apartment Cleaning",
      description:
        "We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty.",
      href: "/",
      label: "Learn more",
    },
    {
      icon: Home,
      title: "Refrigerator Cleaning",
      description:
        "Rid of some memories or people to make room for new ones. Some of your loved ones have disappointed.",
      href: "/",
      label: "Learn more",
    },
    {
      icon: Home,
      title: "Housekeeping Services",
      description:
        "Management of duties and chores involved in the running of a household, such as cleaning, cooking.",
      href: "/",
      label: "Learn more",
    },
    {
      icon: Home,
      title: "Oven Cleaning",
      description:
        "Cleaning product designed or labeled to clean and to remove dried or baked on food deposits from oven walls.        ",
      href: "/",
      label: "Learn more",
    },
  ];

  return (
    <section id="services">
      <div className="container mx-auto py-20">
        <TitleSection
          subTitle="best services"
          title="What Our Services"
          description="While we can customize your cleaning plan to suit your needs, most
          clients schedule regular cleaning services:"
          label="See More"
          href="/"
        />
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services?.map(
            ({ icon, label, href, title, description }, index: Key) => (
              <ServiceCard
                key={index}
                title={title}
                href={href}
                description={description}
                icon={icon}
                label={label}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
