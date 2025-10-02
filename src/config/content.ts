// Configuración de contenido editable del sitio
export const siteConfig = {
  // Información general
  companyName: "AllDataI",
  tagline: "Decisiones Corporativas Basadas en Human Data",
  
  // Hero Section
  hero: {
    title: "Prevención de Fatiga Inteligente",
    subtitle: "Monitoreo de datos fisiológicos en tiempo real para operadores industriales",
    description: "Transformamos datos de dispositivos Garmin en insights accionables para prevenir fatiga y proteger la salud de tus equipos.",
    ctaText: "Solicitar Demo",
  },
  
  // Solución
  solution: {
    title: "Nuestra Solución",
    description: "Integramos tecnología wearable Garmin con análisis avanzado para monitorear el estado de salud de operadores de maquinaria y transporte industrial en tiempo real.",
    features: [
      {
        title: "Monitoreo Continuo",
        description: "Seguimiento 24/7 de métricas fisiológicas clave",
        icon: "Activity",
      },
      {
        title: "Alertas Tempranas",
        description: "Detección proactiva de signos de fatiga",
        icon: "AlertTriangle",
      },
      {
        title: "Análisis Predictivo",
        description: "IA que anticipa riesgos antes que ocurran",
        icon: "Brain",
      },
    ],
  },
  
  // Métricas del Dashboard
  metrics: {
    title: "Dashboard de Métricas Fisiológicas",
    description: "Visualización en tiempo real del estado de salud de tus operadores",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 AllDataI. Todos los derechos reservados.",
    privacyLink: "Políticas de Privacidad",
  },
};

// Configuración de estilos (puedes modificar estos valores)
export const styleConfig = {
  fonts: {
    heading: "font-bold",
    body: "font-normal",
  },
  sizes: {
    heroTitle: "text-5xl md:text-6xl",
    sectionTitle: "text-3xl md:text-4xl",
    cardTitle: "text-xl",
    body: "text-base",
    small: "text-sm",
  },
};
