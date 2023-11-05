"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-5 right-5 z-10 cursor-pointer rounded-full bg-gray-300 p-3 text-black`}
    >
      <ArrowUp />
    </button>
  );
}
