"use client"
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion"
import { useEffect, useState, useRef } from "react";


const testimonials = [
  {
    title: "Livestock Farming",
    description:
      "Mr. Van der Merwe, a livestock farmer whose operations underwent a huge shift when he switched to the Lorentz solar water pump. Faced with erratic electricity supply and rising costs, Mr. Van der Merwe sought a reliable and cost-effective solution for his livestock irrigation needs. Lorentz’s solar water pump proved to be the game-changer he needed. The pump’s reliability ensured a consistent water supply for his livestock. The switch to solar power significantly reduced electricity costs, contributing to substantial savings for Mr. Van der Merwe. Embracing German engineering excellence, the Lorentz pump not only demonstrated unparalleled efficiency but also reflected a commitment to quality and innovation. For Mr. Van der Merwe, the transition to Lorentz not only meant reliable irrigation but also a sustainable and economically prudent choice for his livestock farming venture.",
    image: "/images/livestock.webp",
  },
  {
    title: "Solar Borehole Pump",
    description:
      "By choosing the Lorentz Solar Borehole Pump, the Johnsons transformed their water supply experience. Not only did they achieve substantial cost savings, but they also gained peace of mind with a reliable and environmentally friendly solution. The Lorentz pump proved to be a smart investment that aligned with the family’s goals of financial prudence and sustainability.",
    image: "/images/banner.png",
  },
  {
    title: "Irrigation",
    description:
      "Johannes, a forward-thinking farmer embarked on a sustainable journey by embracing the innovative Lorentz Hybrid solar water pump for drip irrigation. Faced with the challenges of traditional irrigation methods, the farmer recognized the need for a more efficient and eco-friendly solution. By harnessing the power of the sun with the Lorentz Hybrid pump, the citrus farmer not only significantly reduced the farm’s carbon footprint but also achieved substantial cost savings in the long run. The solar-powered pump efficiently draws water from a natural source, providing a consistent and reliable supply to the drip irrigation system, ensuring optimal moisture levels for the citrus orchards. This eco-conscious decision not only enhanced the farm’s overall sustainability but also served as an inspiring example of how embracing innovative technology can transform traditional agricultural practices into models of environmental stewardship.",
    image: "/images/pivot.jpg",
  },
];

const CustomerProfiles = () => {

  const [autoSlide, setAutoSlide] = useState(false);
  const autoSlideInterval = 3000

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const prev = () =>
    setCurrentSlideIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));

      const next = () =>
        setCurrentSlideIndex((curr) =>
          curr === testimonials.length - 1 ? 0 : curr + 1
        );


          useEffect(() => {
            if (!autoSlide) return;
            const slideInterval = setInterval(next, autoSlideInterval);
            return () => clearInterval(slideInterval);
          }, []);

  return (
    <section className="py-8 relative container ">
      <h2 className="text-4xl font-semibold text-center text-blue-500 lg:text-5xl">What Clients Say?</h2>
      <div className=" @container flex mx-auto flex-row flex-nowrap overflow-hidden w-full min-h-[250px]  h-[800px] lg:h-[600px] lg:w-[900px]">
        <motion.div
          className={`relative mx-auto flex justify-center w-full lg:w-[900px] min-h-[300px] h-full items-center overflw-hidden`}
        >
          <AnimatePresence>
            <motion.div
              key={currentSlideIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1 }}
              className="flex flex-col lg:flex-row w-full lg:w-[900px] min-h-[300px]  absolute h-full lg:h-[500px] px-5"
            >
              <div className="relative w-full flex flex-col h-full justify-center rounded-md overflow-hidden">
                <div className="absolute z-10 inset-0 bg-black/50 h-full">
                  <div className="w-full flex flex-col justify-center h-full p-10 text-white">
                    <h3 className="text-2xl font-semibold">
                      {testimonials[currentSlideIndex].title}
                    </h3>
                    <p className="w-full text-sm  my-3">
                      {testimonials[currentSlideIndex].description}
                    </p>
                  </div>
                </div>

                <Image
                  src={testimonials[currentSlideIndex].image}
                  width={1000}
                  height={1000}
                  alt={testimonials[currentSlideIndex].title}
                  className="object-cover w-full h-full z-0"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <Button
          onClick={prev}
          variant="ghost"
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <MoveLeft className="w-8 h-8 text-blue-500" />
        </Button>
        <Button
          onClick={next}
          variant="ghost"
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <MoveRight className="w-8 h-8 text-blue-500" />
        </Button>
      </div>
    </section>
  );
};
export default CustomerProfiles;
