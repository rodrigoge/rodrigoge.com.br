import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Rodrigo Gouveia Estevão',
	description: 'A personal portfolio built using Next.js, Sass and TypeScript.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	)
}
