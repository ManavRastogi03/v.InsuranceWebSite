import { LayoutGrid, FileText, Briefcase, HelpCircle, User } from "lucide-react";
import MenuItem from "./MenuItem"; // Import MenuItem

const Leftsidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutGrid size={20} />, path: "/dashboard" },
    { name: "Your policies", icon: <FileText size={20} />, path: "/policies" },
    { name: "Claims", icon: <Briefcase size={20} />, path: "/claims" },
    { name: "Get help", icon: <HelpCircle size={20} />, path: "/help" },
    { name: "Profile", icon: <User size={20} />, path: "/profile" },
  ];

  return (
    <aside className="h-screen w-64 bg-white p-5 shadow-lg rounded-xl">
      <nav className="space-y-6">
        {/* Use MenuItem for each menu */}
        {menuItems.map((item) => (
          <MenuItem key={item.name} name={item.name} icon={item.icon} path={item.path} />
        ))}
      </nav>
    </aside>
  );
};

export default Leftsidebar;
