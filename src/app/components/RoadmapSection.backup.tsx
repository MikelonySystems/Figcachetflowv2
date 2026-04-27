// BACKUP - Section "Bientôt disponible" temporairement masquée
// Pour réactiver : copier le contenu de cette section dans LandingPage.tsx

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sparkles, Calendar, TrendingUp, FileText, Receipt, Zap, Users } from "lucide-react";

export function RoadmapSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Bientôt disponible
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">
            On ne s'arrête pas là
          </h2>
          <p className="text-xl text-muted-foreground">
            De nouvelles fonctionnalités en développement pour vous faciliter encore plus la vie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 border-2 border-border/50 hover:border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 text-xs">
                Q2 2026
              </Badge>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Planning visuel</h3>
              <p className="text-sm text-muted-foreground">
                Visualisez tous vos contrats sur un calendrier interactif avec vue mensuelle et annuelle
              </p>
            </div>
          </Card>

          {/* Feature 2 */}
          <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 border-2 border-border/50 hover:border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 text-xs">
                Q3 2026
              </Badge>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Simulation AEM avancée</h3>
              <p className="text-sm text-muted-foreground">
                Anticipez votre futur taux d'indemnisation selon vos contrats prévus et votre activité
              </p>
            </div>
          </Card>

          {/* Feature 3 */}
          <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 border-2 border-border/50 hover:border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 text-xs">
                Q4 2026
              </Badge>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Export documents</h3>
              <p className="text-sm text-muted-foreground">
                Générez automatiquement vos justificatifs et récapitulatifs au format PDF pour vos démarches
              </p>
            </div>
          </Card>

          {/* Feature 4 */}
          <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 border-2 border-border/50 hover:border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 text-xs">
                2027
              </Badge>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <Receipt className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Scan de factures</h3>
              <p className="text-sm text-muted-foreground">
                Photographiez vos factures, l'IA extrait automatiquement les informations pour vos dépenses
              </p>
            </div>
          </Card>

          {/* Feature 5 */}
          <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 border-2 border-border/50 hover:border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 text-xs">
                2027
              </Badge>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Application mobile</h3>
              <p className="text-sm text-muted-foreground">
                Accédez à CachetFlow partout, même hors ligne, avec les apps iOS et Android natives
              </p>
            </div>
          </Card>

          {/* Feature 6 */}
          <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 border-2 border-border/50 hover:border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20 text-xs">
                2027
              </Badge>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Espace collaboratif</h3>
              <p className="text-sm text-muted-foreground">
                Partagez vos bonnes pratiques et conseils avec la communauté d'intermittents
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            💡 Une idée de fonctionnalité ? <button className="text-primary hover:underline font-medium">Partagez-la nous</button>
          </p>
        </div>
      </div>
    </section>
  );
}
