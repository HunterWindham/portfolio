import { useState, useEffect } from 'react';
import { useTheme } from '../context';
import { SunIcon, MoonIcon, TerminalIcon } from '../assets/icons';

interface NavItem {
  label: string
  href: string
};

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`
        fixed top-0 left-0 right-0 z-900 h-[72px]
        flex items-center justify-between
        px-md md:px-lg
        bg-bg/80 backdrop-blur-md
        transition-shadow duration-(--duration-normal)
        animate-in animate-slide-down delay-1
        ${isScrolled ? 'shadow-(--shadow-1)' : ''}
      `}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-body-large font-bold text-text-high hover:no-underline"
        >
          <TerminalIcon />
        </a>

        {/* Desktop Navigation */}
        <nav role="navigation" className="hidden md:flex items-center gap-[20px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-body font-semibold text-text-medium
                hover:text-text-high hover:no-underline
                transition-colors duration-(--duration-fast)
              "
            >
              {item.label}
            </a>
          ))}
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="
              w-xl h-xl rounded-md
              flex items-center justify-center
              bg-surface text-text-high
              hover:bg-muted hover:text-primary
              transition-colors duration-(--duration-fast)
              border-none cursor-pointer btn--outline
            "
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-sm">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="
              w-xl h-xl rounded-md
              flex items-center justify-center
              bg-surface text-text-high
              hover:bg-muted hover:text-primary
              transition-colors duration-(--duration-fast)
              border-none cursor-pointer btn--outline
            "
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          {/* Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              flex flex-col justify-center items-center
              w-[44px] h-[44px] gap-[5px]
              bg-transparent border-none cursor-pointer
            "
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
          <span
            className={`
              block w-[24px] h-[2px] bg-text-high
              transition-transform duration-(--duration-normal)
              ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}
            `}
          />
          <span
            className={`
              block w-[24px] h-[2px] bg-text-high
              transition-opacity duration-(--duration-normal)
              ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
            `}
          />
          <span
            className={`
              block w-[24px] h-[2px] bg-text-high
              transition-transform duration-(--duration-normal)
              ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}
            `}
          />
        </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed top-[72px] left-0 right-0
          bg-bg shadow-(--shadow-2)
          transition-all duration-(--duration-slow)
          ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        `}
      >
        <nav className="container py-lg flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                text-body font-semibold text-text-medium
                hover:text-text-high hover:no-underline
                py-md
                border-b border-muted last:border-b-0
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

