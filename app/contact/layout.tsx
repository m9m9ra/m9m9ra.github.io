import { Metadata } from "next";

// set dynamic metadata
export function generateMetadata(): Metadata {
	return {
	  title: 'M9M9Ra | Contact',
	  description: 'M9M9Ra | Development: Flutter & React Native. You have any question ?',
	};
}

export default function ContactLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
        {children}
        </>
	);
}