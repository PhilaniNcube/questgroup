import { caseStudies } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CaseStudies = () => {
  return (
			<section className="my-6">
				<div className="container">
					<h2 className="text-4xl font-semibold text-center text-blue-500 lg:text-5xl">
						Case Studies
					</h2>
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
						{caseStudies.map((study) => (
							<div
								key={study.slug}
								className="relative group overflow-hidden rounded-lg"
							>
								<Link className="absolute inset-0 z-10" href={`/waterquest/case-studies/${study.slug}`}>
									<span className="sr-only">View Case Study</span>
								</Link>
								<Image
									alt={study.customer}
									className="object-cover w-full aspect-[4/3]"
									height={300}
									src={study.image}
									width={400}
								/>
								<div className="bg-white p-4 dark:bg-gray-950">
									<h3 className="font-semibold text-lg md:text-xl">
										{study.title}
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Location: {study.location}
									</p>
								</div>
							</div>
						))}
					</section>
				</div>
			</section>
		);
};
export default CaseStudies;
