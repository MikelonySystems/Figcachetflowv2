import { ArrowRight, Check, ChevronRight, Sparkles, TrendingUp, Shield, Zap, Users, Star, Calendar, Wallet, Receipt, FileText, Car, Clock, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import logoIcon from "../../imports/favicon-192x192.png";
import logoText from "../../imports/Nom_Transparent.png";
import dashboardImg from "../../imports/iMACAPP.jpg";
import contratImg from "../../imports/contrat-1.png";
import trajetsImg from "../../imports/trajets-1.png";
import depensesImg from "../../imports/depenses-1.png";
import revenusImg from "../../imports/revenus-1.png";
import aemImg from "../../imports/aem-1.png";
import bilanImg from "../../imports/Bilan_annuel-1.png";
import { useState } from "react";

interface LandingPageProps {
  onLogin: () => void;
  onSignup: () => void;
  onGoToFeatures?: () => void;
  onGoToCgu?: () => void;
  onGoToMentions?: () => void;
}

export function LandingPage({ onLogin, onSignup, onGoToCgu, onGoToMentions }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Intégrer avec votre système de gestion de leads (Mailchimp, SendGrid, etc.)
    console.log("Lead captured:", { name: leadName, email: leadEmail });
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadSubmitted(false);
      setLeadEmail("");
      setLeadName("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={logoIcon} alt="CachetFlow" className="w-full h-full object-contain" />
              </div>
              <img src={logoText} alt="CachetFlow" className="h-6 w-auto object-contain hidden sm:block" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => document.getElementById('fonctionnalites')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Tarifs
              </button>
              <button 
                onClick={onGoToCgu}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                CGU
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" onClick={onLogin}>
                Se connecter
              </Button>
              <Button onClick={onSignup} className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                Commencer gratuitement
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-white dark:bg-slate-950 p-4 space-y-4">
            <div className="space-y-2">
              <button
                onClick={() => {
                  document.getElementById('fonctionnalites')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => {
                  document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              >
                Tarifs
              </button>
              <button 
                onClick={onGoToCgu}
                className="w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              >
                CGU
              </button>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
              <Button variant="outline" onClick={onLogin} className="w-full">
                Se connecter
              </Button>
              <Button onClick={onSignup} className="w-full bg-gradient-to-r from-primary to-blue-600">
                Commencer gratuitement
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-slate-950 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  La compta simplifiée pour les{" "}
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    intermittents du spectacle
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Gérez vos contrats, trajets, dépenses et revenus en quelques clics. 
                  Optimisez vos frais réels et gagnez du temps sur votre déclaration d'impôts.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={onSignup}
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 text-base"
                >
                  Commencer maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Voir une démo
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Sans engagement</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Données sécurisées</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Support réactif</span>
                </div>
              </div>

              {/* Price mention */}
              <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-primary/5 to-blue-600/5 px-4 py-2 rounded-lg border border-primary/10">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">3€</span>
                <span className="text-sm text-muted-foreground">/mois · ou 30€/an (2 mois offerts)</span>
              </div>
            </div>

            {/* Right: Visual/Media */}
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl">
                <img
                  src={dashboardImg}
                  alt="Dashboard CachetFlow sur iMac - Vue d'ensemble avec widgets contrats, revenus et statistiques AEM"
                  className="w-full h-auto rounded-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-20 blur-2xl -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-20 blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/40 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">5 min</div>
              <div className="text-sm text-muted-foreground">par mois pour tout gérer</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">des fonctionnalités</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">6€</div>
              <div className="text-sm text-muted-foreground">économisés en annuel</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">0€</div>
              <div className="text-sm text-muted-foreground">de frais cachés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Contrats - Image Left */}
      <section id="fonctionnalites" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Media */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                  <img
                    src={contratImg}
                    alt="Interface de gestion des contrats CachetFlow - Tableau des cachets avec filtres, totaux et statuts"
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-border p-4 max-w-xs hidden lg:block">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">Contrat validé</p>
                      <p className="text-xs text-muted-foreground">+350€ · 8h00 · Frais km créés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 text-violet-700 dark:text-violet-400 rounded-full text-sm font-medium">
                <Wallet className="w-4 h-4" />
                Contrats
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Suivez tous vos contrats en un clin d'œil
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Centralisez tous vos cachets, suivez vos heures réelles, vérifiez vos récapitulatifs mensuels et anticipez vos revenus. 
                Fini les erreurs de paie, gardez le contrôle total.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Création automatique des frais kilométriques</p>
                    <p className="text-sm text-muted-foreground">Renseignez le lieu de travail, le reste se fait tout seul</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Heures réellement effectuées</p>
                    <p className="text-sm text-muted-foreground">Contrôlez votre activité et assurez-vous d'être payé correctement</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Récapitulatifs mensuels automatiques</p>
                    <p className="text-sm text-muted-foreground">Visualisez vos totaux et anticipez vos revenus du mois</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Trajets - Image Right */}
      <section className="py-20 lg:py-32 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                <Car className="w-4 h-4" />
                Trajets
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Calculez automatiquement vos frais kilométriques
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                L'application calcule instantanément la distance depuis votre domicile vers votre lieu de travail. 
                Obtenez un bilan annuel complet pour optimiser vos frais réels.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Calcul automatique des distances</p>
                    <p className="text-sm text-muted-foreground">Plus besoin de Google Maps, tout est automatique</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Création en un clic depuis vos contrats</p>
                    <p className="text-sm text-muted-foreground">Intégration parfaite entre contrats et déplacements</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Bilan annuel pour les frais réels</p>
                    <p className="text-sm text-muted-foreground">Maximisez vos déductions fiscales en toute simplicité</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Media */}
            <div className="relative">
              <div className="rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                <img
                  src={trajetsImg}
                  alt="Interface de gestion des trajets CachetFlow - Carte interactive avec distances et calculs automatiques"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-border p-4 max-w-xs hidden lg:block">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Trajet calculé</p>
                    <p className="text-xs text-muted-foreground">42 km · 24,36€ · A/R</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Dépenses - Image Left */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Media */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                  <img
                    src={depensesImg}
                    alt="Interface de gestion des dépenses CachetFlow - Liste catégorisée avec calcul automatique des totaux"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium">
                <Receipt className="w-4 h-4" />
                Dépenses
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Gérez toutes vos dépenses professionnelles
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Centralisez matériel, formations, abonnements... et obtenez automatiquement le total pour vos frais réels. 
                Définissez même un pourcentage pro/perso pour vos achats mixtes.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Catégorisation intelligente</p>
                    <p className="text-sm text-muted-foreground">Organisez vos dépenses par type pour un suivi optimal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Part professionnelle personnalisable</p>
                    <p className="text-sm text-muted-foreground">Définissez le % pro pour vos achats mixtes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Total automatique pour les impôts</p>
                    <p className="text-sm text-muted-foreground">Calcul instantané pour votre déclaration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: AEM & Revenus - Combined section with cards */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Et bien plus encore...
            </h2>
            <p className="text-xl text-muted-foreground">
              Toutes les fonctionnalités dont vous avez besoin pour gérer votre activité d'intermittent
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AEM Card */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-emerald-500/30">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">AEM & Attestations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Centralisez vos attestations employeur, calculez votre taux d'indemnisation et suivez l'évolution de votre statut en temps réel.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Calcul du taux d'indemnisation actuel</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Suivi de l'avancement de votre statut</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Bientôt : anticipation du futur taux</p>
                  </div>
                </div>

                {/* AEM Screenshot */}
                <div className="rounded-lg overflow-hidden border border-border/30">
                  <img
                    src={aemImg}
                    alt="Interface AEM CachetFlow - Suivi des attestations employeur"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Card>

            {/* Revenus Card */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-indigo-500/30">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Revenus & Fiscalité</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Centralisez tous vos revenus (cachets, CDI, France Travail) et anticipez vos impôts avec des calculs précis basés sur vos revenus réels.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Tous types de revenus regroupés</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Simulation impôts sur le revenu</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Prélèvement à la source pris en compte</p>
                  </div>
                </div>

                {/* Revenus Screenshot */}
                <div className="rounded-lg overflow-hidden border border-border/30">
                  <img
                    src={revenusImg}
                    alt="Interface Revenus CachetFlow - Suivi et graphiques des revenus"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Bilan Annuel - Full width highlight section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950/30 dark:via-pink-950/30 dark:to-red-950/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 text-rose-700 dark:text-rose-400 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                Bilan Annuel
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Votre déclaration d'impôts simplifiée
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Obtenez un bilan complet de votre année avec comparatif automatique entre frais réels et abattement 10%. 
                L'application vous guide étape par étape pour remplir votre déclaration sans stress.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Bilan fiscal complet automatique</p>
                    <p className="text-sm text-muted-foreground">Revenus, impôts, prélèvements à la source</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Comparatif intelligent frais réels vs 10%</p>
                    <p className="text-sm text-muted-foreground">L'app choisit automatiquement l'option la plus avantageuse</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Guide de déclaration personnalisé</p>
                    <p className="text-sm text-muted-foreground">Instructions claires selon vos types de revenus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Media */}
            <div className="relative">
              <div className="rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                <img
                  src={bilanImg}
                  alt="Interface de bilan annuel CachetFlow - Comparatif frais réels vs 10% et guide de déclaration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed">
                "Enfin un outil moderne fait pour nous, les intermittents ! Fini Excel et les calculs à la main. 
                J'ai gagné un temps fou sur ma déclaration d'impôts."
              </blockquote>
              <div className="flex items-center justify-center gap-3 pt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Sophie M.</p>
                  <p className="text-sm text-muted-foreground">Technicienne lumière · Intermittente depuis 5 ans</p>
                </div>
              </div>
            </div>

            {/* Mini testimonial cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">"Interface ultra claire, tout est intuitif. Même pas besoin de tutoriel !"</p>
                <p className="text-xs font-medium">Marc L. · Régisseur son</p>
              </Card>

              <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">"Le calcul auto des frais km est magique. Plus jamais de prise de tête !"</p>
                <p className="text-xs font-medium">Julie D. · Comédienne</p>
              </Card>

              <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">"3€/mois pour ce niveau de qualité, c'est cadeau. Je recommande !"</p>
                <p className="text-xs font-medium">Thomas R. · Technicien plateau</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Un prix transparent et accessible
            </h2>
            <p className="text-xl text-muted-foreground">
              Toutes les fonctionnalités, sans aucune restriction. Sans engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/30">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Mensuel</h3>
                  <p className="text-sm text-muted-foreground">Parfait pour essayer</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">3€</span>
                    <span className="text-muted-foreground">/mois</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Sans engagement · Annulation à tout moment</p>
                </div>

                <ul className="space-y-3 py-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Toutes les fonctionnalités</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Support par email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mises à jour incluses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Données sécurisées</span>
                  </li>
                </ul>

                <Button size="lg" variant="outline" className="w-full" onClick={onSignup}>
                  Choisir Mensuel
                </Button>
              </div>
            </Card>

            {/* Annual Plan - Featured */}
            <Card className="p-8 border-2 border-primary bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-lg">
                ⭐ Le plus populaire
              </Badge>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Annuel</h3>
                  <p className="text-sm text-primary font-medium">2 mois offerts · Économisez 17%</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">30€</span>
                    <span className="text-muted-foreground">/an</span>
                  </div>
                  <p className="text-sm font-medium">Soit seulement 2,50€/mois</p>
                </div>

                <ul className="space-y-3 py-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Toutes les fonctionnalités</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Support prioritaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Accès anticipé aux nouveautés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Économisez 6€ par an</span>
                  </li>
                </ul>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25"
                  onClick={onSignup}
                >
                  Choisir Annuel
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-sm text-muted-foreground">
              Paiement sécurisé · Garantie satisfait ou remboursé · Tous les prix sont TTC
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl lg:text-5xl font-bold">Questions fréquentes</h2>
              <p className="text-lg text-muted-foreground">Tout ce que vous devez savoir</p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Mes données sont-elles sécurisées ?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolument. Toutes vos données sont chiffrées et stockées de manière sécurisée. 
                  Nous ne vendons jamais vos informations à des tiers.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Puis-je annuler mon abonnement à tout moment ?</h3>
                <p className="text-sm text-muted-foreground">
                  Oui, vous pouvez annuler votre abonnement à tout moment sans frais. 
                  Votre compte reste actif jusqu'à la fin de votre période de facturation.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">L'application est-elle adaptée aux débutants ?</h3>
                <p className="text-sm text-muted-foreground">
                  Totalement ! L'interface est conçue pour être intuitive et simple. 
                  Des guides contextuels vous accompagnent à chaque étape.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Comment sont calculés les frais kilométriques ?</h3>
                <p className="text-sm text-muted-foreground">
                  L'application utilise le barème fiscal officiel et calcule automatiquement les distances 
                  entre votre domicile et vos lieux de travail.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Y a-t-il des frais cachés ?</h3>
                <p className="text-sm text-muted-foreground">
                  Non, aucun. Le prix affiché est le seul que vous paierez. 
                  Toutes les fonctionnalités sont incluses sans surcoût.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Prêt à simplifier votre compta ?
            </h2>
            <p className="text-xl text-white/90">
              Rejoignez les intermittents qui ont déjà adopté CachetFlow pour gagner du temps et optimiser leurs revenus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={onSignup}
                className="bg-white text-primary hover:bg-white/90 shadow-xl text-base"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>3€/mois</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Satisfait ou remboursé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <img src={logoIcon} alt="CachetFlow" className="w-full h-full object-contain" />
                </div>
                <img src={logoText} alt="CachetFlow" className="h-5 w-auto object-contain" />
              </div>
              <p className="text-sm text-muted-foreground">
                La compta simplifiée pour les intermittents du spectacle
              </p>
            </div>

            {/* Product */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Produit</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => document.getElementById('fonctionnalites')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-foreground transition-colors"
                  >
                    Fonctionnalités
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-foreground transition-colors"
                  >
                    Tarifs
                  </button>
                </li>
                <li><button className="hover:text-foreground transition-colors">Changelog</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Légal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={onGoToCgu} className="hover:text-foreground transition-colors">CGU</button></li>
                <li><button onClick={onGoToMentions} className="hover:text-foreground transition-colors">Mentions légales</button></li>
                <li><button className="hover:text-foreground transition-colors">Confidentialité</button></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button className="hover:text-foreground transition-colors">Centre d'aide</button></li>
                <li><button className="hover:text-foreground transition-colors">Contact</button></li>
                <li><button className="hover:text-foreground transition-colors">Status</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 CachetFlow. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}