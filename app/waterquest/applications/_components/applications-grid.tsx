import { Button } from "@/components/ui/button";
import Link from "next/link";

const ApplicationsGrid = () => {
  return (
    <section className="py-8">
      <div className="container">
        <p className="text-md md:text-lg">
          Solar water pumps have broad applications. In agriculture, they can
          provide irrigation and drinking water for livestock. Residentially,
          they are useful for circulating pond water and drawing water from
          wells. For off-grid areas, these pumps can ensure basic water supply.
          They are also used industrially for wastewater management and in
          ecology for maintaining artificial wetlands and wildlife ponds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-5">
          <div className="rounded-md shadow-md bg-slate-100 text-slate-800 p-3 flex flex-col justify-between">
            <h3 className="text-xl font-medium">Drinking Water</h3>
            <p className="text-sm mb-2">
              Solar water pumps ensure a reliable, sustainable drinking water
              supply, especially in remote or off-grid areas. By harnessing the
              power of the sun, they pump water from underground sources like
              wells or from storage facilities for immediate use or onward
              filtration. This not only provides essential clean water but does
              it cost-effectively and environment-friendly way.
            </p>
            <Link href="/waterquest/applications/drinking-water">
              <Button type="button">Read More</Button>
            </Link>
          </div>
          <div className="rounded-md shadow-md bg-slate-100 text-slate-800 p-3 flex flex-col justify-between">
            <h3 className="text-xl font-medium">Irrigation</h3>
            <p className="text-sm mb-2">
              Solar water pumps are a gamechanger for irrigation, particularly
              in rural or remote areas. They harness solar energy to extract
              water from wells, rivers, or other bodies and distribute it over
              agricultural land. This ensures a consistent, sustainable water
              supply crucial for healthy crop growth. It's a cost-effective,
              eco-friendly solution that reduces dependence on grid electricity
              and fossil fuels.
            </p>
            <Link href="/waterquest/applications/irrigation">
              <Button type="button">Read More</Button>
            </Link>
          </div>
          <div className="rounded-md shadow-md bg-slate-100 text-slate-800 p-3 flex flex-col justify-between">
            <h3 className="text-xl font-medium">Livestock</h3>
            <p className="text-sm mb-2">
              Solar water pumps are a critical resource for livestock farming.
              They utilize solar energy to pump water from wells or reservoirs,
              providing a steady and dependable source of clean drinking water
              for animals. This is particularly useful in remote areas where
              traditional electricity is unavailable, ensuring the health and
              well-being of the livestock in a cost-effective and
              environmentally friendly manner.
            </p>
            <Link href="/waterquest/applications/livestock">
              <Button type="button">Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ApplicationsGrid;
