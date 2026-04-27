import { Plus, FileText, Clock, Euro, TrendingUp, Download, Building } from "lucide-react";

const mockAEM = [
  {
    id: 1,
    month: "Mars 2026",
    attestations: 1,
    heures: "18h",
    company: "Scène Horizon",
    annexe: "Annexe 8",
    period: "Mars 2026\nDu 15 févr. au 18 mars 2026",
    joursTravailes: "2 jours",
    heuresPeriod: "18h",
    salaireBrut: "760,00 €",
    tauxHoraire: "42,22 €/h",
  },
  {
    id: 2,
    month: "Février 2026",
    attestations: 1,
    heures: "24h",
    company: "Pulse Production",
    annexe: "Annexe 8",
    period: "Février 2026\nDu 27 févr. au 24 févr. 2026",
    joursTravailes: "3 jours",
    heuresPeriod: "24h",
    salaireBrut: "980,00 €",
    tauxHoraire: "40,83 €/h",
  },
];

export function AEM() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Mes AEM</h1>
            <p className="text-sm text-gray-500 mt-1">2 attestations • 42 heures</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="w-4 h-4" />
            Ajouter une attestation
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={FileText}
            label="Attestations"
            value="2"
            bgColor="bg-green-50"
            textColor="text-green-600"
          />
          <StatCard
            icon={Clock}
            label="Total heures"
            value="42h"
            bgColor="bg-emerald-50"
            textColor="text-emerald-600"
          />
          <StatCard
            icon={Euro}
            label="Total salaire"
            value="1740,00 €"
            bgColor="bg-green-50"
            textColor="text-green-600"
          />
          <StatCard
            icon={TrendingUp}
            label="Moyenne / mois"
            value="870,00 €"
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
            <FilterGroup label="Employeur">
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                <option>Tous</option>
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

        {/* View Toggle */}
        <div className="flex items-center gap-4 mb-4">
          <button className="text-sm text-green-600 font-medium">Timeline</button>
          <button className="text-sm text-gray-500">Graphiques</button>
          <button className="text-sm text-gray-500">Tableau</button>
        </div>

        {/* AEM List */}
        <div className="space-y-6">
          <div className="text-sm font-semibold text-gray-900">Mars 2026</div>
          <div className="text-xs text-gray-500 mb-2">1 attestation • 18h • 760,00 €</div>

          <div className="space-y-4">
            {mockAEM.map((aem) => (
              <AEMCard key={aem.id} aem={aem} />
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

function AEMCard({ aem }: { aem: typeof mockAEM[0] }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="border-l-4 border-green-500 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Building className="w-4 h-4 text-gray-400" />
              <h3 className="font-semibold text-gray-900">{aem.company}</h3>
              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded">
                {aem.annexe}
              </span>
            </div>
            <div className="text-sm text-gray-600 whitespace-pre-line">{aem.period}</div>
            <div className="text-xs text-gray-400 mt-2">Taux horaire : {aem.tauxHoraire}</div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            Télécharger le PDF
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div>
            <div className="text-xs text-gray-500">Jours travaillés</div>
            <div className="text-lg font-semibold text-gray-900">{aem.joursTravailes}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Heures</div>
            <div className="text-lg font-semibold text-gray-900">{aem.heuresPeriod}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Salaire brut</div>
            <div className="text-lg font-semibold text-green-600">{aem.salaireBrut}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
