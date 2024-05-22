import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/RiyanNugraha",
      icon: <FaGithub />,
      variant: "text-slate-400",
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/riyan-nugraha-0b919b1b5/",
      icon: <FaLinkedin />,
      variant: "text-blue-400",
    },
    {
      id: 3,
      name: "Twitter",
      link: "https://twitter.com/RiyanNugraha",
      icon: <FaTwitter />,
      variant: "text-sky-400",
    },
    {
      id: 4,
      name: "Email",
      link: "mailto:qfUZ6@example.com",
      icon: <FaEnvelope />,
      variant: "text-red-400",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center gap-5">
        {socialMediaLinks.map((link) => (
          <div
            className="flex items-center justify-center w-full animate hover:w-[2000px] hover:bg-slate-500 cursor-pointer py-5 gap-2 group"
            key={link.id}
          >
            <span className={`group-hover:text-${link.variant}`}>
              {link.icon}
            </span>

            <span className="text-sm">{link.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
