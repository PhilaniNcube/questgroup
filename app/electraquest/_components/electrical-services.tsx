import Image from "next/image";


const services = [
  {
    title: "Electrical Services",
    description:
      "Discover our top-quality electrical services for commercial and residential buildings designed in accordance with the highest health and safety standard and delivered by our team of professional electricians. Whether it's a simple wiring job or a complex electrical installation, we have you covered",
    image: "/images/electrical.webp",
    link: "/electraquest/electrical-services",
  },
  {
    title: "Certificate of Compliance",
    description:
      "Are you buying or selling a property or just need peace of mind to know that your building's electrical installations meet South Africa's safety laws? Look no further. We offer professional certification of compliance service that is performed by our accredited experts to ensure your electricity installations are legal and safe.",
    image: "/images/certificate.webp",
    link: "/electraquest/coc",
  },
  {
    title: "Maintenance Services",
    description:
      "Ensure the longevity and safety of your electrical systems with our expert maintenance services. We perform routine inspections and preventive maintenance on your electrical systems to keep your operations running smoothly and prevent potential disasters before they occur.",
    image: "/images/maintenance.jpg",
    link: "/electraquest/maintenance",
  },
];

const scope = [
  {
    name: "Residential Services",
    description:
      "At the heart of our services is the desire to ensure that every South African home is powered safely and efficiently. From minor repairs to major electrical installations, we provide homeowners with quality, reliable and affordable residential electrical solutions.",
    image: "http://placehold.it/500x500",
    href: "/electraquest/residential",
  },
  {
    name: "Commercial Services",
    description:
      "For businesses big and small, we offer comprehensive electrical services tailored to the unique needs of your company. We understand the crucial role that reliable electrical systems play in business operations, hence, we promise minimum disruption and maximum efficiency.",
    image: "http://placehold.it/500x500",
    href: "/electraquest/commercial",
  },
];

const ElectricalServices = () =>

{
  return <section className="my-8">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="relative w-full aspect-video">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg w-full aspect-video object-cover"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-md">{service.description}</p>
              {/* <Link href={service.link}>
                <a className="text-brand font-semibold hover:text-brand-light transition-colors">
                  Learn More
                </a>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 my-4">
        {scope.map((item, index) => (
          <div key={index} className="w-full odd:bg-gradient-to-r even:bg-gradient-to-r odd:from-slate-200 odd:to-sky-300 even:from-sky-300 even:to-zinc-300 px-3 py-4 rounded-md shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>;
};


export default ElectricalServices;
