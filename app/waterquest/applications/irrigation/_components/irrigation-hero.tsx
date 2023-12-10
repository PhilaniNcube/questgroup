import React from "react";

function IrrigationHero() {
  return (
    <section>
      <div className="relative inset-0 mx-auto bg-white ">
        <div className="relative">
          <img
            src="/images/irrigation.jpg"
            className="w-full object-cover lg:h-[450px] lg:block"
          />
          <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />

          <div className="absolute lg:bottom-8 md:bottom-3 bottom-0 lg:px-7 md:px-10 px-4 py-4">
            <h1 className="lg:text-5xl md:text-2xl text-2xl max-w-2xl font-semibold leading-9 text-white">
              Solar Water Pumps For Irrigation
            </h1>

            <div className="flex gap-3 pt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IrrigationHero;
