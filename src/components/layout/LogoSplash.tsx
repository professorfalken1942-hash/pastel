"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoSplash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Show splash for 1.5 seconds, then fade out
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--cream)",
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
        transition: "opacity 0.8s ease-out, visibility 0.8s ease-out",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Image
          src="/pastel-logo.jpg"
          alt="Pastel"
          width={200}
          height={200}
          priority
          style={{
            height: "200px",
            width: "auto",
            objectFit: "contain",
            animation: show ? "fadeIn 0.6s ease-out" : "none",
          }}
        />
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
