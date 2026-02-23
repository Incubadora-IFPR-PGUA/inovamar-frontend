import iceLogo from "../../assets/img/logos/ice.png";
import incubadoraLogo from "../../assets/img/logos/incubadora-ifpr-paranagua.png";
import marBrasilLogo from "../../assets/img/logos/marbrasil.png";

type Logo = {
  src: string;
  alt: string;
};

const logos: Logo[] = [
  { src: incubadoraLogo, alt: "Incubadora de Negócios de Impacto do IFPR Paranaguá" },
  { src: marBrasilLogo, alt: "MarBrasil" },
  { src: iceLogo, alt: "ICE - Instituto de Cidadania Empresarial" },
];

function CompanyImage({ src, alt }: Logo) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-12 w-auto object-contain md:h-16 lg:h-20"
    />
  );
}

function Companies() {
  return (
    <section className="bg-white py-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 md:py-12 lg:justify-evenly">
      {logos.map(logo => (
        <CompanyImage key={logo.src} src={logo.src} alt={logo.alt} />
      ))}
    </section>
  );
}

export default Companies;
