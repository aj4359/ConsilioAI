"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLayout = AdminLayout;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var useAuthStore_1 = require("../../store/useAuthStore");
var lucide_react_1 = require("lucide-react");
var sidebarItems = [
    { icon: lucide_react_1.LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: lucide_react_1.FileText, label: 'Posts', path: '/admin/posts' },
    { icon: lucide_react_1.Users, label: 'Users', path: '/admin/users' },
    { icon: lucide_react_1.Settings, label: 'Settings', path: '/admin/settings' },
];
function AdminLayout() {
    var user = (0, useAuthStore_1.useAuthStore)().user;
    if (!user || user.role !== 'admin') {
        return <react_router_dom_1.Navigate to="/login" replace/>;
    }
    return (<div className="flex h-screen bg-slate-50">
      <aside className="w-64 bg-white border-r border-slate-200">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Admin Panel</h2>
        </div>
        <nav className="p-4">
          {sidebarItems.map(function (item) { return (<a key={item.path} href={item.path} className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg">
              <item.icon className="h-5 w-5"/>
              <span>{item.label}</span>
            </a>); })}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <react_router_dom_1.Outlet />
        </div>
      </main>
    </div>);
}
