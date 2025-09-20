import { useRef, useEffect, useState } from "react";

const useScrollFadeIn = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (typeof window === "undefined" || window.innerWidth < 1024) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Tailwind classes for fade-in
  const className =
    "transition-all duration-700 ease-out " +
    (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8");

  return { ref, className };
};

export default useScrollFadeIn;
