
const cards = [
  {
    title: "SIGENERGY Solar Power Installations",
    description:
      "Upgrade to smart solar power with our professional SIGENERGY installations. They are reliable, scalable, and can result in significant energy cost savings for your home or business.",
  },
  {
    title: "Maximized Efficiency",
    description:
      "Enjoy high energy yield with our solar power installations. SIGENERGY products are designed for optimum power performance and maintain high-efficiency levels even in low light environments.",
  },
  {
    title: "Lorentz Solar Water Pumps",
    description:
      "Experience the dependability of sustainable water supply systems with our Lorentz solar water pumps. They are perfectly designed for various applications, including irrigation, livestock, or supplying potable water for your residential complex.",
  },
  {
    title: "Lend a Hand to Nature ",
    description:
      "Opt for a greener option and reduce your carbon footprint. By utilizing renewable solar energy for electricity and water supply, you contribute towards preserving the environment for future generations. ",
  },
  {
    title: "Electrical Installations & Services",
    description:
      "Get comprehensive electrical services for residential and commercial applications. Our experts are proficient in installing, repairing, and maintaining electrical systems, ensuring the safety and efficiency of your operation.",
  },
  {
    title: "Qualified and Reliable",
    description:
      "Bank on our competent and experienced team for all your electrical needs. Our commitment to providing professional, top-notch service ensures your satisfaction with all our solutions.",
  },
];

const Reasons = () => {
  return (
    <section className="py-5">
      <div className="container rounded-lg shadow-lg bg-orange-700 p-8 text-white">
        <h3 className="text-center text-2xl font-semibold">
          Innovative Renewable Energy Solutions for a Sustainable Future
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-4 rounded-lg"
            >
              <h4 className="text-lg font-semibold">{card.title}</h4>
              <p className="text-sm mt-2 text-orange-50 leading-6">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reasons;
