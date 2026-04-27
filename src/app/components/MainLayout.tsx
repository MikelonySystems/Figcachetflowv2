import { Outlet, NavLink } from "react-router";
import { LayoutDashboard, FileText, Receipt, Car, FileCheck, TrendingUp, PieChart, Settings, HelpCircle, LogOut } from "lucide-react";

export function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo / User Profile */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white font-semibold">
              C
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Camille</div>
              <div className="text-xs text-gray-500">Intermittent</div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <NavItem to="/app" icon={LayoutDashboard} end>Dashboard</NavItem>
          <NavItem to="/app/contrats" icon={FileText}>Contrat</NavItem>
          <NavItem to="/app/depenses" icon={Receipt}>Dépenses</NavItem>
          <NavItem to="/app/trajets" icon={Car}>Trajets</NavItem>
          <NavItem to="/app/aem" icon={FileCheck}>AEM</NavItem>
          <NavItem to="/app/revenus" icon={TrendingUp}>Revenus</NavItem>
          <NavItem to="/app/bilan" icon={PieChart}>Bilan Annuel</NavItem>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-200 space-y-1">
          <NavItem to="/app/preferences" icon={Settings}>Préférences</NavItem>
          <NavItem to="/app/aide" icon={HelpCircle}>Aide</NavItem>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

function NavItem({ to, icon: Icon, children, end }: { to: string; icon: any; children: React.ReactNode; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      <Icon className="w-4 h-4" />
      {children}
    </NavLink>
  );
}
