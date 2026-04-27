import { Plus, Receipt, Euro, TrendingDown, Calendar } from "lucide-react";

const mockDepenses = [
  {
    id: 1,
    title: "Essence - Déplacement Paris-Lyon",
    category: "Transport",
    date: "14 mars 2026",
    amount: "75,00 €",
    contractRef: "Contrat #23",
  },
  {
    id: 2,
    title: "Péage autoroute",
    category: "Transport",
    date: "14 mars 2026",
    amount: "42,50 €",
    contractRef: "Contrat #23",
  },
  {
    id: 3,
    title: "Repas déplacement",
    category: "Restauration",
    date: "08 mars 2026",
    amount: "28,00 €",
    contractRef: "Contrat #19",
  },
];

export function Depenses() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Mes Dépenses</h1>
            <p className="text-sm text-gray-500 mt-1">Mars 2026</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            <Plus className="w-4 h-4" />
            Ajouter une dépense
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={Receipt}
            label="Dépenses"
            value="3"
            bgColor="bg-orange-50"
            textColor="text-orange-600"
          />
          <StatCard
            icon={Euro}
            label="Total"
            value="145,50 €"
            bgColor="bg-orange-50"
            textColor="text-orange-600"
          />
          <StatCard
            icon={TrendingDown}
            label="Transport"
            value="117,50 €"
            bgColor="bg-amber-50"
            textColor="text-amber-600"
          />
          <StatCard
            icon={Calendar}
            label="Restauration"
            value="28,00 €"
            bgColor="bg-orange-50"
            textColor="text-orange-600"
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <FilterGroup label="Période">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>Mars 2026</option>
              </select>
            </FilterGroup>
            <FilterGroup label="Catégorie">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>Toutes</option>
              </select>
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

        {/* Expenses List */}
        <div className="space-y-4">
          <div className="text-sm font-semibold text-gray-900">Mars 2026</div>
          <div className="text-xs text-gray-500 mb-2">3 dépenses • 145,50 €</div>

          {mockDepenses.map((depense) => (
            <DepenseCard key={depense.id} depense={depense} />
          ))}
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

function DepenseCard({ depense }: { depense: typeof mockDepenses[0] }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="border-l-4 border-orange-500 p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{depense.title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                {depense.category}
              </span>
              <span className="text-sm text-gray-500">{depense.date}</span>
              <span className="text-xs text-gray-400">{depense.contractRef}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-semibold text-orange-600">{depense.amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
