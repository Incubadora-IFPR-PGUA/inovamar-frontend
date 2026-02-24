import type { IconType } from "react-icons";

import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";

type ContactLink = {
  icon: IconType;
  text: string;
  href?: string;
};

const links: ContactLink[] = [
  { icon: FaEnvelope, text: "incubadora.paranagua@ifpr.edu.br", href: "mailto:incubadora.paranagua@ifpr.edu.br" },
  { icon: FaPhone, text: "+55 (41) 8833-6497", href: "https://api.whatsapp.com/send/?phone=554188336497&text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20o%20Escritório%20de%20Projetos!" },
  { icon: FaLocationPin, text: "Av. Antônio Carlos Rodrigues, 453 - Porto Seguro, Paranaguá - PR, 83215-750", href: "https://maps.app.goo.gl/LKH7PaCVNt2iy9PU6" },
];

function ContactLink({ icon: Icon, text, href }: ContactLink) {
  return (
    <a href={href} target="_blank" className="text-sm flex gap-2 text-white">
      <Icon />
      <span>{text}</span>
    </a>
  );
}

function ContactLinks() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl font-bold">Contato</p>
      <div className="flex flex-col gap-4">
        {links.map(link => (
          <ContactLink key={link.text} icon={link.icon} text={link.text} href={link.href} />
        ))}
      </div>
    </div>
  );
}

export default ContactLinks;
