import { useState } from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  Star, 
  Lightbulb, 
  Search,
  ChevronDown,
  ChevronUp,
  Send,
  Wallet,
  Car,
  Receipt,
  FileText,
  TrendingUp,
  Clock,
  Mail,
  Heart,
  Sparkles,
  CheckCircle2
} from 'lucide-react@0.487.0';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function AidePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'aide' | 'contact' | 'avis' | 'fonctionnalite'>('aide');
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [avisForm, setAvisForm] = useState({ rating: 0, comment: '' });
  const [featureForm, setFeatureForm] = useState({ title: '', description: '', priority: 'moyenne' });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'all', name: 'Tout', icon: HelpCircle, color: 'text-slate-600' },
    { id: 'cachets', name: 'Cachets', icon: Wallet, color: 'text-violet-600', gradient: 'from-violet-500 to-fuchsia-500' },
    { id: 'trajets', name: 'Trajets', icon: Car, color: 'text-blue-600', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'depenses', name: 'Dépenses', icon: Receipt, color: 'text-amber-600', gradient: 'from-amber-500 to-orange-500' },
    { id: 'aem', name: 'AEM', icon: FileText, color: 'text-emerald-600', gradient: 'from-emerald-500 to-green-500' },
    { id: 'revenus', name: 'Revenus', icon: TrendingUp, color: 'text-indigo-600', gradient: 'from-indigo-500 to-blue-600' },
    { id: 'bilan', name: 'Bilan', icon: Clock, color: 'text-purple-600', gradient: 'from-purple-500 to-pink-500' },
  ];

  const faqs = [
    {
      category: 'cachets',
      question: 'Comment ajouter un nouveau cachet ?',
      answer: 'Cliquez sur le bouton "+ Nouveau cachet" en haut de la page Cachets. Remplissez les informations obligatoires : nom de l\'employeur, montant brut, date du cachet et nombre d\'heures. Vous pouvez aussi ajouter des informations optionnelles comme le type de contrat et des notes.'
    },
    {
      category: 'cachets',
      question: 'Quelle est la différence entre montant brut et net ?',
      answer: 'Le montant brut est le salaire avant déduction des cotisations sociales. Le montant net est ce que vous recevez réellement sur votre compte. CachetFlow calcule automatiquement le net à partir du brut en appliquant les taux de cotisation standard (environ 28%).'
    },
    {
      category: 'trajets',
      question: 'Comment sont calculés les frais kilométriques ?',
      answer: 'CachetFlow utilise le barème fiscal officiel en vigueur. Pour 2025, c\'est 0,75€/km pour les 5000 premiers kilomètres. Vous pouvez modifier votre véhicule et sa puissance fiscale dans les Préférences pour un calcul précis.'
    },
    {
      category: 'trajets',
      question: 'Puis-je modifier un trajet après l\'avoir enregistré ?',
      answer: 'Oui, cliquez simplement sur le trajet dans la liste pour ouvrir les détails, puis sur le bouton "Modifier". Vous pouvez changer la distance, la date, ou supprimer le trajet.'
    },
    {
      category: 'depenses',
      question: 'Quelles dépenses puis-je déclarer ?',
      answer: 'Vous pouvez déclarer toutes vos dépenses professionnelles : repas en déplacement, hébergement, matériel, formation, abonnements professionnels, etc. Pensez à bien catégoriser chaque dépense pour faciliter votre comptabilité.'
    },
    {
      category: 'depenses',
      question: 'Faut-il garder les justificatifs ?',
      answer: 'Oui, il est obligatoire de conserver tous vos justificatifs (factures, tickets) pendant au moins 3 ans. CachetFlow vous permet d\'ajouter des notes pour référencer vos justificatifs papier.'
    },
    {
      category: 'aem',
      question: 'Qu\'est-ce qu\'une AEM ?',
      answer: 'L\'Attestation Employeur Mensuelle (AEM) est un document fourni par vos employeurs pour Pôle Emploi. Elle récapitule vos heures et cachets du mois. CachetFlow vous aide à suivre et vérifier ces attestations.'
    },
    {
      category: 'aem',
      question: 'Comment importer mes AEM ?',
      answer: 'Cliquez sur "+ Nouvelle AEM" et remplissez les informations : employeur, mois concerné, nombre d\'heures et de cachets. Vous pouvez aussi ajouter le numéro d\'objet de l\'AEM pour référence.'
    },
    {
      category: 'revenus',
      question: 'Comment interpréter mon graphique de revenus ?',
      answer: 'Le graphique montre l\'évolution de vos revenus mensuels. La courbe bleue représente vos cachets bruts, et vous pouvez voir les tendances sur l\'année. Utilisez les filtres pour afficher différentes périodes.'
    },
    {
      category: 'revenus',
      question: 'Puis-je exporter mes données de revenus ?',
      answer: 'Oui, utilisez le bouton "Exporter" en haut de la page Revenus. Vous pouvez exporter vos données au format CSV ou PDF pour votre comptable ou vos déclarations.'
    },
    {
      category: 'bilan',
      question: 'À quoi sert le bilan annuel ?',
      answer: 'Le bilan annuel récapitule toute votre activité sur l\'année : total des cachets, heures travaillées, revenus nets, dépenses déductibles. C\'est très utile pour votre déclaration d\'impôts et le suivi de votre activité.'
    },
    {
      category: 'bilan',
      question: 'Comment calculer mon impôt sur le revenu ?',
      answer: 'CachetFlow applique le barème progressif 2025 pour estimer votre impôt. Rendez-vous sur la page Bilan annuel pour voir le détail des tranches d\'imposition appliquées à vos revenus.'
    },
  ];

  const tips = [
    {
      category: 'cachets',
      icon: Wallet,
      gradient: 'from-violet-500 to-fuchsia-500',
      title: 'Vérifiez vos bulletins',
      description: 'Comparez toujours les montants dans CachetFlow avec vos bulletins de paie pour éviter les erreurs.'
    },
    {
      category: 'trajets',
      icon: Car,
      gradient: 'from-blue-500 to-cyan-500',
      title: 'Notez immédiatement',
      description: 'Enregistrez vos trajets juste après les avoir effectués pour ne rien oublier.'
    },
    {
      category: 'depenses',
      icon: Receipt,
      gradient: 'from-amber-500 to-orange-500',
      title: 'Photographiez vos reçus',
      description: 'Prenez en photo vos justificatifs et rangez-les dans un dossier dédié sur votre téléphone.'
    },
    {
      category: 'aem',
      icon: FileText,
      gradient: 'from-emerald-500 to-green-500',
      title: 'Contrôlez chaque mois',
      description: 'Vérifiez que le total de vos AEM correspond au total de vos cachets du mois.'
    },
    {
      category: 'revenus',
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-blue-600',
      title: 'Suivez vos objectifs',
      description: 'Fixez-vous des objectifs mensuels et suivez votre progression dans la page Revenus.'
    },
    {
      category: 'bilan',
      icon: Clock,
      gradient: 'from-purple-500 to-pink-500',
      title: 'Préparez vos impôts',
      description: 'Consultez le bilan annuel dès janvier pour anticiper votre déclaration d\'impôts.'
    },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const filteredTips = activeCategory === 'all'
    ? tips
    : tips.filter(tip => tip.category === activeCategory);

  const searchFilteredFaqs = searchQuery
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleAvisSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAvisForm({ rating: 0, comment: '' });
    }, 3000);
  };

  const handleFeatureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFeatureForm({ title: '', description: '', priority: 'moyenne' });
    }, 3000);
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="flex-shrink-0 pb-6">
        <div>
          <h1 className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">Centre d'aide</h1>
          <p className="text-muted-foreground">Conseils, support et feedback</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex-shrink-0 border-b border-border pb-1 mb-6">
        <div className="flex gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('aide')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'aide'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Aide & FAQ</span>
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'contact'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={() => setActiveTab('avis')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'avis'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Star className="w-4 h-4" />
              <span>Donner un avis</span>
            </button>
            <button
              onClick={() => setActiveTab('fonctionnalite')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'fonctionnalite'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              <span>Suggérer une fonctionnalité</span>
            </button>
          </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Aide & FAQ Tab */}
        {activeTab === 'aide' && (
          <div className="space-y-6 pb-6">
            {/* Search */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-blue-600/5 border-2 border-primary/20 shadow-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher dans l'aide..."
                  className="w-full pl-10 pr-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </Card>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25'
                        : 'bg-white dark:bg-slate-900 border-2 border-border hover:border-primary/30'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tips Section */}
            {filteredTips.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="text-foreground">Conseils pratiques</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredTips.map((tip, index) => {
                    const Icon = tip.icon;
                    return (
                      <Card key={index} className="p-6 hover:shadow-xl transition-all group border-2 border-border/50 hover:border-primary/30">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="mb-2 text-foreground">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-primary" />
                <h2 className="text-foreground">Questions fréquentes</h2>
              </div>
              <div className="space-y-3">
                {searchFilteredFaqs.length > 0 ? (
                  searchFilteredFaqs.map((faq, index) => {
                    const category = categories.find(c => c.id === faq.category);
                    const Icon = category?.icon || HelpCircle;
                    const isExpanded = expandedFaq === index;

                    return (
                      <Card key={index} className="overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all">
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : index)}
                          className="w-full p-6 text-left flex items-start gap-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category?.gradient || 'from-slate-500 to-slate-600'} flex items-center justify-center flex-shrink-0 shadow-md`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-1 text-foreground">{faq.question}</h3>
                            {category && (
                              <Badge variant="secondary" className="text-xs">
                                {category.name}
                              </Badge>
                            )}
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-6 pb-6 pt-0">
                            <div className="pl-14">
                              <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </Card>
                    );
                  })
                ) : (
                  <Card className="p-12 text-center">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Aucun résultat trouvé pour "{searchQuery}"</p>
                  </Card>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto pb-6">
            <Card className="p-8 border-2 border-border/50 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-foreground">Contactez-nous</h2>
                  <p className="text-sm text-muted-foreground">Notre équipe vous répondra dans les 24h</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-2 border-emerald-500/20 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-emerald-900 dark:text-emerald-100 mb-2">Message envoyé !</h3>
                  <p className="text-emerald-700 dark:text-emerald-300">Nous vous répondrons très bientôt.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-foreground mb-2">Nom</label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Votre nom"
                        required
                        className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="votre@email.fr"
                        required
                        className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground mb-2">Sujet</label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder="Objet de votre message"
                      required
                      className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground mb-2">Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Décrivez votre demande..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl shadow-primary/25">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        )}

        {/* Avis Tab */}
        {activeTab === 'avis' && (
          <div className="max-w-2xl mx-auto pb-6">
            <Card className="p-8 border-2 border-border/50 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-foreground">Donnez-nous votre avis</h2>
                  <p className="text-sm text-muted-foreground">Votre retour nous aide à améliorer CachetFlow</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-2 border-emerald-500/20 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-emerald-900 dark:text-emerald-100 mb-2">Merci pour votre avis !</h3>
                  <p className="text-emerald-700 dark:text-emerald-300">Vos retours sont précieux pour nous.</p>
                </div>
              ) : (
                <form onSubmit={handleAvisSubmit} className="space-y-6">
                  <div>
                    <label className="block text-foreground mb-3">Note globale</label>
                    <div className="flex gap-2 justify-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setAvisForm({ ...avisForm, rating: star })}
                          className="group"
                        >
                          <Star
                            className={`w-10 h-10 transition-all ${
                              star <= avisForm.rating
                                ? 'fill-amber-500 text-amber-500'
                                : 'text-muted-foreground group-hover:text-amber-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {avisForm.rating > 0 && (
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        {avisForm.rating === 5 && '⭐ Excellent !'}
                        {avisForm.rating === 4 && '👍 Très bien'}
                        {avisForm.rating === 3 && '😊 Bien'}
                        {avisForm.rating === 2 && '😐 Moyen'}
                        {avisForm.rating === 1 && '😞 Décevant'}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-foreground mb-2">Commentaire (optionnel)</label>
                    <textarea
                      value={avisForm.comment}
                      onChange={(e) => setAvisForm({ ...avisForm, comment: e.target.value })}
                      placeholder="Partagez votre expérience avec CachetFlow..."
                      rows={6}
                      className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={avisForm.rating === 0}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-xl shadow-amber-500/25 disabled:opacity-50"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Envoyer mon avis
                  </Button>
                </form>
              )}
            </Card>
          </div>
        )}

        {/* Fonctionnalité Tab */}
        {activeTab === 'fonctionnalite' && (
          <div className="max-w-2xl mx-auto pb-6">
            <Card className="p-8 border-2 border-border/50 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-foreground">Suggérer une fonctionnalité</h2>
                  <p className="text-sm text-muted-foreground">Aidez-nous à façonner l'avenir de CachetFlow</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-2 border-emerald-500/20 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-emerald-900 dark:text-emerald-100 mb-2">Suggestion enregistrée !</h3>
                  <p className="text-emerald-700 dark:text-emerald-300">Nous étudierons votre proposition avec attention.</p>
                </div>
              ) : (
                <form onSubmit={handleFeatureSubmit} className="space-y-6">
                  <div>
                    <label className="block text-foreground mb-2">Titre de la fonctionnalité</label>
                    <input
                      type="text"
                      value={featureForm.title}
                      onChange={(e) => setFeatureForm({ ...featureForm, title: e.target.value })}
                      placeholder="Ex: Export automatique vers Excel"
                      required
                      className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground mb-2">Description détaillée</label>
                    <textarea
                      value={featureForm.description}
                      onChange={(e) => setFeatureForm({ ...featureForm, description: e.target.value })}
                      placeholder="Décrivez la fonctionnalité que vous aimeriez voir ajoutée et comment elle vous serait utile..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground mb-2">Priorité pour vous</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['basse', 'moyenne', 'haute'].map((priority) => (
                        <button
                          key={priority}
                          type="button"
                          onClick={() => setFeatureForm({ ...featureForm, priority })}
                          className={`px-4 py-3 rounded-xl border-2 transition-all ${
                            featureForm.priority === priority
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/30'
                          }`}
                        >
                          {priority.charAt(0).toUpperCase() + priority.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-xl shadow-purple-500/25">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Envoyer ma suggestion
                  </Button>
                </form>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}