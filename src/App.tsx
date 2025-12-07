import { useEffect, useRef } from 'react';
import { Header,
  HeroSection,
  Footer,
  About,
  Contact
} from './components';
import { ThemeProvider } from './context';

function App() {
  // Track if we're in the initial scroll phase (to prevent hash updates during scroll-to-hash)
  const isInitialScroll = useRef(!!window.location.hash);

  // Scroll to hash section on page load/refresh
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      isInitialScroll.current = false;
      return;
    }

    const timeoutIds: number[] = [];

    timeoutIds.push(
      window.setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Allow hash updates after scroll completes (smooth scroll takes ~500-1000ms)
        timeoutIds.push(
          window.setTimeout(() => {
            isInitialScroll.current = false;
          }, 1000)
        );
      }, 100)
    );

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  // Update URL hash as user scrolls through sections
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isInitialScroll.current) return;

        // Find the first intersecting section
        const intersecting = entries.find((entry) => entry.isIntersecting);
        if (intersecting) {
          const id = intersecting.target.getAttribute('id');
          if (id) {
            history.replaceState(null, '', `#${id}`);
          }
        }
      },
      {
        // Trigger when section crosses the top portion of viewport
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <Header />
      
      <main>
        <HeroSection />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </ThemeProvider>
  );
}

export default App;
