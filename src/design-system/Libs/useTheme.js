import { useEffect, useRef, useState } from "react";
const useTheme = () => {
  const observerRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const domTheme = document.documentElement.getAttribute("data-bs-theme");
    return domTheme || storedTheme || "light";
  });
  useEffect(() => {
    const handleMutations = mutationsList => {
      mutationsList.forEach(mutation => {
        if (mutation.attributeName === "data-bs-theme") {
          const themeValue = document.documentElement.getAttribute("data-bs-theme");
          if (themeValue) {
            setTheme(themeValue);
            localStorage.setItem("theme", themeValue); // Sync to localStorage
          }
        }
      });
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document.documentElement, {
      attributes: true
    });
    observerRef.current = observer;

    // Initial sync if the theme is set via DOM
    const initialTheme = document.documentElement.getAttribute("data-bs-theme");
    if (initialTheme) {
      setTheme(initialTheme);
      localStorage.setItem("theme", initialTheme);
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return theme;
};
export default useTheme;