import { useState, useEffect } from 'react';
import { useTheme } from '../context';
import { SunIcon, MoonIcon } from '../assets/icons';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }
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
        bg-bg transition-shadow duration-(--duration-normal)
        ${isScrolled ? 'shadow-(--shadow-1)' : ''}
      `}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[20px] font-bold text-text-high hover:no-underline"
        >
          Hunter Windham
        </a>

        {/* Desktop Navigation */}
        <nav role="navigation" className="hidden md:flex items-center gap-[20px]">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="
              w-xl h-xl rounded-md
              flex items-center justify-center
              bg-surface text-text-high
              hover:bg-muted hover:text-primary
              transition-colors duration-(--duration-fast)
              border-none cursor-pointer btn--ghost
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
              border-none cursor-pointer btn--ghost
            "
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

