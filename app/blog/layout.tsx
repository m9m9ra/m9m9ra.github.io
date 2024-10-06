import { Metadata } from "next";

// set dynamic metadata
export function generateMetadata(): Metadata {
	return {
	  title: 'M9M9Ra | Blog',
	  description: 'M9M9Ra | Development: Flutter & React Native. You have any question ?',
	};
}

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
        {children}
        </>
	);
}