import { useState } from 'react';
import { LogIn, Eye, EyeOff, ArrowLeft, Zap } from 'lucide-react@0.487.0';

interface LoginProps {
  onLogin: () => void;
  onGoToSignup: () => void;
  onBackToHome?: () => void;
}

export function Login({ onLogin, onGoToSignup, onBackToHome }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez ajouter la logique d'authentification
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/30 dark:to-slate-900 p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-2xl mb-4 shadow-xl shadow-primary/25">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">CachetFlow</h1>
          <p className="text-muted-foreground">Gérez vos cachets et revenus en toute simplicité</p>
        </div>

        {/* Formulaire de connexion */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-border/50 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-foreground mb-2">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.fr"
                required
                className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-foreground mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer"
                />
                <span className="ml-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  Se souvenir de moi
                </span>
              </label>
              <button
                type="button"
                className="text-primary hover:underline transition-all"
              >
                Mot de passe oublié ?
              </button>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white py-3 rounded-xl transition-all shadow-xl shadow-primary/25"
            >
              Se connecter
            </button>
          </form>

          {/* Séparateur */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white dark:bg-slate-900 text-muted-foreground">ou</span>
            </div>
          </div>

          {/* Créer un compte */}
          <div className="text-center">
            <p className="text-muted-foreground">
              Vous n&apos;avez pas encore de compte ?{' '}
              <button
                type="button"
                onClick={onGoToSignup}
                className="text-primary hover:underline"
              >
                Créer un compte
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-muted-foreground">
          <p>&copy; 2025 CachetFlow. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}