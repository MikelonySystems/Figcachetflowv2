import { PieChart, TrendingUp, Euro, Calendar } from "lucide-react";

export function BilanAnnuel() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Bilan Annuel</h1>
          <p className="text-sm text-gray-500 mt-1">Année 2026</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={Euro}
            label="Revenus totaux"
            value="18 500 €"
            bgColor="bg-rose-50"
            textColor="text-rose-600"
          />
          <StatCard
            icon={TrendingUp}
            label="Dépenses totales"
            value="1 450 €"
            bgColor="bg-red-50"
            textColor="text-red-600"
          />
          <StatCard
            icon={Calendar}
            label="Jours travaillés"
            value="85"
            bgColor="bg-pink-50"
            textColor="text-pink-600"
          />
          <StatCard
            icon={PieChart}
            label="Revenu net"
            value="17 050 €"
            bgColor="bg-rose-50"
            textColor="text-rose-600"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition mensuelle</h3>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg">
              <div className="text-center">
                <PieChart className="w-12 h-12 text-rose-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Graphique de répartition</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Évolution annuelle</h3>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Graphique d'évolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Résumé annuel</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Nombre de contrats</div>
              <div className="text-2xl font-semibold text-gray-900">24</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Heures totales</div>
              <div className="text-2xl font-semibold text-gray-900">520h</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Revenu moyen/mois</div>
              <div className="text-2xl font-semibold text-gray-900">1 542 €</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, bgColor, textColor }: {
  icon: any;
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div className={`${bgColor} rounded-lg p-4`}>
      <div className="flex items-center gap-3">
        <Icon className={`w-5 h-5 ${textColor}`} />
        <div>
          <div className={`text-2xl font-semibold ${textColor}`}>{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
}
