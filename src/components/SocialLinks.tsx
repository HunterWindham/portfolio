import { LinkedInIcon, GitHubIcon, MailIcon, ResumeIcon } from '../assets/icons';
import resumePdf from '../assets/Hunter-Windham-Resume.pdf';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hunterwindham/',
    icon: <LinkedInIcon />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/hunterwindham',
    icon: <GitHubIcon />,
  },
  {
    label: 'Email',
    href: 'mailto:hunter.a.windham@gmail.com',
    icon: <MailIcon />,
  },
  {
    label: 'Resume',
    href: resumePdf,
    icon: <ResumeIcon />,
    download: 'Hunter-Windham-Resume.pdf',
  },
];

interface SocialLinksProps {
  /** Show text labels next to icons */
  showLabels?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
}

export function SocialLinks({ showLabels = false, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-lg ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="
            group relative
            text-text-medium
            hover:text-primary
            transition-colors duration-(--duration-fast)
            flex items-center gap-2
          "
          target="_blank"
          rel="noopener noreferrer"
          {...(link.download && { download: link.download })}
        >
          {link.icon}
          {showLabels && (
            <span className="text-xs font-medium">{link.label}</span>
          )}
          {!showLabels && (
            <span
              className="
                absolute left-1/2 -translate-x-1/2 -top-6
                px-2 py-1 rounded
                bg-(--color-text) text-(--color-background)
                text-xs font-medium whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition-opacity duration-(--duration-fast)
                pointer-events-none
              "
            >
              {link.label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

