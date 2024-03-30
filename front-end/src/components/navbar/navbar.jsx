import logo from "@/assets/Stranger.png";
import ThemeToggler from "../themeToggler/themeToggler";

const Navbar = () => {
  return (
    <header className="p-2 md:px-10 md:py-5 transition-all duration-300 flex justify-between items-center shadow-md shadow-secondary">
      <div>
        <img src={logo} alt="Application Logo" className="invert" width={70} />
      </div>
      <nav>
        <ThemeToggler />
      </nav>
    </header>
  );
};

export default Navbar;
