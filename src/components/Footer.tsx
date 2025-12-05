import { SocialLinks } from './SocialLinks'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-surface h-[72px] flex items-center animate-in animate-fade-in delay-6"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Copyright */}
          <p className="text-sm text-text-medium">
            © {currentYear} Hunter Windham
          </p>

          {/* Social Icons */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
