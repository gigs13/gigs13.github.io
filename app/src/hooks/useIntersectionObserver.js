import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options, externalRef) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const internalRef = useRef(null); // Referencia interna si no se proporciona una externa

  const ref = externalRef || internalRef; // Usa la referencia externa si está disponible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};
