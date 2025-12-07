import { useEffect, useRef } from 'react'

/**
 * Hook that adds 'is-visible' class to elements with 'scroll-reveal' class
 * when they scroll into view. Uses IntersectionObserver for performance.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Find all elements that should animate on scroll
    const elements = container.querySelectorAll('.scroll-reveal')
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Stop observing once animated (one-time animation)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        // Trigger when 15% of element is visible
        threshold: 0.15,
        // Trigger after element is 50px inside the viewport (prevents edge-of-screen triggers)
        rootMargin: '0px 0px -50px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return containerRef
}

