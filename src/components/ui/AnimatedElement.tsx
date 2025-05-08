import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add('visible');
        }
      }, delay);
    }
  }, [inView, delay]);

  return (
    <div
      ref={(node) => {
        // This assigns both refs to the same DOM node
        ref(node);
        // @ts-ignore - This is fine for our use case
        elementRef.current = node;
      }}
      className={`animate-fade-in ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;