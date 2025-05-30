import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { Shadows_Into_Light, Urbanist } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
	title: 'Rodrigo Gouveia Estevão',
	description: 'A personal portfolio built using Next.js, Sass and TypeScript.',
}

const shadowsIntoLightFont = Shadows_Into_Light({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-shadows',
})

const urbanistFont = Urbanist({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-urbanist',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			className={`${shadowsIntoLightFont.variable} ${urbanistFont.variable}`}
		>
			<body>
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	)
}
