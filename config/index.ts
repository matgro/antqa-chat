import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
// This value is used exclusively by the server-side API routes. Do not expose
// the Dify application key through a NEXT_PUBLIC_* variable.
export const API_KEY = `${process.env.DIFY_APP_API_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Secretaría Académica ANTQA',
  description: 'Información académica oficial de ANTQA.',
  copyright: 'Seminario de Antioquía',
  privacy_policy: '',
  default_language: 'es-ES',
  // El chatbot se muestra dentro de admin.antqa.test mediante un iframe.
  // SameSite=None permite conservar la sesión entre ambos subdominios HTTPS.
  disable_session_same_site: true,
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
