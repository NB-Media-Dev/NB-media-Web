import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BrandLogo from "./common/BrandLogo";
import { COMPANY_INFO } from "../data/companyData";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key="splash-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#090A0F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(217,119,6,0.1) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <BrandLogo
            style={{
              height: "85px",
              maxHeight: "110px",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 20px rgba(245, 158, 11, 0.4))",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            marginTop: "1.5rem",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            background: "linear-gradient(135deg, #FFA600 0%, #F59E0B 50%, #FFD700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            whiteSpace: "nowrap",
          }}
        >
          {COMPANY_INFO.tagline}
        </motion.p>

        <div
          style={{
            width: "220px",
            height: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            borderRadius: "999px",
            marginTop: "2rem",
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(245, 158, 11, 0.2)",
            boxShadow: "0 0 10px rgba(245, 158, 11, 0.1)",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: `${progress}%`,
              background: "linear-gradient(90deg, #F59E0B, #FFA600, #FFE066)",
              borderRadius: "999px",
              boxShadow: "0 0 12px rgba(245, 158, 11, 0.8)",
              transition: "width 0.03s linear",
            }}
          />
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "40%",
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
            }}
          />
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: "0.6rem",
            fontSize: "0.75rem",
            color: "rgba(255, 255, 255, 0.5)",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          {progress}%
        </motion.span>
      </motion.div>
    </motion.div>
  );
}