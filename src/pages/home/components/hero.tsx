import { ArrowUpRight, Stars } from "lucide-react";

import { useOrderModal } from "@/hooks/use-order-modal";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const orderModal = useOrderModal();
  return (
    <section id="hero">
      <div className="text-center h-full py-20 flex justify-center items-center flex-col mx-auto container gap-5">
        <div className="flex items-center border border-dashed px-5 py-1 rounded-full">
          <p>Professional Cleaning Service</p>
          <Stars className="h-4 w-4 ml-2 text-blue-500" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold">
          We Are Premium Cleaning Company located in USA ready to make your life
          easier!!
        </h1>
        <p className="max-w-5xl mx-auto">
          At Cleanzer Crystal Clean, we believe in building a relationship with
          every one of our customers. Our cleaning programs are tailored to meet
          your needs. We don't believe in a one size fits all approach. Need us
          to wash dishes? Do laundry? Make the beds? Not a problem!
        </p>
        <div className="flex justify-center items-center gap-5">
          <Button className="bg-blue-500" onClick={() => orderModal.onOpen()}>
            Book A Schedule <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
          <Button variant="outline">
            Our Best Offer <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
// className="bg-[url('./left.png')] md:bg-[url('./hero.png')] h-[800px] bg-no-repeat bg-cover bg-center"
