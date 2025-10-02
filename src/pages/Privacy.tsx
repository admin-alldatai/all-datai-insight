import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/content";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">{siteConfig.companyName}</span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">Volver al Inicio</Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Políticas de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Información que Recopilamos</h2>
            <p className="text-muted-foreground">
              En AllDataI, recopilamos datos fisiológicos de dispositivos Garmin autorizados, incluyendo frecuencia cardíaca, 
              variabilidad de frecuencia cardíaca (HRV), niveles de estrés, body battery, VO2 Max y otros indicadores 
              relacionados con la salud y el bienestar de los operadores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso de la Información</h2>
            <p className="text-muted-foreground mb-3">Los datos recopilados se utilizan exclusivamente para:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Monitorear el estado de salud de operadores en tiempo real</li>
              <li>Prevenir situaciones de fatiga y riesgo laboral</li>
              <li>Generar análisis predictivos para mejorar la seguridad operacional</li>
              <li>Proporcionar informes y dashboards a las empresas contratantes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Protección de Datos</h2>
            <p className="text-muted-foreground">
              Todos los datos fisiológicos son tratados con el más alto nivel de confidencialidad y seguridad. 
              Implementamos medidas técnicas y organizativas para proteger la información contra accesos no autorizados, 
              pérdida o alteración. Los datos son encriptados tanto en tránsito como en reposo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Consentimiento</h2>
            <p className="text-muted-foreground">
              El uso de nuestra plataforma requiere el consentimiento explícito del operador para la recopilación 
              y procesamiento de sus datos fisiológicos. Los operadores tienen derecho a revocar este consentimiento 
              en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartir Información</h2>
            <p className="text-muted-foreground">
              Los datos solo se comparten con la empresa empleadora del operador y no se venden ni se comparten 
              con terceros sin autorización explícita. La información agregada y anonimizada puede utilizarse 
              para investigación y mejora del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Retención de Datos</h2>
            <p className="text-muted-foreground">
              Los datos se conservan durante el período de empleo activo del operador más un período adicional 
              según lo requiera la legislación laboral aplicable. Los operadores pueden solicitar la eliminación 
              de sus datos en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Derechos del Usuario</h2>
            <p className="text-muted-foreground mb-3">Los operadores tienen derecho a:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contacto</h2>
            <p className="text-muted-foreground">
              Para cualquier consulta sobre nuestras políticas de privacidad o para ejercer sus derechos, 
              puede contactarnos a través de privacy@alldatai.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Actualizaciones</h2>
            <p className="text-muted-foreground">
              Estas políticas pueden actualizarse periódicamente. La fecha de la última actualización 
              se indica al final de este documento. Le notificaremos sobre cambios significativos.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Última actualización: Octubre 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
