import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitch } from "./theme-switch";
import { FileKey } from "lucide-react";

function Header() {
  return (
    <div className="w-full p-3 flex h-16 justify-between">
      <div className="flex justify-between">
        <FileKey className="h-7 w-7 mt-1" />
        <h1 className="scroll-m-20 text-xl font-bold tracking-tight pl-4 pt-1">
          Gerenciador de Contratos
        </h1>
      </div>

      <div className="w-24 pr-2 align-right flex justify-between">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/l-rodovalho.png" />
        </Avatar>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Header;
