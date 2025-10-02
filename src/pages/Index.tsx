import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Brain, Battery, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, styleConfig } from "@/config/content";

const Index = () => {
  // Datos de ejemplo para el dashboard
  const physiologicalData = [
    {
      label: "Heart Rate",
      value: "72",
      unit: "bpm",
      status: "normal",
      icon: Heart,
      color: "text-accent",
    },
    {
      label: "HRV",
      value: "58",
      unit: "ms",
      status: "good",
      icon: Activity,
      color: "text-primary",
    },
    {
      label: "Stress Level",
      value: "35",
      unit: "/100",
      status: "low",
      icon: Brain,
      color: "text-primary",
    },
    {
      label: "Body Battery",
      value: "82",
      unit: "%",
      status: "high",
      icon: Battery,
      color: "text-primary",
    },
    {
      label: "VO2 Max",
      value: "48",
      unit: "ml/kg/min",
      status: "excellent",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      label: "Fatiga Risk",
      value: "Low",
      unit: "",
      status: "safe",
      icon: AlertTriangle,
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">{siteConfig.companyName}</span>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className={`${styleConfig.sizes.heroTitle} ${styleConfig.fonts.heading} text-foreground leading-tight`}>
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {siteConfig.hero.subtitle}
          </p>
          <p className={`${styleConfig.sizes.body} text-muted-foreground max-w-2xl mx-auto`}>
            {siteConfig.hero.description}
          </p>
          <Button size="lg" className="mt-8">
            {siteConfig.hero.ctaText}
          </Button>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${styleConfig.sizes.sectionTitle} ${styleConfig.fonts.heading} text-foreground mb-4`}>
              {siteConfig.solution.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {siteConfig.solution.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.solution.features.map((feature, index) => {
              const IconComponent = feature.icon === "Activity" ? Activity : 
                                   feature.icon === "AlertTriangle" ? AlertTriangle : Brain;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className={styleConfig.sizes.cardTitle}>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="container mx-auto px-4 py-16 bg-card/30 rounded-lg my-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${styleConfig.sizes.sectionTitle} ${styleConfig.fonts.heading} text-foreground mb-4`}>
              {siteConfig.metrics.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {siteConfig.metrics.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {physiologicalData.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </CardTitle>
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                      {metric.unit && (
                        <span className="text-sm text-muted-foreground">{metric.unit}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 capitalize">
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
      <footer className="border-t bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{siteConfig.footer.copyright}</p>
            <Link to="/privacy" className="text-sm text-primary hover:underline">
              {siteConfig.footer.privacyLink}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
