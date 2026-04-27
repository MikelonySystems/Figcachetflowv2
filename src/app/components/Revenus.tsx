import { Plus, Euro, PieChart, TrendingUp, Filter } from "lucide-react";

const mockRevenus = [
  {
    id: 1,
    month: "Avril 2026",
    source: "Contrat",
    company: "Audens Spectacle",
    netAPayer: "1325,00 €",
    netImposable: "1960,00 €",
    subAmount: "0,00 €",
    paymentDate: "Payé le 20 avr. 2026",
  },
  {
    id: 2,
    month: "Mars 2026",
    source: "Contrat",
    company: "Audens Spectacle",
    netAPayer: "1480,00 €",
    netImposable: "1520,00 €",
    subAmount: "0,00 €",
    paymentDate: "Payé le 24 mars 2026",
  },
];

export function Revenus() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Mes Revenus</h1>
            <p className="text-sm text-gray-500 mt-1">2 revenus</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            Ajouter un revenu
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={Euro}
            label="Total revenus"
            value="2"
            bgColor="bg-blue-50"
            textColor="text-blue-600"
          />
          <StatCard
            icon={TrendingUp}
            label="Contrats"
            value="2805,00 €"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
          <StatCard
            icon={PieChart}
            label="ARE"
            value="0,00 €"
            bgColor="bg-blue-50"
            textColor="text-blue-600"
          />
          <StatCard
            icon={TrendingUp}
            label="Moyennes/mois"
            value="1402,50 €"
            bgColor="bg-green-50"
            textColor="text-green-600"
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <FilterGroup label="Période">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>01 janv. - 31 déc. 2026</option>
              </select>
            </FilterGroup>
            <FilterGroup label="Type">
              <button className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                Tous
              </button>
              <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
                Contrats
              </button>
              <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
                ARE
              </button>
            </FilterGroup>
            <FilterGroup label="Tri par date">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>Plus récent</option>
              </select>
            </FilterGroup>
            <button className="ml-auto px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
              Réinitialiser
            </button>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-4 mb-4">
          <button className="text-sm text-blue-600 font-medium">Timeline</button>
          <button className="text-sm text-gray-500">Graphiques</button>
          <button className="text-sm text-gray-500">Tableau</button>
        </div>

        {/* Revenue List */}
        <div className="space-y-6">
          <div className="text-sm font-semibold text-gray-900">Avril 2026</div>
          <div className="text-xs text-gray-500 mb-2">1 revenus • 1325,00 €</div>

          <div className="space-y-4">
            {mockRevenus.map((revenu) => (
              <RevenueCard key={revenu.id} revenu={revenu} />
            ))}
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

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">{label}</span>
      {children}
    </div>
  );
}

function RevenueCard({ revenu }: { revenu: typeof mockRevenus[0] }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="border-l-4 border-blue-500 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                {revenu.source}
              </span>
              <span className="text-sm text-gray-500">{revenu.month}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{revenu.company}</h3>
            <p className="text-xs text-gray-400 mt-2">{revenu.paymentDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div>
            <div className="text-xs text-gray-500">Net à payer</div>
            <div className="text-lg font-semibold text-blue-600">{revenu.netAPayer}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Net imposable</div>
            <div className="text-lg font-semibold text-gray-900">{revenu.netImposable}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Sub. salarié</div>
            <div className="text-lg font-semibold text-gray-900">{revenu.subAmount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
