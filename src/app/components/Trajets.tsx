import { Plus, Navigation, Euro, Gauge, MapPin } from "lucide-react";

const mockTrajets = [
  {
    id: 1,
    from: "12 rue des Lombards",
    to: "16 Place de la Liberté",
    distance: "450 km",
    cost: "247,50 €",
    date: "14 mars 2026",
    contractRef: "Contrat #23",
  },
  {
    id: 2,
    from: "12 rue des Lombards",
    to: "48 Bd des Artistes",
    distance: "230 km",
    cost: "126,50 €",
    date: "08 mars 2026",
    contractRef: "Contrat #19",
  },
  {
    id: 3,
    from: "12 rue des Lombards",
    to: "7 Boulevard des Lumières",
    distance: "180 km",
    cost: "99,00 €",
    date: "02 mars 2026",
    contractRef: "Contrat #18",
  },
  {
    id: 4,
    from: "12 rue des Lombards",
    to: "7 Boulevard des Lumières",
    distance: "180 km",
    cost: "99,00 €",
    date: "25 févr. 2026",
    contractRef: "Contrat #17",
  },
];

export function Trajets() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Mes Trajets</h1>
            <p className="text-sm text-gray-500 mt-1">Février - Mars 2026</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
            <Plus className="w-4 h-4" />
            Ajouter un trajet
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={Navigation}
            label="Trajets"
            value="4"
            bgColor="bg-cyan-50"
            textColor="text-cyan-600"
          />
          <StatCard
            icon={Gauge}
            label="Distance"
            value="1040 km"
            bgColor="bg-cyan-50"
            textColor="text-cyan-600"
          />
          <StatCard
            icon={Euro}
            label="Coût total"
            value="572,00 €"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
          <StatCard
            icon={Euro}
            label="Coût moyen"
            value="143,00 €"
            bgColor="bg-cyan-50"
            textColor="text-cyan-600"
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <FilterGroup label="Mois">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>01 janv. - 31 mars 2026</option>
              </select>
            </FilterGroup>
            <FilterGroup label="Tri par date">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>Plus récent</option>
              </select>
            </FilterGroup>
            <button className="px-3 py-1.5 text-cyan-600 hover:bg-cyan-50 rounded-lg text-sm flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Générer
            </button>
            <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
              Carte
            </button>
            <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
              Liste
            </button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6 overflow-hidden">
          <div className="relative h-64 bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Carte interactive des trajets</p>
                <p className="text-xs text-gray-400 mt-1">Visualisez vos déplacements sur la carte</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trajets List */}
        <div className="space-y-3">
          <div className="text-sm font-semibold text-gray-900 mb-4">Trajets récents</div>

          {mockTrajets.map((trajet) => (
            <TrajetCard key={trajet.id} trajet={trajet} />
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

function TrajetCard({ trajet }: { trajet: typeof mockTrajets[0] }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="border-l-4 border-cyan-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-4">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">{trajet.from}</div>
                <div className="text-xs text-gray-500 mt-0.5">{trajet.date}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gray-300"></div>
              <Navigation className="w-4 h-4 text-cyan-600" />
              <div className="h-px w-8 bg-gray-300"></div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{trajet.to}</div>
              <div className="text-xs text-gray-500 mt-0.5">{trajet.contractRef}</div>
            </div>
          </div>

          <div className="flex items-center gap-6 ml-6">
            <div className="text-right">
              <div className="text-xs text-gray-500">Distance</div>
              <div className="text-sm font-semibold text-gray-900">{trajet.distance}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Coût</div>
              <div className="text-sm font-semibold text-cyan-600">{trajet.cost}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
