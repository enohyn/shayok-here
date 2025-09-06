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
    if (!containerRef.current) return;

    const radiusValue = () => (window.innerWidth <= 425 ? 150 : 200);

    // Dynamic import so build doesn’t try to SSR it
    (async () => {
      const TagCloud = (await import("TagCloud")).default;
      const options = {
        radius: radiusValue(),
        maxSpeed: "normal" as const,
        initSpeed: "normal" as const,
        keep: true
      };
      instance = TagCloud(containerRef.current as HTMLElement, texts, options);

      const onResize = () => {
        if (instance) {
          instance.destroy();
          instance = TagCloud(containerRef.current as HTMLElement, texts, {
            ...options,
            radius: radiusValue()
          });
        }
      };
      window.addEventListener("resize", onResize);
      // cleanup
      return () => {
        window.removeEventListener("resize", onResize);
        instance && instance.destroy();
      };
    })();
  }, []);

  return (
    <div className="text-shpere">
      <span
        ref={containerRef}
        className="tagcloud text-base lg:text-3xl  font-semibold"
      />
    </div>
  );
};

export default TextSphere;