import Image from "next/image";

const controller =  {
    title: "Sigen Energy Controller",
    description:
      "The Sigenergy Energy Controller is a multifunctional device that manages your solar power system, battery storage, and even your electric vehicle charger (EV charger). It's like the brain of your home energy setup, optimizing energy usage and maximizing efficiency",
    functions: [
      "PV inverter: Converts DC electricity from your solar panels into usable AC power for your home.",
      "Battery Power Conversion System (PCS): Charges and discharges your energy storage batteries, allowing you to utilize excess solar power even when the sun isn't shining.",
      "Optional functionality to conveniently charge your electric vehicle directly from your solar power system.",
    ],
    benefits: [
      "Reduced energy bills: Maximize solar power usage and minimize dependence on the grid, leading to cost savings.",
      "Increased energy independence: Store excess solar power for later use, gaining greater control over your energy supply.",
      "Smart energy management: Automated system optimization ensures efficient energy utilization.",
      "Sustainable living: Reduce your carbon footprint by relying on clean, renewable solar energy.",
    ],
    features: [
      "Energy Management System (EMS): Built-in intelligence that monitors and optimizes energy flow in your system, prioritizing solar consumption and minimizing reliance on the grid.",
      "Multiple MPPT trackers: Efficiently manages power from multiple solar panel arrays, even if facing different directions or receiving varying sunlight.",
      "On-grid and off-grid compatibility: Can operate with or without grid connection, providing backup power during outages.",
      "DC ground-fault protection: Ensures safety against electrical faults.",
      "High IP rating (IP66): Dust and water-resistant for outdoor installation.",
      "Scalable battery storage: Can accommodate various battery capacities to suit your energy needs.",
    ],
    sizes:
      "Available in both single-phase (3kW to 6kW) and three-phase (5kW to 25kW) models, ensuring compatibility with various system sizes.",
  }

const HomeSolarProducts = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-5 gap-4 lg:gap-10">
          <div className="text-teal-800 col-span-5 md:col-span-4 lg:col-span-3 p-8 shadow-lg rounded-lg bg-gradient-to-b from-slate-200 to-slate-300">
            <h2 className="font-bold text-2xl lg:text-3xl">
              {controller.title}
            </h2>
            <p className="text-md leading-6 mt-4">{controller.description}</p>
            <p className="text-md leading-6 mt-4">{controller.sizes}</p>
            <div className="flex justify-between flex-col md:flex-row gap-4 mt-4">
              <div className="w-full">
                <h3 className="font-semibold text-lg">Functions</h3>
                <ul className="list-disc list-inside text-sm flex flex-col gap-y-3 pl-4">
                  {controller.functions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-lg">Benefits</h3>
                <ul className="list-disc list-inside text-sm flex flex-col gap-y-3 pl-4">
                  {controller.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-5 md:col-span-1 lg:col-span-2 h-full flex justify-center bg-teal-600 rounded-lg shadow-md p-5">
            <Image src="/images/left.png" alt="Sigen Energy Controller" width={3375} height={6000} className="w-1/2 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSolarProducts;
