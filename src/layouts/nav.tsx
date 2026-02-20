import iceLogo from "../assets/img/logo_ice_white.png";

function Nav() {
  return (
    <nav className="bg-brand-500 text-white px-6 py-6">
      <div className="flex items-center gap-3 md:justify-center">
        <img src={iceLogo} alt="Inovamar Incubadora Logo" className="w-13" />
        <h1 className="text-2xl font-bold md:text-3xl">Inovamar</h1>
      </div>
    </nav>
  );
}

export default Nav;
