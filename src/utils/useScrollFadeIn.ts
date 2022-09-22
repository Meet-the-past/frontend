import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn: any = (duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = () => {
    return "translate3d(0, -50%, 0)";
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        (current as any).style.transitionProperty = "all";
        (current as any).style.transitionDuration = `${duration}s`;
        (current as any).style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.2, 1)";
        (current as any).style.transitionDelay = `${delay}s`;
        (current as any).style.opacity = 1;
        (current as any).style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: any;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection() },
  };
};

export default useScrollFadeIn;
