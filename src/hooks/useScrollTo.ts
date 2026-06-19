export const useScrollTo = (onComplete?: () => void) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onComplete?.();
  };
  return scrollTo;
};