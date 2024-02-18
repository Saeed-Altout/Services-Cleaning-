import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div>
          <p className="text-blue-500 font-semibold capitalize">
            ---- our story
          </p>
          <h3 className="text-3xl font-semibold py-2">What Our Services</h3>
          <div className="flex justify-between items-center gap-5">
            <p className="max-w-xl">
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
            <Button className="bg-blue-500">
              See More <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <div className="w-[500px] h-[500px] grid grid-flow-row grid-rows-3 gap-2">
            <img
              src={"./about.png"}
              alt="about"
              className="object-cover w-full bg-gray-400 row-start-1 row-end-3 h-full"
            />
            <img
              src={"./about.png"}
              alt="about"
              className="object-cover w-full bg-gray-400 row-start-1 h-full"
            />
            <img
              src={"./about.png"}
              alt="about"
              className="object-cover w-full bg-gray-400 row-start-3 h-full"
            />
            <img
              src={"./about.png"}
              alt="about"
              className="object-cover w-full bg-gray-400 row-start-2 row-end-4 h-full"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deleniti aliquam voluptas error excepturi qui illo repellendus odit
            officia non unde in impedit corporis sed delectus, animi enim est
            soluta?
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
