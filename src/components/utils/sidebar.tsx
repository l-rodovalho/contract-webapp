import { FileText, Home, Settings, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function Sidebar() {
  const navigate = useNavigate();

  const items = [
    {
      name: "Dashboard",
      path: "/",
      icon: Home,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: UserRound,
    },
    {
      name: "Contracts",
      path: "/contracts",
      icon: FileText,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="w-40 pt-5 flex flex-col space-y-4 items-center bg-secondary">
      {items.map((item) => (
        <Button
          variant={"ghost"}
          className="w-32 justify-start"
          key={item.name}
          onClick={() => navigate(item.path)}
        >
          <item.icon />
          <span>{item.name}</span>
        </Button>
      ))}
    </div>
  );
}

export default Sidebar;
