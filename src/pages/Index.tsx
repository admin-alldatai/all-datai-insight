import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Brain, Battery, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, styleConfig } from "@/config/content";
import AlldataiLogo from "@/components/AlldataiLogo";

const Index = () => {
  // Mapeo de iconos desde la configuración
  const iconMap = {
    Heart,
    Activity,
    Brain,
    Battery,
    TrendingUp,
    AlertTriangle,
  };

  // Convertir datos de configuración a formato con iconos y colores
  const physiologicalData = siteConfig.dashboardData.map((item) => ({
    ...item,
    icon: iconMap[item.icon as keyof typeof iconMap],
    color: "text-primary",
  }));

  return (
    <div className="min-h-screen relative">
      {/* Background gradient with opacity overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid-1))] via-[hsl(var(--gradient-mid-2))] to-[hsl(var(--gradient-end))] opacity-90 -z-10"></div>
      <div className="fixed inset-0 bg-black/20 -z-10"></div>
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlldataiLogo className="h-10" />
          </div>
          <p className="hidden md:block text-sm text-white/80">{siteConfig.tagline}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className={`${styleConfig.sizes.heroTitle} ${styleConfig.fonts.heading} text-white leading-tight drop-shadow-lg`}>
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            {siteConfig.hero.subtitle}
          </p>
          <p className={`${styleConfig.sizes.body} text-white/80 max-w-2xl mx-auto`}>
            {siteConfig.hero.description}
          </p>
          <Button size="lg" className="mt-8 bg-white text-primary hover:bg-white/90 font-semibold">
            {siteConfig.hero.ctaText}
          </Button>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${styleConfig.sizes.sectionTitle} ${styleConfig.fonts.heading} text-white mb-4`}>
              {siteConfig.solution.title}
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {siteConfig.solution.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.solution.features.map((feature, index) => {
              const IconComponent = feature.icon === "Activity" ? Activity : 
                                   feature.icon === "AlertTriangle" ? AlertTriangle : Brain;
              return (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 hover:border-white/30 transition-all">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-white mb-4" />
                    <CardTitle className={`${styleConfig.sizes.cardTitle} text-white`}>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="container mx-auto px-4 py-16 bg-white/5 backdrop-blur-sm rounded-2xl my-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${styleConfig.sizes.sectionTitle} ${styleConfig.fonts.heading} text-white mb-4`}>
              {siteConfig.metrics.title}
            </h2>
            <p className="text-lg text-white/80">
              {siteConfig.metrics.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {physiologicalData.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 hover:border-white/30 transition-all">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white/70">
                      {metric.label}
                    </CardTitle>
                    <Icon className="h-5 w-5 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">{metric.value}</span>
                      {metric.unit && (
                        <span className="text-sm text-white/60">{metric.unit}</span>
                      )}
                    </div>
                    <p className="text-xs text-white/50 mt-2 capitalize">
                      Estado: {metric.status}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">{siteConfig.footer.copyright}</p>
            <Link to="/privacy" className="text-sm text-white hover:text-white/80 transition-colors">
              {siteConfig.footer.privacyLink}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
