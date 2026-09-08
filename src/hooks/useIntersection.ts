import { useEffect, useRef, useState } from 'react';

/**
 * Deep module: scroll-triggered visibility with reduced-motion support.
 * Interface: pass threshold (optional), get { ref, visible }.
 * Pre-triggers with rootMargin so content is ready before entering viewport.
 */
export function useIntersection(threshold = 0.05, rootMargin = '200px 0px') {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setVisible(true);
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Fallback: If element is within initial view or user scrolls, trigger immediately
    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
        setVisible(true);
        return true;
      }
      return false;
    };

    if (checkVisibility()) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
