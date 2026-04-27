import { FileText, Clock, Euro, TrendingUp } from "lucide-react";

export function Dashboard() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={FileText}
            label="Contrats"
            value="12"
            bgColor="bg-purple-50"
            iconColor="text-purple-600"
          />
          <StatCard
            icon={Clock}
            label="Heures totales"
            value="240h"
            bgColor="bg-blue-50"
            iconColor="text-blue-600"
          />
          <StatCard
            icon={Euro}
            label="Revenus"
            value="18 500 €"
            bgColor="bg-green-50"
            iconColor="text-green-600"
          />
          <StatCard
            icon={TrendingUp}
            label="Moyenne/mois"
            value="3 083 €"
            bgColor="bg-amber-50"
            iconColor="text-amber-600"
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Activité récente</h2>
          <div className="space-y-3">
            <ActivityItem
              title="Nouveau contrat ajouté"
              subtitle="Festival Jazz à Paris"
              date="Il y a 2 jours"
              color="purple"
            />
            <ActivityItem
              title="Trajet enregistré"
              subtitle="Paris → Lyon (450 km)"
              date="Il y a 3 jours"
              color="cyan"
            />
            <ActivityItem
              title="AEM soumise"
              subtitle="Mars 2026 - 18h"
              date="Il y a 1 semaine"
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, bgColor, iconColor }: {
  icon: any;
  label: string;
  value: string;
  bgColor: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-3`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div className="text-2xl font-semibold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

function ActivityItem({ title, subtitle, date, color }: {
  title: string;
  subtitle: string;
  date: string;
  color: 'purple' | 'cyan' | 'green';
}) {
  const borderColors = {
    purple: 'border-purple-400',
    cyan: 'border-cyan-400',
    green: 'border-green-400',
  };

  return (
    <div className={`border-l-4 ${borderColors[color]} pl-4 py-2`}>
      <div className="font-medium text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{subtitle}</div>
      <div className="text-xs text-gray-400 mt-1">{date}</div>
    </div>
  );
}
