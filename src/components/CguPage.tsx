import { ArrowLeft, Zap, FileText } from "lucide-react@0.487.0";
import { Button } from "./ui/button";

interface CguPageProps {
  onBack: () => void;
}

export function CguPage({ onBack }: CguPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/30 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-foreground">CachetFlow</h1>
              <p className="text-xs text-muted-foreground">Pour les intermittents du spectacle</p>
            </div>
          </button>
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Retour à l'accueil
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border/50 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl">Conditions Générales d'Utilisation</h1>
              <p className="text-muted-foreground mt-2">Dernière mise à jour : 14 décembre 2025</p>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">
              Bienvenue sur CachetFlow. En utilisant notre application, vous acceptez les présentes conditions générales d'utilisation.
              Ce document sera complété prochainement avec l'ensemble des conditions applicables à l'utilisation de notre service.
            </p>

            <p className="text-muted-foreground mt-6">
              Pour toute question concernant ces conditions, vous pouvez nous contacter à l'adresse suivante : 
              <a href="mailto:contact@cachetflow.fr" className="text-primary hover:underline ml-1">
                contact@cachetflow.fr
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-[#0A1E3F] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-sm text-blue-100">
            <p>© 2025 CachetFlow. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
