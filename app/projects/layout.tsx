import { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: {
// 		default: "M9M9Ra | Projects",
// 		template: "%s | m9m9ra.github.io",
// 	}
// }

// set dynamic metadata
export function generateMetadata(): Metadata {
	return {
	  title: 'M9M9Ra | Проекты',
	  description: 'M9M9Ra | Development: Flutter & React Native. You have any question ?',
	};
}
  

export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
			{children}
		</div>
	);
}
