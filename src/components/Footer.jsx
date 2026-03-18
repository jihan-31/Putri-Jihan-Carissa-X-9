// src/components/Footer.jsx

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/username",
    icon: <FaGithub size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/username",
    icon: <FaLinkedin size={16} />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@username",
    icon: <FaYoutube size={16} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/username",
    icon: <FaInstagram size={16} />,
  },
];

export default function Footer() {
  return (
    <footer
      className="
      w-full border-t border-amber-100 dark:border-amber-900/30
      bg-white dark:bg-stone-950
      py-5 px-8
    "
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Kiri */}
        <p className="text-sm text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
          © 2026 Made with
          <FaHeart size={13} className="text-amber-500 inline" />
          by Jihan
        </p>

        {/* Kanan */}
        <div className="flex items-center gap-5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="
                text-amber-500/70 dark:text-amber-400/70
                hover:text-amber-700 dark:hover:text-amber-300
                transition-colors duration-200
              "
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}