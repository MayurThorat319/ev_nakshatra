import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

const useDimention = (): DeviceType => {
  const [device, setDevice] = useState<DeviceType>(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) return "mobile";
      if (window.innerWidth <= 1024) return "tablet";
      return "desktop";
    }
    return "desktop";
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setDevice("mobile");
      else if (window.innerWidth <= 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useDimention;
