import { Button } from "@/components/ui/button";
import Link from "next/link";

const SolutionsGrid = () => {
  return (
    <section className="py-8">
      <div className="container">
        <p className="text-md md:text-lg">
          Welcome to our Waterquest, where sustainable solutions are our top
          priority. We deliver high-quality, eco-friendly solar water pump
          systems designed by Lorentz Pumps for residential, community, and
          utility applications. Our mission? To revolutionize the way water is
          pumped - all powered by glorious sunshine.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-5">
          <div className="rounded-md shadow-md bg-slate-100 text-slate-800 p-3 flex flex-col justify-between">
            <h3 className="text-xl font-medium">Residential</h3>
            <p className="text-sm mb-2">
              Goodbye to exorbitant electricity costs, and hello to
              power-saving, solar-powered water pumps for homes. Upgrade your
              household with our high-performing, cost-saving and reliable solar
              pumps that are easy-to-install and require minimal maintenance.{" "}
            </p>
            <Link href="/waterquest/solutions/residential">
              <Button type="button">Read More</Button>
            </Link>
          </div>
          <div className="rounded-md shadow-md bg-slate-100 text-slate-800 p-3 flex flex-col justify-between">
            <h3 className="text-xl font-medium">Community</h3>
            <p className="text-sm mb-2">
              We understand the crucial role water plays in the community, from
              drinking, irrigation, to hygiene. That&apos;s why we&apos;ve
              developed durable, powerful solar pump systems to meet any
              community size or need. Our community solar water pumps will
              sustainably provide enough water to fuel growth and development.
            </p>
            <Link href="/waterquest/solutions/community">
              <Button type="button">Read More</Button>
            </Link>
          </div>
          <div className="rounded-md shadow-md bg-slate-100 text-slate-800 p-3 flex flex-col justify-between">
            <h3 className="text-xl font-medium">Utilities</h3>
            <p className="text-sm mb-2">
              Optimize your utility operations by integrating our solar water
              pump solutions. Whether it&apos;s for wastewater management,
              irrigation or public water supply, our solar pumps can handle it
              all. Our systems ensure consistent water supply, reduce operation
              costs and cut down CO2 emissions, providing economic and
              ecological benefits.
            </p>
            <Link href="/waterquest/solutions/utilities">
              <Button type="button">Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SolutionsGrid;
