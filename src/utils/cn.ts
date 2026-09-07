import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility to merge Tailwind CSS classes cleanly.
 * Resolves conflicts (e.g., bg-red-500 + bg-blue-500 → bg-blue-500).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/** The production domain — update when domain is confirmed */
export const SITE_URL = 'https://www.corelanesystems.com'

/** Contact details — update with real values before launch */
export const CONTACT = {
  email: 'corelanesystem@gmail.com',
  whatsapp: '+92 301 2756091',
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=923012756091&text=Hello+Corelane+Systems%2C%0A%0AI+would+like+to+discuss+a+technology+project.%0A%0ABusiness%3A%0AService%3A%0AProject+requirement%3A%0A%0APlease+let+me+know+how+we+can+proceed.&type=phone_number&app_absent=0',
  phone: '+92 301 2756091',
}
