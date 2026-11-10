import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Staggered animation delay in ms
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade-in' | 'fade';
  duration?: number; // Animation duration in ms
  threshold?: number; // IntersectionObserver threshold
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  duration = 750,
  threshold = 0.15
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Safety fallback timer so content is NEVER stuck invisible
    const fallbackTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 300);

    // Fallback if IntersectionObserver is not supported in environment
    if (typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      clearTimeout(fallbackTimer);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsRevealed(true);
          clearTimeout(fallbackTimer);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '120px 0px 120px 0px'
      }
    );

    observer.observe(node);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  const animationClass = animation === 'fade' ? 'scroll-reveal-fade' : `scroll-reveal-${animation}`;

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
      className={`scroll-reveal ${animationClass} ${isRevealed ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};


