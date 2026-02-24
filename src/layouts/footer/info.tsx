import inovamarLogo from "../../assets/img/logos/inovamar-logo.png";
import ContactLinks from "./contact-links";
import SocialIconLinks from "./social-icon-links";

function Info() {
  return (
    <section className="bg-brand-500 text-white px-6 pt-10 flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <img src={inovamarLogo} alt="Logo do Inovamar" className="h-30 w-auto object-contain" />
        <SocialIconLinks />
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex flex-col gap-2 md:w-1/2">
          <p className="text-xl font-bold">Inovamar</p>
          <p className="text-sm">Escritório de Projetos em Tecnologia Inovação e Sustentabilidade. Vinculado aos espaços de Inovação do IFPR Paranaguá, conecta ideias a oportunidades, captando recursos por meio de editais e incentivos públicos/privados, apoiando iniciativas sustentáveis alinhadas às demandas da região do Litoral do Paraná.</p>
        </div>
        <ContactLinks />
      </div>
      <div className="text-center text-xs py-5 border-t-2 border-white">
        ©
        {new Date().getFullYear()}
        {" "}
        InovaMar - Escritório de Projetos. Todos os direitos reservados.
      </div>
    </section>
  );
}

export default Info;
