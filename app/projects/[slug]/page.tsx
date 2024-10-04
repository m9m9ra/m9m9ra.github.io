import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;
// export const dynamicParams = true;
export const dynamic = "force-static";

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default function PostPage({ params }: Props) {
	// const views = (
	// 	await redis.mget<number[]>(
	// 		...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
	// 	)
	// ).reduce((acc, v, i) => {
	// 	acc[allProjects[i].slug] = v ?? 0;
	// 	return acc;
	// }, {} as Record<string, number>);

	const featured = allProjects.find((project) => project.slug === "xrunner")!;
	const sorted = allProjects
		.filter((p) => p.published)
		.filter((project) => project.slug !== featured.slug)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	const slug = params?.slug ?? featured.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const views = 465;
		// (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
