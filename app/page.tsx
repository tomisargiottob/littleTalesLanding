import { redirect } from 'next/navigation'
import { i18n } from '@/lib/i18n-config'

export default function RootPage() {
  // This should normally not be reached due to proxy,
  // but serves as a fallback
  redirect(`/${i18n.defaultLocale}`)
}
