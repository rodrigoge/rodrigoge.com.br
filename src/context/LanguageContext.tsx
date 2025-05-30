'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Lang = 'pt' | 'en'

interface LanguageContextType {
	lang: Lang
	setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [lang, setLangState] = useState<Lang>('en')

	useEffect(() => {
		const storedLang = sessionStorage.getItem('lang') as Lang | null
		if (storedLang) {
			setLangState(storedLang)
		} else {
			const browserLang = navigator.language.slice(0, 2)
			const detectedLang: Lang = browserLang === 'pt' ? 'pt' : 'en'
			setLangState(detectedLang)
			sessionStorage.setItem('lang', detectedLang)
		}
	}, [])

	const setLang = (newLang: Lang) => {
		setLangState(newLang)
		sessionStorage.setItem('lang', newLang)
	}

	return (
		<LanguageContext.Provider value={{ lang, setLang }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
