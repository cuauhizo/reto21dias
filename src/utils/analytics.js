// src/utils/analytics.js
export const trackEvent = (eventName, params = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    })
    console.warn('GTM está cargado correctamente')
  } else {
    console.warn('GTM no está cargado o bloqueado por AdBlock')
  }
}
