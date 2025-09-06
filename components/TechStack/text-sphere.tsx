"use client";
import TagCloud from "TagCloud";
import React, { useEffect } from "react";
import '@/app/text-sphere.css'
const TextSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";

    const texts = [
      "HTML5","CSS3","SASS","JavaScript","React","Tailwind","Storybook",
      "NodeJS","Wordpress","jQuery","ES6","GIT","Bootstrap"
    ];

    const radiusValue = () => (window.innerWidth <= 425 ? 150 : 240);

    const options = {
      radius: radiusValue(),
      maxSpeed: "normal" as const,
      initSpeed: "normal" as const,
      keep: true
    };

    const instance = TagCloud(container, texts, options);

    const onResize = () => {
      instance.destroy();
      TagCloud(container, texts, { ...options, radius: radiusValue() });
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      instance.destroy();
    };
  }, []);

  return (
    <div className="text-shpere">
      <span className="tagcloud text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold" />
    </div>
  );
};

export default TextSphere;
// ...existing code...