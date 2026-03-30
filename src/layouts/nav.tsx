import { Link } from "react-router-dom";

import iceLogo from "../assets/img/logos/ice_white.png";

function Nav() {
  return (
    <nav className="sticky bg-brand-500 text-white px-6 top-0 left-0 z-20 h-24 md:h-24">
      <Link to="/" state={{ scrollTrigger: Date.now() }} className="flex h-full items-center gap-3 md:justify-center cursor-pointer">
        <img src={iceLogo} alt="Inovamar Incubadora Logo" className="w-13" />
        <h1 className="text-2xl font-bold md:text-3xl">Inovamar</h1>
      </Link>
    </nav>
  );
}

export default Nav;
