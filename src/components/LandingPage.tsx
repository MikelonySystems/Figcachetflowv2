import { ArrowRight, Check, Zap, Car, Wallet, Receipt, FileText, TrendingUp, Shield, Clock } from "lucide-react@0.487.0";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface LandingPageProps {
  onLogin: () => void;
  onSignup: () => void;
  onGoToFeatures?: () => void;
}

export function LandingPage({ onLogin, onSignup, onGoToFeatures }: LandingPageProps) {
  const features = [
    {
      icon: Wallet,
      title: "Cachets",
      description: "Gérez vos cachets et contrats avec précision",
      gradient: "from-violet-500 to-fuchsia-500",
      bgLight: "bg-violet-50 dark:bg-violet-950/30",
      iconColor: "text-violet-600 dark:text-violet-400"
    },
    {
      icon: Car,
      title: "Trajets",
      description: "Suivez vos déplacements professionnels",
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Receipt,
      title: "Dépenses",
      description: "Enregistrez et catégorisez vos frais",
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50 dark:bg-amber-950/30",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: FileText,
      title: "AEM",
      description: "Gérez vos attestations employeur mensuelles",
      gradient: "from-emerald-500 to-green-500",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: TrendingUp,
      title: "Revenus",
      description: "Visualisez vos revenus et statistiques",
      gradient: "from-indigo-500 to-blue-600",
      bgLight: "bg-indigo-50 dark:bg-indigo-950/30",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
      icon: Clock,
      title: "Bilan annuel",
      description: "Analysez vos performances sur l'année",
      gradient: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50 dark:bg-purple-950/30",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  const benefits = [
    "Interface intuitive et moderne",
    "Synchronisation en temps réel",
    "Export de données",
    "Support personnalisé",
    "Mises à jour régulières",
    "Sécurité maximale"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/30 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-foreground">CachetFlow</h1>
              <p className="text-xs text-muted-foreground">Pour les intermittents du spectacle</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {onGoToFeatures && (
              <Button variant="ghost" onClick={onGoToFeatures}>
                Fonctionnalités
              </Button>
            )}
            <Button variant="ghost" onClick={onLogin}>
              Connexion
            </Button>
            <Button onClick={onSignup}>
              Inscription
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            Nouvelle version disponible
          </Badge>
          <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Gérez vos cachets en toute simplicité
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            L'application conçue pour les intermittents du spectacle. Suivez vos revenus, dépenses, trajets et simplifiez votre gestion administrative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onSignup} className="text-base px-8">
              Commencer gratuitement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={onLogin} className="text-base px-8">
              Se connecter
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Offre de lancement : -50% sur l'abonnement annuel 🎉
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white/50 via-slate-50/80 to-white/50 dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/50 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Tout ce dont vous avez besoin</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une suite complète d'outils pour gérer votre activité d'intermittent du spectacle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgLight} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Pourquoi choisir CachetFlow ?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Une application pensée par et pour les intermittents du spectacle, avec tout ce qu'il faut pour simplifier votre quotidien administratif.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h3>Sécurité et confidentialité</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Vos données sont chiffrées et hébergées en France. Nous ne partageons jamais vos informations personnelles avec des tiers.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-card/50 rounded-lg p-4">
                <p className="text-2xl mb-1">99,9%</p>
                <p className="text-sm text-muted-foreground">Disponibilité</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4">
                <p className="text-2xl mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-slate-50/80 via-blue-50/50 to-slate-50/80 dark:from-slate-900/80 dark:via-blue-950/50 dark:to-slate-900/80 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Une tarification simple et transparente</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choisissez le forfait qui vous convient. Aucune option gratuite, mais un prix accessible pour tous les professionnels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="text-2xl mb-2">Mensuel</h3>
              <p className="text-muted-foreground">Payez au mois, sans engagement</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl">6€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Toutes les fonctionnalités</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Synchronisation illimitée</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Support par email</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Mises à jour gratuites</span>
              </li>
            </ul>
            <Button className="w-full" size="lg" variant="outline" onClick={onSignup}>
              Choisir ce forfait
            </Button>
          </Card>

          {/* Annual Plan - Highlighted */}
          <Card className="p-8 border-primary/50 bg-gradient-to-br from-primary/5 to-purple-500/5 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
              -50% Lancement
            </Badge>
            <div className="mb-6">
              <h3 className="text-2xl mb-2">Annuel</h3>
              <p className="text-muted-foreground">Économisez en payant à l'année</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl">30€</span>
                <span className="text-muted-foreground line-through text-xl">60€</span>
                <span className="text-muted-foreground">/an</span>
              </div>
              <p className="text-sm text-primary mt-2">Soit 2,50€/mois au lieu de 6€/mois</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Toutes les fonctionnalités</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Synchronisation illimitée</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Support prioritaire</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Mises à jour gratuites</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">Économisez 50% 🎉</span>
              </li>
            </ul>
            <Button className="w-full" size="lg" onClick={onSignup}>
              Profiter de l'offre
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Tous les prix sont TTC. Paiement sécurisé. Annulation possible à tout moment.
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="p-12 text-center bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10 border-primary/20">
          <h2 className="text-3xl md:text-4xl mb-4">Prêt à simplifier votre gestion ?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez les intermittents du spectacle qui font confiance à CachetFlow pour gérer leur activité professionnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onSignup} className="text-base px-8">
              Créer mon compte
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-[#0A1E3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white">CachetFlow</h3>
              </div>
              <p className="text-sm text-blue-100 max-w-md">
                L'application de gestion pour intermittents du spectacle. Simplifiez votre suivi de cachets, dépenses et revenus.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-white">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={onGoToFeatures}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Fonctionnalités
                  </button>
                </li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-white">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">CGU</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-blue-100">
            <p>© 2025 CachetFlow. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}