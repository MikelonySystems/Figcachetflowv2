import { Wallet, Car, Receipt, FileText, TrendingUp, BarChart3, Check, Sparkles, ArrowLeft, Zap, CalendarIcon, Clock, MapPin, ArrowRight } from "lucide-react@0.487.0";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface FonctionnalitesPageProps {
  onBack?: () => void;
}

export function FonctionnalitesPage({ onBack }: FonctionnalitesPageProps) {
  const features = [
    {
      id: "cachets",
      icon: Wallet,
      title: "Gestion des Cachets",
      subtitle: "Suivez vos contrats et rémunérations",
      gradient: "from-violet-500 to-fuchsia-500",
      bgLight: "bg-violet-50 dark:bg-violet-950/20",
      iconColor: "text-violet-600 dark:text-violet-400",
      borderColor: "border-violet-200 dark:border-violet-800",
      badgeBg: "bg-violet-100 dark:bg-violet-900/30",
      badgeText: "text-violet-700 dark:text-violet-300",
      description: "Centralisez tous vos cachets et contrats en un seul endroit. Suivez vos rémunérations, heures travaillées et employeurs avec précision.",
      points: [
        "Ajout rapide de cachets avec date, montant et employeur",
        "Calcul automatique des charges et net à percevoir",
        "Historique complet avec recherche et filtres",
        "Export des données pour votre comptabilité",
        "Statistiques détaillées par période"
      ],
      mockupBg: "bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-950/40 dark:to-fuchsia-950/40"
    },
    {
      id: "trajets",
      icon: Car,
      title: "Suivi des Trajets",
      subtitle: "Optimisez vos déplacements professionnels",
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800",
      badgeBg: "bg-blue-100 dark:bg-blue-900/30",
      badgeText: "text-blue-700 dark:text-blue-300",
      description: "Gérez vos déplacements professionnels et calculez automatiquement vos frais kilométriques selon le barème fiscal en vigueur.",
      points: [
        "Enregistrement des trajets domicile-travail",
        "Calcul automatique des indemnités kilométriques",
        "Carte interactive pour visualiser vos trajets",
        "Statistiques de distance et coûts",
        "Export pour remboursements"
      ],
      mockupBg: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/40 dark:to-cyan-950/40"
    },
    {
      id: "depenses",
      icon: Receipt,
      title: "Gestion des Dépenses",
      subtitle: "Maîtrisez vos frais professionnels",
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50 dark:bg-amber-950/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-200 dark:border-amber-800",
      badgeBg: "bg-amber-100 dark:bg-amber-900/30",
      badgeText: "text-amber-700 dark:text-amber-300",
      description: "Suivez toutes vos dépenses professionnelles et simplifiez la gestion de vos notes de frais avec catégorisation automatique.",
      points: [
        "Catégorisation automatique des dépenses",
        "Ajout de justificatifs et notes",
        "Suivi des remboursements",
        "Rapport mensuel des frais",
        "Intégration avec les trajets"
      ],
      mockupBg: "bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40"
    },
    {
      id: "aem",
      icon: FileText,
      title: "Attestations AEM",
      subtitle: "Simplifiez vos démarches administratives",
      gradient: "from-emerald-500 to-green-500",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      badgeBg: "bg-emerald-100 dark:bg-emerald-900/30",
      badgeText: "text-emerald-700 dark:text-emerald-300",
      description: "Gérez vos Attestations Employeur Mensuelles (AEM) pour Pôle Emploi. Gardez une trace de tous vos documents administratifs.",
      points: [
        "Stockage sécurisé de vos AEM",
        "Alertes pour les documents manquants",
        "Calcul automatique des droits",
        "Vérification de cohérence",
        "Archivage organisé par mois"
      ],
      mockupBg: "bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-950/40 dark:to-green-950/40"
    },
    {
      id: "revenus",
      icon: TrendingUp,
      title: "Analyse des Revenus",
      subtitle: "Visualisez votre activité en temps réel",
      gradient: "from-indigo-500 to-blue-600",
      bgLight: "bg-indigo-50 dark:bg-indigo-950/20",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      badgeBg: "bg-indigo-100 dark:bg-indigo-900/30",
      badgeText: "text-indigo-700 dark:text-indigo-300",
      description: "Analysez vos revenus avec des graphiques interactifs et des statistiques détaillées pour piloter votre activité.",
      points: [
        "Graphiques d'évolution mensuelle",
        "Comparaison année par année",
        "Prévisions basées sur l'historique",
        "Répartition par employeur",
        "Indicateurs de performance"
      ],
      mockupBg: "bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-950/40 dark:to-blue-950/40"
    },
    {
      id: "bilan",
      icon: BarChart3,
      title: "Bilan Annuel",
      subtitle: "Vue d'ensemble de votre année",
      gradient: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50 dark:bg-purple-950/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800",
      badgeBg: "bg-purple-100 dark:bg-purple-900/30",
      badgeText: "text-purple-700 dark:text-purple-300",
      description: "Obtenez une vision complète de votre activité annuelle avec tous les indicateurs clés pour votre déclaration fiscale.",
      points: [
        "Synthèse annuelle complète",
        "Calcul des charges sociales",
        "Récapitulatif pour la déclaration fiscale",
        "Comparaison inter-annuelle",
        "Export pour votre comptable"
      ],
      mockupBg: "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/40 dark:to-pink-950/40"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {onBack && (
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            )}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-foreground">CachetFlow</h1>
                <p className="text-xs text-muted-foreground">Pour les intermittents du spectacle</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Fonctionnalités
          </Badge>
          <h1 className="text-4xl md:text-5xl">
            Tout pour gérer votre activité
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Une suite complète d'outils conçus spécifiquement pour les intermittents du spectacle. 
            Simplifiez votre gestion administrative et concentrez-vous sur votre art.
          </p>
        </div>

        {/* Features */}
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "md:grid-flow-dense" : ""
            }`}
          >
            {/* Content */}
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
              {/* Ruban/Badge avec gradient */}
              <div className="mb-6">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${feature.gradient} text-white shadow-lg`}>
                  <feature.icon className="w-5 h-5" />
                  <span className="font-medium">{feature.title}</span>
                </div>
              </div>

              <h2 className="text-3xl mb-3">{feature.subtitle}</h2>
              <p className="text-muted-foreground text-lg mb-6">
                {feature.description}
              </p>

              {/* Liste des points clés */}
              <ul className="space-y-3">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full ${feature.badgeBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className={`w-3 h-3 ${feature.badgeText}`} />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mockup/Aperçu */}
            <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
              <Card className={`p-6 ${feature.borderColor} border-2 ${feature.mockupBg} overflow-hidden shadow-xl`}>
                {/* Cachets Mockup */}
                {feature.id === "cachets" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Wallet className="w-5 h-5 text-violet-600" />
                        <span className="font-medium">Mes cachets</span>
                      </div>
                      <Badge className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                        12 ce mois
                      </Badge>
                    </div>
                    
                    {/* Liste de cachets */}
                    {[
                      { employeur: "Théâtre National", montant: "450€", date: "8 nov.", heures: "8h" },
                      { employeur: "Opéra de Paris", montant: "580€", date: "8 nov.", heures: "10h" },
                      { employeur: "Festival d'été", montant: "720€", date: "6 nov.", heures: "16h" }
                    ].map((cachet, i) => (
                      <div
                        key={i}
                        className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-violet-200/50 dark:border-violet-800/50 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                              <span className="font-medium text-sm">{cachet.employeur}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <CalendarIcon className="w-3 h-3" />
                                {cachet.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {cachet.heures}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold text-violet-600 dark:text-violet-400">{cachet.montant}</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Stats footer */}
                    <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-violet-200/50 dark:border-violet-800/50">
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Total brut</div>
                        <div className="text-lg font-semibold text-violet-600 dark:text-violet-400">5 420€</div>
                      </div>
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Heures</div>
                        <div className="text-lg font-semibold text-violet-600 dark:text-violet-400">96h</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Trajets Mockup */}
                {feature.id === "trajets" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Car className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Mes trajets</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        8 ce mois
                      </Badge>
                    </div>

                    {/* Carte mockup */}
                    <div className="bg-gradient-to-br from-blue-200/30 to-cyan-200/30 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 border border-blue-200/50 dark:border-blue-800/50 h-32 flex items-center justify-center mb-3">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                        <span className="text-xs">Carte interactive</span>
                      </div>
                    </div>
                    
                    {/* Liste de trajets */}
                    {[
                      { depart: "Paris", arrivee: "Lyon", distance: "465 km", montant: "264€" },
                      { depart: "Lyon", arrivee: "Marseille", distance: "315 km", montant: "179€" }
                    ].map((trajet, i) => (
                      <div
                        key={i}
                        className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-blue-200/50 dark:border-blue-800/50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 flex-1">
                            <span className="text-sm font-medium">{trajet.depart}</span>
                            <ArrowRight className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">{trajet.arrivee}</span>
                          </div>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{trajet.montant}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{trajet.distance}</div>
                      </div>
                    ))}

                    {/* Stats footer */}
                    <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-blue-200/50 dark:border-blue-800/50">
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Distance totale</div>
                        <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">2 145 km</div>
                      </div>
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Indemnités</div>
                        <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">1 218€</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dépenses Mockup */}
                {feature.id === "depenses" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Receipt className="w-5 h-5 text-amber-600" />
                        <span className="font-medium">Mes dépenses</span>
                      </div>
                      <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                        15 ce mois
                      </Badge>
                    </div>
                    
                    {/* Liste de dépenses */}
                    {[
                      { categorie: "Matériel", description: "Câbles XLR", montant: "85€", date: "8 nov." },
                      { categorie: "Formation", description: "Stage son numérique", montant: "450€", date: "5 nov." },
                      { categorie: "Transport", description: "Péage autoroute", montant: "45€", date: "3 nov." }
                    ].map((depense, i) => (
                      <div
                        key={i}
                        className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-amber-200/50 dark:border-amber-800/50"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 text-xs px-2 py-0">
                                {depense.categorie}
                              </Badge>
                            </div>
                            <span className="text-sm font-medium block mb-1">{depense.description}</span>
                            <span className="text-xs text-muted-foreground">{depense.date}</span>
                          </div>
                          <span className="font-semibold text-amber-600 dark:text-amber-400">{depense.montant}</span>
                        </div>
                      </div>
                    ))}

                    {/* Stats footer */}
                    <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-amber-200/50 dark:border-amber-800/50">
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Total dépenses</div>
                        <div className="text-lg font-semibold text-amber-600 dark:text-amber-400">1 856€</div>
                      </div>
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Catégories</div>
                        <div className="text-lg font-semibold text-amber-600 dark:text-amber-400">6</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* AEM Mockup */}
                {feature.id === "aem" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium">Mes AEM</span>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        2025
                      </Badge>
                    </div>
                    
                    {/* Liste d'AEM par mois */}
                    {[
                      { mois: "Novembre 2025", employeurs: 3, heures: "96h", statut: "En cours" },
                      { mois: "Octobre 2025", employeurs: 5, heures: "124h", statut: "Validé" },
                      { mois: "Septembre 2025", employeurs: 4, heures: "108h", statut: "Validé" }
                    ].map((aem, i) => (
                      <div
                        key={i}
                        className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-emerald-200/50 dark:border-emerald-800/50"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <span className="text-sm font-medium block mb-2">{aem.mois}</span>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span>{aem.employeurs} employeurs</span>
                              <span>•</span>
                              <span>{aem.heures}</span>
                            </div>
                          </div>
                          <Badge className={`${
                            aem.statut === "Validé" 
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" 
                              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                          } text-xs`}>
                            {aem.statut}
                          </Badge>
                        </div>
                      </div>
                    ))}

                    {/* Stats footer */}
                    <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-emerald-200/50 dark:border-emerald-800/50">
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Total heures</div>
                        <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">507h</div>
                      </div>
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Droits acquis</div>
                        <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">✓</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Revenus Mockup */}
                {feature.id === "revenus" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium">Revenus 2025</span>
                      </div>
                      <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                        +12%
                      </Badge>
                    </div>

                    {/* Graphique mockup */}
                    <div className="bg-gradient-to-br from-indigo-200/30 to-blue-200/30 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg p-4 border border-indigo-200/50 dark:border-indigo-800/50 h-32 relative overflow-hidden mb-3">
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-full px-4 pb-4">
                        {[60, 75, 85, 70, 90, 80].map((height, i) => (
                          <div
                            key={i}
                            className="bg-indigo-500/60 dark:bg-indigo-400/40 rounded-t w-8"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats mensuelles */}
                    {[
                      { mois: "Novembre", revenus: "5 420€", cachets: 12 },
                      { mois: "Octobre", revenus: "6 850€", cachets: 15 }
                    ].map((mois, i) => (
                      <div
                        key={i}
                        className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-indigo-200/50 dark:border-indigo-800/50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{mois.mois}</span>
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">{mois.revenus}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{mois.cachets} cachets</div>
                      </div>
                    ))}

                    {/* Stats footer */}
                    <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-indigo-200/50 dark:border-indigo-800/50">
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Total 2025</div>
                        <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">58 420€</div>
                      </div>
                      <div className="bg-card/60 rounded-lg p-3">
                        <div className="text-xs text-muted-foreground mb-1">Moyenne/mois</div>
                        <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">5 311€</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bilan Mockup */}
                {feature.id === "bilan" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                        <span className="font-medium">Bilan fiscal 2025</span>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                        Calcul automatique
                      </Badge>
                    </div>
                    
                    {/* Grandes stats */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-purple-200/50 dark:border-purple-800/50">
                        <div className="text-xs text-muted-foreground mb-1">Revenu net imposable</div>
                        <div className="text-xl font-semibold text-purple-600 dark:text-purple-400">37 000€</div>
                      </div>
                      <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-purple-200/50 dark:border-purple-800/50">
                        <div className="text-xs text-muted-foreground mb-1">Heures travaillées</div>
                        <div className="text-xl font-semibold text-purple-600 dark:text-purple-400">1 245h</div>
                      </div>
                    </div>

                    {/* Détails du calcul fiscal */}
                    {[
                      { label: "Revenu net imposable", value: "37 000€", percent: "", isBase: true },
                      { label: "Frais réels déductibles", value: "- 3 680€", percent: "9.9%" },
                      { label: "Revenu imposable", value: "33 320€", percent: "", isSubtotal: true },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`rounded-lg p-3 border ${
                          item.isSubtotal
                            ? 'bg-card/70 border-purple-200/70 dark:border-purple-800/70'
                            : 'bg-card/90 backdrop-blur-sm border-purple-200/50 dark:border-purple-800/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm ${item.isBase || item.isSubtotal ? 'font-semibold' : ''}`}>{item.label}</span>
                            {item.percent && <span className="text-xs text-muted-foreground">({item.percent})</span>}
                          </div>
                          <span className={`font-semibold ${
                            item.value.startsWith('-') 
                              ? 'text-red-600 dark:text-red-400' 
                              : 'text-purple-600 dark:text-purple-400'
                          }`}>
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Calcul de l'impôt par tranches */}
                    <div className="bg-purple-50/50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200/50 dark:border-purple-800/50 space-y-2">
                      <div className="text-xs font-medium text-purple-700 dark:text-purple-300 mb-2">
                        Calcul de l'impôt (barème 2025)
                      </div>
                      {[
                        { tranche: "0% jusqu'à 11 294€", montant: "0€" },
                        { tranche: "11% de 11 295€ à 28 797€", montant: "1 925€" },
                        { tranche: "30% de 28 798€ à 33 320€", montant: "1 357€" }
                      ].map((tranche, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{tranche.tranche}</span>
                          <span className="font-medium text-purple-600 dark:text-purple-400">{tranche.montant}</span>
                        </div>
                      ))}
                      <div className="pt-2 border-t border-purple-200/50 dark:border-purple-800/50 flex items-center justify-between">
                        <span className="text-sm font-semibold">Total impôt sur le revenu</span>
                        <span className="font-semibold text-red-600 dark:text-red-400">- 3 282€</span>
                      </div>
                    </div>

                    {/* Résultat final */}
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-4 border-2 border-purple-300 dark:border-purple-700">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">Revenu net après impôt</span>
                        <span className="text-xl font-bold text-purple-700 dark:text-purple-300">30 038€</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Soit 2 503€/mois en moyenne</div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg p-3 border border-emerald-200/50 dark:border-emerald-800/50 mt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Prêt pour la déclaration fiscale</span>
                        <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        ))}

        {/* CTA Final */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl">Prêt à découvrir toutes ces fonctionnalités ?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Commencez dès maintenant à simplifier votre gestion administrative et gagnez du temps pour vous concentrer sur votre passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
              Commencer gratuitement
            </button>
            <button className="px-8 py-3 bg-card text-foreground border border-border rounded-xl hover:bg-accent transition-all">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}