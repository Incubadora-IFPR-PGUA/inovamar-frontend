import type { IconType } from "react-icons";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

type SocialLink = {
  icon: IconType;
  href: string;
};

const socialLinks: SocialLink[] = [
  { icon: FaFacebook, href: "https://www.facebook.com/share/168hEW2xJV/" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/incubadora-ifpr-campus-paranagu%C3%A1/" },
  { icon: FaInstagram, href: "https://www.instagram.com/incubadora.ifpr/" },
];

function SocialIconLink({ icon: Icon, href }: SocialLink) {
  return (
    <a href={href} target="_blank" className="text-white text-2xl bg-brand-700 rounded-full p-2">
      <Icon />
    </a>
  );
}

function SocialIconLinks() {
  return (
    <div className="flex gap-4 h-fit">
      {socialLinks.map(link => (
        <SocialIconLink key={link.href} icon={link.icon} href={link.href} />
      ))}
    </div>
  );
}

export default SocialIconLinks;
