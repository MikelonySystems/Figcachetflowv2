import { Plus, FileText, Clock, Euro, Calendar } from "lucide-react";

const mockContrats = [
  {
    id: 1,
    title: "Corporate Palais Brongniart",
    company: "Live Matters",
    date: "10 avr. 2026",
    cachets: 1,
    heures: "8h",
    dates: 1,
    totalBrut: "280,00 €",
    status: "Régisseur platines",
  },
  {
    id: 2,
    title: "Festival Nuit Sonore",
    company: "Pulse Production",
    date: "03 avr. 2026",
    cachets: 1,
    heures: "10h",
    dates: 1,
    totalBrut: "320,00 €",
    status: "Technicien son",
  },
];

export function Contrats() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Mes Contrats</h1>
            <p className="text-sm text-gray-500 mt-1">2 contrats • 18h • 600,00 €</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Plus className="w-4 h-4" />
            Ajouter un contrat
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={FileText}
            label="Contrats"
            value="2"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
          <StatCard
            icon={Clock}
            label="Heures"
            value="18h"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
          <StatCard
            icon={Euro}
            label="Revenus bruts"
            value="600,00 €"
            bgColor="bg-pink-50"
            textColor="text-pink-600"
          />
          <StatCard
            icon={Calendar}
            label="Dates"
            value="2"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <FilterGroup label="Période">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>01 janv. - 30 avr. 2026</option>
              </select>
            </FilterGroup>
            <FilterGroup label="Employeur">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>Tous</option>
              </select>
            </FilterGroup>
            <FilterGroup label="Complétude">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>Toutes</option>
              </select>
            </FilterGroup>
            <FilterGroup label="Tri par date">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>Plus récent</option>
              </select>
            </FilterGroup>
          </div>
        </div>

        {/* Contracts List */}
        <div className="space-y-6">
          <div className="text-sm font-semibold text-gray-900">Avril 2026</div>
          <div className="text-xs text-gray-500 mb-2">2 contrats • 2 cachets • 18h • 600,00 €</div>

          <div className="space-y-4">
            {mockContrats.map((contrat) => (
              <ContractCard key={contrat.id} contrat={contrat} />
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

function ContractCard({ contrat }: { contrat: typeof mockContrats[0] }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="border-l-4 border-purple-500 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{contrat.title}</h3>
            <p className="text-sm text-gray-600">{contrat.company}</p>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-3 h-3 text-gray-400" />
              <span className="text-sm text-gray-500">{contrat.date}</span>
            </div>
            <div className="mt-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded inline-block">
              {contrat.status}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Total brut</div>
            <div className="text-2xl font-semibold text-purple-600">{contrat.totalBrut}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div>
            <div className="text-xs text-gray-500">Cachets</div>
            <div className="text-lg font-semibold text-gray-900">{contrat.cachets}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Heures</div>
            <div className="text-lg font-semibold text-gray-900">{contrat.heures}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Dates</div>
            <div className="text-lg font-semibold text-gray-900">{contrat.dates}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
