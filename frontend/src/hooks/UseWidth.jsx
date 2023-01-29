import { useEffect, useState } from "react";

export const UseWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    let mounted = true;
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      if (mounted)
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => {
      mounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export const brakePoints = [
  { xxxl: 2650 },
  { xxl: 2250 },
  { xl: 1850 },
  { l: 1550 },
  { lm: 1450 },
  { ls: 1350 },
  { m: 1200 },
  { ms: 1080 },
  { sl: 770 },
  { sm: 576 },
];
