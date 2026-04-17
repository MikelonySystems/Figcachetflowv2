import { useState } from 'react';
import { UserPlus, Eye, EyeOff, CheckCircle2, CreditCard, Smartphone, ArrowLeft, Zap } from 'lucide-react@0.487.0';
import logoIcon from "figma:asset/0e19cb487deade254993902fbb14c03d239ca231.png";
import logoText from "figma:asset/63a5d684b913244c6f683c3d81e6e8bb7be26d2d.png";

interface SignupProps {
  onSignup: () => void;
  onBackToLogin: () => void;
  onBackToHome?: () => void;
}

type Step = 'plan' | 'account' | 'payment';

export function Signup({ onSignup, onBackToLogin, onBackToHome }: SignupProps) {
  const [currentStep, setCurrentStep] = useState<Step>('plan');
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'applepay'>('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const subscriptionPlans = [
    {
      id: 'monthly',
      name: 'Mensuel',
      price: '6 €',
      period: 'mois',
      description: 'Payez au mois, sans engagement',
      features: [
        'Toutes les fonctionnalités',
        'Synchronisation illimitée',
        'Support par email',
        'Mises à jour gratuites',
      ],
      gradient: 'from-primary to-blue-600',
    },
    {
      id: 'annual',
      name: 'Annuel',
      price: '30 €',
      originalPrice: '60 €',
      period: 'an',
      description: 'Économisez en payant à l\'année',
      badge: '-50% Lancement',
      savings: 'Soit 2,50€/mois au lieu de 6€/mois',
      features: [
        'Toutes les fonctionnalités',
        'Synchronisation illimitée',
        'Support prioritaire',
        'Mises à jour gratuites',
        'Économisez 50% 🎉',
      ],
      popular: true,
      gradient: 'from-primary via-purple-600 to-blue-600',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 'plan') {
      setCurrentStep('account');
      return;
    }
    
    if (currentStep === 'account') {
      // Validation basique
      if (formData.password !== formData.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
      if (!acceptTerms) {
        alert('Veuillez accepter les conditions d\'utilisation');
        return;
      }
      
      // Si formule gratuite, pas besoin de paiement
      if (selectedPlan === 'gratuit') {
        onSignup();
        return;
      }
      
      setCurrentStep('payment');
      return;
    }
    
    if (currentStep === 'payment') {
      // Ici vous pourrez ajouter la logique de paiement
      onSignup();
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCardChange = (field: keyof typeof cardData, value: string) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  // Validation du mot de passe
  const passwordStrength = {
    hasMinLength: formData.password.length >= 8,
    hasUpperCase: /[A-Z]/.test(formData.password),
    hasLowerCase: /[a-z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
  };

  const isPasswordStrong = Object.values(passwordStrength).every(Boolean);

  const selectedPlanDetails = subscriptionPlans.find(p => p.id === selectedPlan);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/30 dark:to-slate-900 p-4 overflow-y-auto py-8 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Bouton retour à l'accueil */}
        {onBackToHome && (
          <button
            type="button"
            onClick={onBackToHome}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </button>
        )}

        {/* Logo et titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-xl overflow-hidden bg-white/80 dark:bg-slate-900/80 p-3">
            <img src={logoIcon} alt="CachetFlow" className="w-full h-full object-contain" />
          </div>
          <img src={logoText} alt="CachetFlow" className="h-10 w-auto object-contain mx-auto mb-2" />
          <p className="text-muted-foreground">
            {currentStep === 'plan' && 'Choisissez votre formule'}
            {currentStep === 'account' && 'Créez votre compte'}
            {currentStep === 'payment' && 'Configurez votre paiement'}
          </p>
        </div>

        {/* Indicateur d'étapes */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`flex items-center gap-2 transition-colors ${currentStep === 'plan' ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              currentStep === 'plan' ? 'bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/25' : 'bg-muted'
            }`}>
              1
            </div>
            <span className="hidden sm:inline">Formule</span>
          </div>
          <div className="w-12 h-0.5 bg-border"></div>
          <div className={`flex items-center gap-2 transition-colors ${currentStep === 'account' ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              currentStep === 'account' ? 'bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/25' : 'bg-muted'
            }`}>
              2
            </div>
            <span className="hidden sm:inline">Compte</span>
          </div>
          {selectedPlan !== 'gratuit' && (
            <>
              <div className="w-12 h-0.5 bg-border"></div>
              <div className={`flex items-center gap-2 transition-colors ${currentStep === 'payment' ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  currentStep === 'payment' ? 'bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/25' : 'bg-muted'
                }`}>
                  3
                </div>
                <span className="hidden sm:inline">Paiement</span>
              </div>
            </>
          )}
        </div>

        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-border/50 p-8">
          <form onSubmit={handleSubmit}>
            {/* Étape 1: Choix de la formule */}
            {currentStep === 'plan' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {subscriptionPlans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`relative rounded-xl border-2 p-6 transition-all text-left group ${
                        selectedPlan === plan.id
                          ? 'border-primary bg-gradient-to-br from-primary/5 to-blue-600/5 shadow-2xl shadow-primary/20 scale-105'
                          : 'border-border/50 hover:border-primary/30 hover:shadow-lg bg-background'
                      }`}
                    >
                      {plan.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-blue-600 text-white text-xs rounded-full shadow-lg">
                          Populaire
                        </span>
                      )}
                      {plan.badge && (
                        <span className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-destructive to-orange-600 text-white text-xs rounded-full shadow-lg">
                          {plan.badge}
                        </span>
                      )}
                      {selectedPlan === plan.id && (
                        <div className="absolute -top-3 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs rounded-full shadow-lg">
                          <CheckCircle2 className="w-3 h-3" />
                          Sélectionné
                        </div>
                      )}
                      <div className="mb-4">
                        <h3 className="text-foreground mb-1">{plan.name}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{plan.description}</p>
                        <div className="flex items-baseline gap-2">
                          <span className={`bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>{plan.price}</span>
                          {plan.originalPrice && (
                            <span className="text-muted-foreground line-through text-sm">{plan.originalPrice}</span>
                          )}
                          <span className="text-muted-foreground">/{plan.period}</span>
                        </div>
                        {plan.savings && (
                          <p className="text-xs text-primary mt-1">{plan.savings}</p>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white py-3 rounded-xl transition-all shadow-xl shadow-primary/25"
                >
                  Continuer avec {selectedPlanDetails?.name}
                </button>
              </div>
            )}

            {/* Étape 2: Création du compte */}
            {currentStep === 'account' && (
              <div className="space-y-6">
                {/* Récapitulatif de la formule */}
                <div className="bg-gradient-to-br from-[#0A1E3F] to-purple-600 text-white rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/80">Formule sélectionnée</p>
                    <p className="text-white">{selectedPlanDetails?.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">{selectedPlanDetails?.price}</p>
                    <p className="text-sm text-white/80">/{selectedPlanDetails?.period}</p>
                  </div>
                </div>

                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-[#374151] mb-2">
                      Prénom
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      placeholder="Jean"
                      required
                      className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[#374151] mb-2">
                      Nom
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      placeholder="Dupont"
                      required
                      className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[#374151] mb-2">
                    Adresse email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="nom@exemple.fr"
                    required
                    className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all"
                  />
                </div>

                {/* Mot de passe */}
                <div>
                  <label htmlFor="password" className="block text-[#374151] mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#0A1E3F] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Indicateur de force du mot de passe */}
                  {formData.password && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            passwordStrength.hasMinLength
                              ? 'text-emerald-600'
                              : 'text-[#D1D5DB]'
                          }`}
                        />
                        <span
                          className={
                            passwordStrength.hasMinLength
                              ? 'text-[#374151]'
                              : 'text-[#9CA3AF]'
                          }
                        >
                          8 caractères min.
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            passwordStrength.hasUpperCase
                              ? 'text-emerald-600'
                              : 'text-[#D1D5DB]'
                          }`}
                        />
                        <span
                          className={
                            passwordStrength.hasUpperCase
                              ? 'text-[#374151]'
                              : 'text-[#9CA3AF]'
                          }
                        >
                          Une majuscule
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            passwordStrength.hasLowerCase
                              ? 'text-emerald-600'
                              : 'text-[#D1D5DB]'
                          }`}
                        />
                        <span
                          className={
                            passwordStrength.hasLowerCase
                              ? 'text-[#374151]'
                              : 'text-[#9CA3AF]'
                          }
                        >
                          Une minuscule
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            passwordStrength.hasNumber
                              ? 'text-emerald-600'
                              : 'text-[#D1D5DB]'
                          }`}
                        />
                        <span
                          className={
                            passwordStrength.hasNumber
                              ? 'text-[#374151]'
                              : 'text-[#9CA3AF]'
                          }
                        >
                          Un chiffre
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirmation mot de passe */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-[#374151] mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange('confirmPassword', e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#0A1E3F] transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600">
                      Les mots de passe ne correspondent pas
                    </p>
                  )}
                </div>

                {/* Accepter les conditions */}
                <div>
                  <label className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="w-4 h-4 mt-1 rounded border-[#E5E7EB] text-[#0A1E3F] focus:ring-2 focus:ring-[#0A1E3F] focus:ring-offset-0 cursor-pointer flex-shrink-0"
                    />
                    <span className="ml-2 text-[#6B7280] group-hover:text-[#374151] transition-colors">
                      J&apos;accepte les{' '}
                      <button type="button" className="text-[#0A1E3F] hover:underline">
                        conditions d&apos;utilisation
                      </button>{' '}
                      et la{' '}
                      <button type="button" className="text-[#0A1E3F] hover:underline">
                        politique de confidentialité
                      </button>
                    </span>
                  </label>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('plan')}
                    className="flex-1 px-4 py-3 bg-[#F3F4F6] text-[#374151] rounded-xl hover:bg-[#E5E7EB] transition-all"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={!isPasswordStrong || formData.password !== formData.confirmPassword || !acceptTerms}
                    className="flex-1 bg-[#0A1E3F] text-white py-3 rounded-xl hover:bg-[#152945] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0A1E3F]"
                  >
                    {selectedPlan === 'gratuit' ? 'Créer mon compte' : 'Continuer vers le paiement'}
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3: Paiement (seulement si formule payante) */}
            {currentStep === 'payment' && selectedPlan !== 'gratuit' && (
              <div className="space-y-6">
                {/* Récapitulatif */}
                <div className="bg-gradient-to-br from-[#0A1E3F] to-purple-600 text-white rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm text-white/80">Formule sélectionnée</p>
                      <p className="text-white">{selectedPlanDetails?.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white">{selectedPlanDetails?.price}</p>
                      <p className="text-sm text-white/80">/{selectedPlanDetails?.period}</p>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <p className="text-sm text-white/80">
                      Prochain prélèvement : {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>

                {/* Choix du mode de paiement */}
                <div>
                  <label className="block text-[#374151] mb-3">
                    Choisissez votre mode de paiement
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#0A1E3F] bg-[#F9FAFB]'
                          : 'border-[#E5E7EB] hover:border-[#D1D5DB]'
                      }`}
                    >
                      <CreditCard className="w-6 h-6 text-[#0A1E3F]" />
                      <div className="text-left">
                        <p className="text-[#374151]">Carte bancaire</p>
                        <p className="text-xs text-[#6B7280]">Visa, Mastercard</p>
                      </div>
                      {paymentMethod === 'card' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 ml-auto" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-[#0A1E3F] bg-[#F9FAFB]'
                          : 'border-[#E5E7EB] hover:border-[#D1D5DB]'
                      }`}
                    >
                      <div className="w-6 h-6 flex items-center justify-center bg-[#0070BA] rounded text-white">
                        P
                      </div>
                      <div className="text-left">
                        <p className="text-[#374151]">PayPal</p>
                        <p className="text-xs text-[#6B7280]">Paiement sécurisé</p>
                      </div>
                      {paymentMethod === 'paypal' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 ml-auto" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('applepay')}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === 'applepay'
                          ? 'border-[#0A1E3F] bg-[#F9FAFB]'
                          : 'border-[#E5E7EB] hover:border-[#D1D5DB]'
                      }`}
                    >
                      <Smartphone className="w-6 h-6 text-[#0A1E3F]" />
                      <div className="text-left">
                        <p className="text-[#374151]">Apple Pay</p>
                        <p className="text-xs text-[#6B7280]">Paiement rapide</p>
                      </div>
                      {paymentMethod === 'applepay' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 ml-auto" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Formulaire carte bancaire */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-[#374151] mb-2">
                        Numéro de carte
                      </label>
                      <input
                        id="cardNumber"
                        type="text"
                        value={cardData.number}
                        onChange={(e) => handleCardChange('number', e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="cardName" className="block text-[#374151] mb-2">
                        Nom sur la carte
                      </label>
                      <input
                        id="cardName"
                        type="text"
                        value={cardData.name}
                        onChange={(e) => handleCardChange('name', e.target.value)}
                        placeholder="Jean Dupont"
                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cardExpiry" className="block text-[#374151] mb-2">
                          Date d&apos;expiration
                        </label>
                        <input
                          id="cardExpiry"
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) => handleCardChange('expiry', e.target.value)}
                          placeholder="MM/AA"
                          maxLength={5}
                          className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="cardCvv" className="block text-[#374151] mb-2">
                          CVV
                        </label>
                        <input
                          id="cardCvv"
                          type="text"
                          value={cardData.cvv}
                          onChange={(e) => handleCardChange('cvv', e.target.value)}
                          placeholder="123"
                          maxLength={3}
                          className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A1E3F] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* PayPal */}
                {paymentMethod === 'paypal' && (
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-[#0070BA] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">P</span>
                    </div>
                    <p className="text-[#374151] mb-2">Paiement via PayPal</p>
                    <p className="text-sm text-[#6B7280]">
                      Vous serez redirigé vers PayPal pour finaliser votre paiement de manière sécurisée.
                    </p>
                  </div>
                )}

                {/* Apple Pay */}
                {paymentMethod === 'applepay' && (
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-[#374151] mb-2">Paiement via Apple Pay</p>
                    <p className="text-sm text-[#6B7280]">
                      Utilisez Touch ID ou Face ID pour confirmer votre paiement rapidement et en toute sécurité.
                    </p>
                  </div>
                )}

                {/* Sécurité */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-emerald-900 mb-1">Paiement 100% sécurisé</p>
                    <p className="text-sm text-emerald-700">
                      Vos informations sont cryptées et protégées. Vous pouvez annuler votre abonnement à tout moment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('account')}
                    className="flex-1 px-4 py-3 bg-[#F3F4F6] text-[#374151] rounded-xl hover:bg-[#E5E7EB] transition-all"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#0A1E3F] text-white py-3 rounded-xl hover:bg-[#152945] transition-all shadow-md hover:shadow-lg"
                  >
                    {paymentMethod === 'card' ? 'Valider et payer' : 'Continuer'}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Séparateur */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-[#6B7280]">ou</span>
            </div>
          </div>

          {/* Retour à la connexion */}
          <div className="text-center">
            <p className="text-[#6B7280]">
              Vous avez déjà un compte ?{' '}
              <button
                type="button"
                onClick={onBackToLogin}
                className="text-[#0A1E3F] hover:underline"
              >
                Se connecter
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-[#9CA3AF]">
          <p>&copy; 2025 Mes Cachets. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}