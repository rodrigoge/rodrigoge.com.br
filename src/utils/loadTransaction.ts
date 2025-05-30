
import en from '@/translations/en/home.json'
import pt from '@/translations/pt/home.json'

export const getTranslation = (lang: 'en' | 'pt') => {
	return lang === 'pt' ? pt : en
}
