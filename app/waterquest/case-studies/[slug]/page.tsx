import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = ({params: {slug}}:{params:{slug:string}}) => {

  const study = caseStudies.find((study) => study.slug === slug);

  return (
			<main>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
						{study?.image && (
							<div className="flex flex-col space-y-1 font-medium text-sm">
								<Image
									alt="Project Image"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
									height="310"
									src={study?.image}
									width="550"
								/>
								<p>Location: {study.location}</p>
								<p>Capacity/Flow: {study.flowrate}</p>
								<p>Solar Installation: {study.panels}</p>
								<p>Lorentz Solar Pump: {study.pump}</p>
								<p>Land Size: {study.size}</p>
							</div>
						)}

						<div className="flex flex-col justify-center space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								{study?.title}
							</h2>
							<div>
								<h3 className="text-2xl">Problem</h3>
								<p className="max-w-[600px] text-gray-500 dark:text-gray-400">
									{study?.problem}
								</p>
							</div>
							<div>
								<h3 className="text-2xl">Solution</h3>
								<p className="max-w-[600px] text-gray-500 dark:text-gray-400">
									{study?.solution}
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									href="/waterquest/contact"
								>
                  <Button>
									  Contact Us
                  </Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
};
export default page;
