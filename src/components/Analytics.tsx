import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = 'G-ZBPXZWJJ1W'

export function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Evitar reinyección
    if (document.getElementById('ga-script')) return

    const script = document.createElement('script')
    script.id = 'ga-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []

    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }

    window.gtag = gtag

    gtag('js', new Date())

    // IMPORTANTE: sin page_path aquí
    gtag('config', GA_ID)
  }, [])

  useEffect(() => {
    if (!window.gtag) return

    window.gtag('event', 'page_view', {
      page_path: location.pathname,
      page_title: document.title,
    })
  }, [location.pathname])

  return null
}