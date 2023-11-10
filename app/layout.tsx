export const metadata = {
	title: 'Acme',
	openGraph: {
		title: 'Acme',
		description: 'Acme is a...',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}