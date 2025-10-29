import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-white/20 backdrop-blur-sm bg-white/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-(--color-primary)">
            meetus<span className="text-black">VR</span>
          </h1>
        </div>
        <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-white/80 hover:bg-white border-none">
          <LogOut /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
