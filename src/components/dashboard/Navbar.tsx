
import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  return (
    <nav className="border-b border-white/20 backdrop-blur-sm bg-white/30">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-(--color-primary)">
            meetus<span className="text-black">VR</span>
          </h1>
        </div>
        <LogoutBtn />
      </div>
    </nav>
  );
};

export default Navbar;
