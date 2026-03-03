import iceLogo from "../assets/img/logos/ice_white.png";

function Nav() {
  return (
    <nav className="sticky bg-brand-500 text-white px-6 py-6 top-0 left-0">
      <div className="flex items-center gap-3 md:justify-center">
        <img src={iceLogo} alt="Inovamar Incubadora Logo" className="w-13" />
        <h1 className="text-2xl font-bold md:text-3xl">Inovamar</h1>
      </div>
    </nav>
  );
}

export default Nav;
