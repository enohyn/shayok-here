"use client";
import React, { useEffect, useRef } from "react";
import "@/app/text-sphere.css";

const texts = [
  "HTML5","CSS3","SASS","JavaScript","React","Tailwind","NextJS","Framer Motion",
  "NodeJS","jQuery","Typescript","GIT", "Wordpress", "Strapi"
];

const TextSphere = () => {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    let instance: { destroy: () => void } | null = null;
    const radiusValue = () => (window.innerWidth <= 425 ? 150 : 200);
    const setupTagCloud = async () => {
      const TagCloud = (await import("TagCloud")).default;
      const options = {
        radius: radiusValue(),
        maxSpeed: "normal" as const,
        initSpeed: "normal" as const,
        keep: true
      };
      if (containerRef.current) {
        instance = TagCloud(containerRef.current, texts, options);
      }
      const onResize = () => {
        if (instance) instance.destroy();
        if (containerRef.current) {
          instance = TagCloud(containerRef.current, texts, {
            ...options,
            radius: radiusValue()
          });
        }
      };
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        if (instance) instance.destroy();
      };
    };
    let cleanup: (() => void) | undefined;
    setupTagCloud().then(fn => { cleanup = fn; });
    return () => { if (cleanup) cleanup(); };
  }, []);
  return (
    <div className="text-shpere">
      <span
        ref={containerRef}
        className="tagcloud text-base lg:text-3xl font-semibold"
      />
    </div>
  );
};

export default TextSphere;