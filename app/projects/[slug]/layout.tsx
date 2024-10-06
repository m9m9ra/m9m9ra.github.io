import { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: {
// 		default: "M9M9Ra | Projects",
// 		template: "%s | m9m9ra.github.io",
// 	}
// }

// set dynamic metadata
export function generateMetadata({params}: any): Metadata {
	console.log(params);
	return {
	  title: `M9M9Ra | ${params.slug}`,
	  description: 'M9M9Ra | Development: Flutter & React Native. You have any question ?',
	};
}
  

export default function SlugLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			{children}
		</>
	);
}
