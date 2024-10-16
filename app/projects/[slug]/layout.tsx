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
	if (params.slug == 'xrunner') {
		return {
			title: `M9M9Ra | Беготрек: бег, фитнес, ходьба, GPS трекер`,
			description: 'M9M9Ra | Development: Беготрек — ваше идеальное приложение для бега и активного образа жизни!',
		  };
	}
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
