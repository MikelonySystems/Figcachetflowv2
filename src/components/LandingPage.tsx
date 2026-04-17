import { ArrowRight, Check, Zap, Car, Wallet, Receipt, FileText, TrendingUp, Shield, Clock, Sparkles, Menu, X, Scale, Info } from "lucide-react@0.487.0";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import logoIcon from "figma:asset/0e19cb487deade254993902fbb14c03d239ca231.png";
import logoText from "figma:asset/63a5d684b913244c6f683c3d81e6e8bb7be26d2d.png";
import { useState } from "react";

interface LandingPageProps {
  onLogin: () => void;
  onSignup: () => void;
  onGoToFeatures?: () => void;
  onGoToCgu?: () => void;
  onGoToMentions?: () => void;
}

export function LandingPage({ onLogin, onSignup, onGoToFeatures, onGoToCgu, onGoToMentions }: LandingPageProps) {
  const [activeSection, setActiveSection] = useState<'home' | 'discover' | 'pricing' | 'cgu' | 'mentions'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(0);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (cardId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const features = [
    {
      icon: Wallet,
      title: "Contrats",
      color: "#a855f7", // violet-500
      gradient: "from-violet-500 to-fuchsia-500",
      cards: [
        {
          title: "Suivez vos contrats en temps réel",
          subtitle: "Vérifiez vos récaps mensuels et anticipez vos revenus",
          detail: "Centralisez tous vos contrats et suivez vos heures réelles en un clin d'œil. Vérifiez vos récapitulatifs mensuels, calculez votre indemnisation en temps réel et anticipez vos revenus du mois. Fini les erreurs de paie, gardez le contrôle total."
        },
        {
          title: "Créez vos frais km automatiquement",
          subtitle: "Renseignez le lieu de travail, le reste se fait tout seul",
          detail: "En renseignant simplement le lieu de travail lors de l'ajout d'un contrat, créez automatiquement vos frais kilométriques. Plus besoin de calculs manuels, l'application s'occupe de tout pour vous."
        },
        {
          title: "Contrôlez vos heures réellement effectuées",
          subtitle: "Un meilleur suivi de votre activité professionnelle",
          detail: "Renseignez les heures réellement effectuées pour avoir un suivi précis de votre activité professionnelle. Comparez avec vos contrats et assurez-vous d'être payé correctement."
        }
      ]
    },
    {
      icon: Car,
      title: "Trajets",
      color: "#3b82f6", // blue-500
      gradient: "from-blue-500 to-cyan-500",
      cards: [
        {
          title: "Calcul automatique des distances",
          subtitle: "Plus besoin de Google Maps",
          detail: "L'application calcule instantanément la distance depuis votre domicile vers votre lieu de travail. Gagnez du temps et évitez les erreurs de saisie. Le calcul se fait automatiquement à chaque trajet."
        },
        {
          title: "Ajout en un clic depuis vos contrats",
          subtitle: "Précisez le lieu de travail, c'est tout",
          detail: "Lors de la création d'un contrat, renseignez simplement le lieu de travail et vos trajets sont créés automatiquement. Une intégration parfaite entre vos contrats et vos déplacements."
        },
        {
          title: "Bilan annuel pour les frais réels",
          subtitle: "Optimisez vos déductions fiscales",
          detail: "Obtenez un calcul complet sur l'année pour la déduction des frais réels lors de votre déclaration d'impôts. Maximisez vos déductions et simplifiez votre déclaration avec un bilan précis et détaillé."
        }
      ]
    },
    {
      icon: Receipt,
      title: "Dépenses",
      color: "#f59e0b", // amber-500
      gradient: "from-amber-500 to-orange-500",
      cards: [
        {
          title: "Toutes vos dépenses professionnelles",
          subtitle: "En un seul endroit",
          detail: "Renseignez toutes vos dépenses liées à votre activité professionnelle. Matériel, formation, abonnements... gardez une trace de tout pour optimiser vos déclarations fiscales."
        },
        {
          title: "Total automatique pour les frais réels",
          subtitle: "Calcul instantané pour votre déclaration d'impôts",
          detail: "Obtenez le total de vos dépenses professionnelles automatiquement calculé pour vos déductions de frais réels. Plus besoin de sortir la calculette, tout est fait pour vous."
        },
        {
          title: "Pourcentage de part professionnelle",
          subtitle: "Pour vos achats mixtes (pro/perso)",
          detail: "Définissez un pourcentage de part professionnelle pour vos achats qui servent à la fois pour votre activité et votre usage personnel. Obtenez un suivi précis de tous vos frais sans avoir à faire de calcul."
        }
      ]
    },
    {
      icon: FileText,
      title: "AEM",
      color: "#10b981", // emerald-500
      gradient: "from-emerald-500 to-green-500",
      cards: [
        {
          title: "Centralisez vos attestations employeur",
          subtitle: "Tous vos justificatifs au même endroit",
          detail: "Placez tous vos justificatifs employeur dans l'application. Fini les documents perdus ou éparpillés, tout est centralisé et accessible en un clic."
        },
        {
          title: "Calculez votre taux d'indemnisation",
          subtitle: "Suivez l'évolution de votre statut en temps réel",
          detail: "Calculez votre taux d'indemnisation actuel et suivez l'avancement de votre statut d'intermittent. Maîtrisez vos droits et gardez un œil sur votre situation."
        },
        {
          title: "Anticipez votre futur taux",
          subtitle: "Bientôt : conseil pour le recalcul optimal",
          detail: "Dans un avenir proche, l'application pourra anticiper votre taux à venir et vous conseiller sur le meilleur moment pour faire une demande de recalcul auprès de France Travail. Maximisez votre taux d'indemnisation."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Revenus",
      color: "#6366f1", // indigo-500
      gradient: "from-indigo-500 to-blue-600",
      cards: [
        {
          title: "Tous vos revenus regroupés",
          subtitle: "CDI, intermittent, indemnités France Travail",
          detail: "Centralisez tous types de revenus au même endroit : CDI, contrats intermittents, indemnités France Travail. Une vue d'ensemble claire de toutes vos rentrées d'argent."
        },
        {
          title: "Anticipez vos impôts sur le revenu",
          subtitle: "Calcul précis du montant à payer",
          detail: "Anticipez vos impôts sur le revenu avec des calculs précis basés sur vos revenus réels. Évitez les mauvaises surprises et préparez-vous sereinement."
        },
        {
          title: "Gérez mieux vos finances",
          subtitle: "Prenez des décisions éclairées",
          detail: "Visualisez clairement vos rentrées d'argent et gérez mieux vos finances personnelles. Prenez des décisions éclairées pour votre avenir financier grâce à une vision complète de vos revenus."
        }
      ]
    },
    {
      icon: Clock,
      title: "Bilan annuel",
      color: "#e11d48", // rose-600
      gradient: "from-rose-600 to-red-500",
      cards: [
        {
          title: "Bilan complet de votre année",
          subtitle: "Revenus, impôts, prélèvements à la source",
          detail: "Obtenez un bilan complet de votre année avec le montant exact à payer, la prise en compte de vos prélèvements à la source déjà effectués. Une vision claire de votre situation fiscale."
        },
        {
          title: "Frais réels ou abattement 10% ?",
          subtitle: "Comparatif intelligent pour choisir le meilleur",
          detail: "Bénéficiez d'un comparatif automatique entre la méthode des frais réels et l'abattement de 10% de base. L'application vous indique quelle option est la plus avantageuse pour vous."
        },
        {
          title: "Guide pour votre déclaration",
          subtitle: "Étape par étape selon vos revenus",
          detail: "Soyez guidé sur les différentes sections à saisir pour vos différents types de revenus. Remplissez votre déclaration d'impôts sereinement, sans stress, avec des instructions claires et adaptées à votre situation."
        }
      ]
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/30 dark:to-slate-900 overflow-hidden">
      {/* Floating Menu - Desktop */}
      <aside className="hidden lg:flex fixed left-6 top-6 bottom-6 w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-border/40 shadow-2xl flex-col z-50">
        <div className="p-6 border-b border-border/40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center">
              <img src={logoIcon} alt="CachetFlow" className="w-full h-full object-contain" />
            </div>
            <img src={logoText} alt="CachetFlow" className="h-7 w-auto object-contain" />
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={onSignup} className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Commencer
            </Button>
            <Button onClick={onLogin} variant="outline" className="w-full">
              Se connecter
            </Button>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setActiveSection('home')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                activeSection === 'home'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Accueil</span>
            </button>
            <button
              onClick={() => setActiveSection('discover')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                activeSection === 'discover'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Découvrez</span>
            </button>
            <button
              onClick={() => setActiveSection('pricing')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                activeSection === 'pricing'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Tarifs</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-border/40">
          <div className="text-xs text-muted-foreground space-y-2">
            {onGoToCgu && (
              <button onClick={onGoToCgu} className="block hover:text-foreground transition-colors">
                CGU
              </button>
            )}
            {onGoToMentions && (
              <button onClick={onGoToMentions} className="block hover:text-foreground transition-colors">
                Mentions légales
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-border/40 z-50 px-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg overflow-hidden">
            <img src={logoIcon} alt="CachetFlow" className="w-full h-full object-contain" />
          </div>
          <img src={logoText} alt="CachetFlow" className="h-6 w-auto object-contain" />
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-slate-900 shadow-xl p-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-2">
              <Button onClick={() => { onSignup(); setMobileMenuOpen(false); }} className="w-full bg-gradient-to-r from-primary to-blue-600">
                <Sparkles className="w-4 h-4 mr-2" />
                Commencer
              </Button>
              <Button onClick={() => { onLogin(); setMobileMenuOpen(false); }} variant="outline" className="w-full">
                Se connecter
              </Button>
            </div>
            <div className="mt-4 space-y-1">
              <button onClick={() => { setActiveSection('home'); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Accueil
              </button>
              <button onClick={() => { setActiveSection('discover'); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Découvrez
              </button>
              <button onClick={() => { setActiveSection('pricing'); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Tarifs
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-border/40 space-y-2 text-sm text-muted-foreground">
              {onGoToCgu && (
                <button onClick={() => { onGoToCgu(); setMobileMenuOpen(false); }} className="block hover:text-foreground transition-colors">
                  CGU
                </button>
              )}
              {onGoToMentions && (
                <button onClick={() => { onGoToMentions(); setMobileMenuOpen(false); }} className="block hover:text-foreground transition-colors">
                  Mentions légales
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-80 h-screen overflow-hidden pt-16 lg:pt-0">
        <div className="h-full flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-6xl h-full flex items-center justify-center">
            {/* HOME SECTION */}
            {activeSection === 'home' && (
              <div className="flex flex-col items-center text-center space-y-6 animate-in fade-in duration-500">
                {/* Badge */}
                <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white border-0 shadow-lg">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Toutes les fonctionnalités pour 3€/mois
                </Badge>

                {/* Hero Title */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Gérez vos cachets
                    <br />
                    en toute simplicité
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    L'application conçue pour les intermittents du spectacle. Suivez vos revenus, dépenses, trajets et simplifiez votre gestion administrative.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={onSignup} className="text-base px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all hover:scale-105">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setActiveSection('discover')} className="text-base px-8 border-2">
                    Découvrir les fonctionnalités
                  </Button>
                </div>

                {/* App Preview Card */}
                <Card className="mt-8 p-2 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-600/10 border-2 border-primary/20 shadow-2xl max-w-4xl w-full">
                  <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcHAlMjBkYXNoYm9hcmQlMjBtb2NrdXB8ZW58MXx8fHwxNzc1OTIxNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                      alt="CachetFlow Dashboard" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </Card>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">100%</p>
                    <p className="text-sm text-muted-foreground">Sécurisé</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-2">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">Rapide</p>
                    <p className="text-sm text-muted-foreground">& Intuitif</p>
                  </div>
                  <div className="flex flex-col items-center col-span-2 md:col-span-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">3€</p>
                    <p className="text-sm text-muted-foreground">Par mois</p>
                  </div>
                </div>
              </div>
            )}

            {/* DISCOVER SECTION */}
            {activeSection === 'discover' && (
              <div className="h-full w-full flex flex-col animate-in fade-in duration-500 py-4">
                {/* Title - Compact */}
                <div className="text-center mb-4 flex-shrink-0">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Découvrez CachetFlow
                  </h2>
                </div>

                {/* Tabs Navigation - Compact */}
                <div className="flex-shrink-0 border-b border-border/40 mb-2">
                  <div className="flex gap-2 overflow-x-auto pb-0 px-2 scrollbar-hide lg:flex-wrap max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedFeature(index)}
                        className={`flex items-center gap-2 px-4 py-2.5 border-b-2 transition-all duration-300 whitespace-nowrap lg:flex-1 justify-center ${
                          selectedFeature === index
                            ? 'border-primary text-foreground'
                            : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                        }`}
                      >
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-sm transition-transform ${
                          selectedFeature === index ? 'scale-110' : ''
                        }`}>
                          <feature.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-medium">
                          {feature.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="flex-1 flex items-center justify-center overflow-y-auto px-4">
                  {selectedFeature !== null && (
                    <div className="max-w-5xl w-full animate-in fade-in zoom-in duration-500 py-4">
                      {/* Mobile: Stack all 3 cards vertically */}
                      {/* Desktop: Alternate layout based on selectedFeature index */}
                      <div className="space-y-4">
                        {/* Mobile Layout - All cards stacked */}
                        <div className="lg:hidden flex flex-col gap-4">
                          {features[selectedFeature].cards.map((card, cardIdx) => (
                            <div
                              key={cardIdx}
                              className="relative h-64 cursor-pointer perspective-1000 w-full"
                              onClick={() => toggleCard(`${selectedFeature}-${cardIdx}`)}
                            >
                              <div
                                className={`relative w-full h-full transition-transform duration-500 ${flippedCards.has(`${selectedFeature}-${cardIdx}`) ? '[transform:rotateY(180deg)]' : ''}`}
                                style={{
                                  transformStyle: 'preserve-3d',
                                }}
                              >
                                {/* Front of card */}
                                <div
                                  className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg"
                                  style={{
                                    backgroundColor: features[selectedFeature].color,
                                    backfaceVisibility: 'hidden',
                                  }}
                                >
                                  <div>
                                    <h3 className="text-white text-lg font-bold mb-2 leading-tight">
                                      {card.title}
                                    </h3>
                                    <p className="text-white/90 text-sm leading-relaxed">
                                      {card.subtitle}
                                    </p>
                                  </div>
                                  <button className="text-white font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    En savoir plus
                                    <ArrowRight className="w-4 h-4" />
                                  </button>
                                </div>

                                {/* Back of card */}
                                <div
                                  className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg bg-white dark:bg-slate-900 border-2 overflow-y-auto"
                                  style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    borderColor: features[selectedFeature].color,
                                  }}
                                >
                                  <div>
                                    <p className="text-foreground text-sm leading-relaxed">
                                      {card.detail}
                                    </p>
                                  </div>
                                  <button 
                                    className="font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all mt-4"
                                    style={{ color: features[selectedFeature].color }}
                                  >
                                    Retour
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Desktop Layout - Alternating pattern */}
                        <div className="hidden lg:block space-y-4">
                          {selectedFeature % 2 === 0 ? (
                            <>
                              {/* 1 card on top (full width) */}
                              <div className="w-full">
                                <div
                                  className="relative h-80 cursor-pointer perspective-1000 w-full"
                                  onClick={() => toggleCard(`${selectedFeature}-0`)}
                                >
                                  <div
                                    className={`relative w-full h-full transition-transform duration-500 ${flippedCards.has(`${selectedFeature}-0`) ? '[transform:rotateY(180deg)]' : ''}`}
                                    style={{
                                      transformStyle: 'preserve-3d',
                                    }}
                                  >
                                    {/* Front of card */}
                                    <div
                                      className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg"
                                      style={{
                                        backgroundColor: features[selectedFeature].color,
                                        backfaceVisibility: 'hidden',
                                      }}
                                    >
                                      <div>
                                        <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                                          {features[selectedFeature].cards[0].title}
                                        </h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                          {features[selectedFeature].cards[0].subtitle}
                                        </p>
                                      </div>
                                      <button className="text-white font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        En savoir plus
                                        <ArrowRight className="w-4 h-4" />
                                      </button>
                                    </div>

                                    {/* Back of card */}
                                    <div
                                      className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg bg-white dark:bg-slate-900 border-2"
                                      style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                        borderColor: features[selectedFeature].color,
                                      }}
                                    >
                                      <div>
                                        <p className="text-foreground text-sm leading-relaxed">
                                          {features[selectedFeature].cards[0].detail}
                                        </p>
                                      </div>
                                      <button 
                                        className="font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                        style={{ color: features[selectedFeature].color }}
                                      >
                                        Retour
                                        <ArrowRight className="w-4 h-4 rotate-180" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* 2 cards on bottom */}
                              <div className="flex gap-4">
                                {[1, 2].map((cardIdx) => (
                                  <div
                                    key={cardIdx}
                                    className="relative h-64 cursor-pointer perspective-1000 flex-1"
                                    onClick={() => toggleCard(`${selectedFeature}-${cardIdx}`)}
                                  >
                                    <div
                                      className={`relative w-full h-full transition-transform duration-500 ${flippedCards.has(`${selectedFeature}-${cardIdx}`) ? '[transform:rotateY(180deg)]' : ''}`}
                                      style={{
                                        transformStyle: 'preserve-3d',
                                      }}
                                    >
                                      {/* Front of card */}
                                      <div
                                        className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg"
                                        style={{
                                          backgroundColor: features[selectedFeature].color,
                                          backfaceVisibility: 'hidden',
                                        }}
                                      >
                                        <div>
                                          <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                                            {features[selectedFeature].cards[cardIdx].title}
                                          </h3>
                                          <p className="text-white/90 text-sm leading-relaxed">
                                            {features[selectedFeature].cards[cardIdx].subtitle}
                                          </p>
                                        </div>
                                        <button className="text-white font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                          En savoir plus
                                          <ArrowRight className="w-4 h-4" />
                                        </button>
                                      </div>

                                      {/* Back of card */}
                                      <div
                                        className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg bg-white dark:bg-slate-900 border-2"
                                        style={{
                                          backfaceVisibility: 'hidden',
                                          transform: 'rotateY(180deg)',
                                          borderColor: features[selectedFeature].color,
                                        }}
                                      >
                                        <div>
                                          <p className="text-foreground text-sm leading-relaxed">
                                            {features[selectedFeature].cards[cardIdx].detail}
                                          </p>
                                        </div>
                                        <button 
                                          className="font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                          style={{ color: features[selectedFeature].color }}
                                        >
                                          Retour
                                          <ArrowRight className="w-4 h-4 rotate-180" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : (
                            <>
                              {/* 2 cards on top */}
                              <div className="flex gap-4">
                                {[0, 1].map((cardIdx) => (
                                  <div
                                    key={cardIdx}
                                    className="relative h-64 cursor-pointer perspective-1000 flex-1"
                                    onClick={() => toggleCard(`${selectedFeature}-${cardIdx}`)}
                                  >
                                    <div
                                      className={`relative w-full h-full transition-transform duration-500 ${flippedCards.has(`${selectedFeature}-${cardIdx}`) ? '[transform:rotateY(180deg)]' : ''}`}
                                      style={{
                                        transformStyle: 'preserve-3d',
                                      }}
                                    >
                                      {/* Front of card */}
                                      <div
                                        className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg"
                                        style={{
                                          backgroundColor: features[selectedFeature].color,
                                          backfaceVisibility: 'hidden',
                                        }}
                                      >
                                        <div>
                                          <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                                            {features[selectedFeature].cards[cardIdx].title}
                                          </h3>
                                          <p className="text-white/90 text-sm leading-relaxed">
                                            {features[selectedFeature].cards[cardIdx].subtitle}
                                          </p>
                                        </div>
                                        <button className="text-white font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                          En savoir plus
                                          <ArrowRight className="w-4 h-4" />
                                        </button>
                                      </div>

                                      {/* Back of card */}
                                      <div
                                        className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg bg-white dark:bg-slate-900 border-2"
                                        style={{
                                          backfaceVisibility: 'hidden',
                                          transform: 'rotateY(180deg)',
                                          borderColor: features[selectedFeature].color,
                                        }}
                                      >
                                        <div>
                                          <p className="text-foreground text-sm leading-relaxed">
                                            {features[selectedFeature].cards[cardIdx].detail}
                                          </p>
                                        </div>
                                        <button 
                                          className="font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                          style={{ color: features[selectedFeature].color }}
                                        >
                                          Retour
                                          <ArrowRight className="w-4 h-4 rotate-180" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* 1 card on bottom (full width) */}
                              <div className="w-full">
                                <div
                                  className="relative h-80 cursor-pointer perspective-1000 w-full"
                                  onClick={() => toggleCard(`${selectedFeature}-2`)}
                                >
                                  <div
                                    className={`relative w-full h-full transition-transform duration-500 ${flippedCards.has(`${selectedFeature}-2`) ? '[transform:rotateY(180deg)]' : ''}`}
                                    style={{
                                      transformStyle: 'preserve-3d',
                                    }}
                                  >
                                    {/* Front of card */}
                                    <div
                                      className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg"
                                      style={{
                                        backgroundColor: features[selectedFeature].color,
                                        backfaceVisibility: 'hidden',
                                      }}
                                    >
                                      <div>
                                        <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                                          {features[selectedFeature].cards[2].title}
                                        </h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                          {features[selectedFeature].cards[2].subtitle}
                                        </p>
                                      </div>
                                      <button className="text-white font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        En savoir plus
                                        <ArrowRight className="w-4 h-4" />
                                      </button>
                                    </div>

                                    {/* Back of card */}
                                    <div
                                      className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between shadow-lg bg-white dark:bg-slate-900 border-2"
                                      style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                        borderColor: features[selectedFeature].color,
                                      }}
                                    >
                                      <div>
                                        <p className="text-foreground text-sm leading-relaxed">
                                          {features[selectedFeature].cards[2].detail}
                                        </p>
                                      </div>
                                      <button 
                                        className="font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                        style={{ color: features[selectedFeature].color }}
                                      >
                                        Retour
                                        <ArrowRight className="w-4 h-4 rotate-180" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* PRICING SECTION */}
            {activeSection === 'pricing' && (
              <div className="w-full h-full flex flex-col justify-center overflow-y-auto animate-in fade-in duration-500 py-8">
                <div className="text-center mb-8 flex-shrink-0">
                  <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Un prix juste pour tous
                  </h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Accédez à toutes les fonctionnalités sans restriction
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-4">
                  {/* Monthly Plan */}
                  <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-border/50 bg-white dark:bg-slate-900 hover:border-primary/30">
                    <div className="mb-6">
                      <h3 className="text-2xl mb-2 font-bold">Mensuel</h3>
                      <p className="text-muted-foreground">La flexibilité au quotidien</p>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">3€</span>
                        <span className="text-muted-foreground">/mois</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Sans engagement</p>
                    </div>
                    <div className="space-y-3 mb-8 text-sm text-muted-foreground">
                      <p>Idéal pour tester CachetFlow et découvrir toutes ses fonctionnalités sans contrainte.</p>
                      <p className="font-medium text-foreground">Annulation possible à tout moment.</p>
                    </div>
                    <Button className="w-full" size="lg" variant="outline" onClick={onSignup}>
                      Choisir Mensuel
                    </Button>
                  </Card>

                  {/* Annual Plan - Highlighted */}
                  <Card className="p-8 border-2 border-primary bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-600/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
                    
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-lg z-10">
                      Le plus populaire
                    </Badge>
                    <div className="mb-6 relative z-10">
                      <h3 className="text-2xl mb-2 font-bold">Annuel</h3>
                      <p className="text-muted-foreground">2 mois offerts</p>
                    </div>
                    <div className="mb-6 relative z-10">
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">30€</span>
                        <span className="text-muted-foreground">/an</span>
                      </div>
                      <p className="text-sm text-primary mt-2 font-medium">Soit 2,50€/mois seulement</p>
                    </div>
                    <div className="space-y-3 mb-8 text-sm relative z-10">
                      <p className="text-muted-foreground">Le meilleur rapport qualité-prix pour suivre toute votre activité d'intermittent sur l'année.</p>
                      <div className="flex items-start gap-2 text-foreground font-medium">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Économisez 6€ par an (17% de réduction)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl shadow-primary/25 relative z-10" size="lg" onClick={onSignup}>
                      Choisir Annuel
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Card>
                </div>

                <div className="text-center mt-8 flex-shrink-0 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Tous les prix sont TTC · Paiement sécurisé · Toutes les fonctionnalités incluses
                  </p>
                  <Card className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Garantie satisfait ou remboursé.</span> Essayez CachetFlow sans risque. Si l'application ne vous convient pas, nous vous remboursons intégralement.
                    </p>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}