import React, { useState, useEffect } from 'react';

const TrainerProfile = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="scene-container">
      <style jsx>{`
        .scene-container {
          perspective: 1200px;
          perspective-origin: center center;
          width: 100%;
          max-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(220, 20, 60, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(0, 255, 255, 0.02) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
          position: relative;
          animation: backgroundShift 15s ease-in-out infinite;
        }

        @keyframes backgroundShift {
          0%, 100% { 
            background: 
              radial-gradient(ellipse at 20% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(220, 20, 60, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(0, 255, 255, 0.02) 0%, transparent 50%),
              linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
          }
          33% { 
            background: 
              radial-gradient(ellipse at 80% 30%, rgba(255, 215, 0, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 70%, rgba(220, 20, 60, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 20%, rgba(0, 255, 255, 0.03) 0%, transparent 50%),
              linear-gradient(135deg, #16213e 0%, #0a0a0f 50%, #1a1a2e 100%);
          }
          66% { 
            background: 
              radial-gradient(ellipse at 50% 80%, rgba(255, 215, 0, 0.02) 0%, transparent 50%),
              radial-gradient(ellipse at 30% 20%, rgba(220, 20, 60, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, rgba(0, 255, 255, 0.03) 0%, transparent 50%),
              linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0a0a0f 100%);
          }
        }

        .trainer-container {
          position: relative;
          width: 100%;
          max-width: 1536px;
          margin: 0 auto;
          min-height: 700px;
          background: 
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(17, 17, 17, 0.95) 25%,
              rgba(34, 34, 34, 0.9) 50%,
              rgba(17, 17, 17, 0.95) 75%,
              rgba(0, 0, 0, 0.9) 100%
            );
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 50px 100px rgba(0, 0, 0, 0.5),
            0 25px 50px rgba(255, 215, 0, 0.1),
            0 10px 30px rgba(220, 20, 60, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(255, 215, 0, 0.1);
          border: 1px solid transparent;
          background-clip: padding-box;
          transform-style: preserve-3d;
          transform: rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: containerEntrance 2s ease-out, containerFloat 6s ease-in-out infinite 2s;
        }

        @keyframes containerEntrance {
          0% {
            opacity: 0;
            transform: rotateX(45deg) rotateY(45deg) translateZ(-100px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) rotateY(0deg) translateZ(20px) scale(1);
          }
        }

        @keyframes containerFloat {
          0%, 100% { 
            transform: rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(20px) translateY(0px);
          }
          50% { 
            transform: rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(25px) translateY(-5px);
          }
        }

        .trainer-container:hover {
          transform: rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(50px);
          box-shadow: 
            0 70px 140px rgba(0, 0, 0, 0.6),
            0 35px 70px rgba(255, 215, 0, 0.2),
            0 15px 40px rgba(220, 20, 60, 0.15);
        }

        .floating-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.8;
        }

        .particle:nth-child(1) { 
          width: 3px; height: 3px; 
          background: radial-gradient(circle, #ffd700 0%, transparent 70%);
          left: 10%; 
          animation: float 6s infinite linear, sparkle 2s infinite ease-in-out;
          animation-delay: 0s; 
        }
        .particle:nth-child(2) { 
          width: 2px; height: 2px; 
          background: radial-gradient(circle, #dc143c 0%, transparent 70%);
          left: 20%; 
          animation: float 8s infinite linear, sparkle 3s infinite ease-in-out;
          animation-delay: 1s; 
        }
        .particle:nth-child(3) { 
          width: 4px; height: 4px; 
          background: radial-gradient(circle, #00ffff 0%, transparent 70%);
          left: 30%; 
          animation: float 5s infinite linear, sparkle 2.5s infinite ease-in-out;
          animation-delay: 2s; 
        }
        .particle:nth-child(4) { 
          width: 2px; height: 2px; 
          background: radial-gradient(circle, #ffd700 0%, transparent 70%);
          left: 40%; 
          animation: float 7s infinite linear, sparkle 1.8s infinite ease-in-out;
          animation-delay: 0.5s; 
        }
        .particle:nth-child(5) { 
          width: 3px; height: 3px; 
          background: radial-gradient(circle, #ff69b4 0%, transparent 70%);
          left: 50%; 
          animation: float 9s infinite linear, sparkle 2.2s infinite ease-in-out;
          animation-delay: 1.5s; 
        }
        .particle:nth-child(6) { 
          width: 2px; height: 2px; 
          background: radial-gradient(circle, #dc143c 0%, transparent 70%);
          left: 60%; 
          animation: float 6.5s infinite linear, sparkle 3.5s infinite ease-in-out;
          animation-delay: 3s; 
        }
        .particle:nth-child(7) { 
          width: 4px; height: 4px; 
          background: radial-gradient(circle, #ffd700 0%, transparent 70%);
          left: 70%; 
          animation: float 8.5s infinite linear, sparkle 2.8s infinite ease-in-out;
          animation-delay: 2.5s; 
        }
        .particle:nth-child(8) { 
          width: 2px; height: 2px; 
          background: radial-gradient(circle, #00ffff 0%, transparent 70%);
          left: 80%; 
          animation: float 7.5s infinite linear, sparkle 2.1s infinite ease-in-out;
          animation-delay: 3.5s; 
        }
        .particle:nth-child(9) { 
          width: 3px; height: 3px; 
          background: radial-gradient(circle, #ffd700 0%, transparent 70%);
          left: 90%; 
          animation: float 5.5s infinite linear, sparkle 1.9s infinite ease-in-out;
          animation-delay: 0.8s; 
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotateZ(0deg) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) rotateZ(360deg) translateX(50px);
            opacity: 0;
          }
        }

        .particle:nth-child(10) { 
          width: 2px; height: 2px; 
          background: radial-gradient(circle, #ffd700 0%, transparent 70%);
          left: 15%; 
          animation: float 7.2s infinite linear, sparkle 2.7s infinite ease-in-out;
          animation-delay: 4s; 
        }
        .particle:nth-child(11) { 
          width: 3px; height: 3px; 
          background: radial-gradient(circle, #dc143c 0%, transparent 70%);
          left: 85%; 
          animation: float 8.8s infinite linear, sparkle 3.2s infinite ease-in-out;
          animation-delay: 4.5s; 
        }
        .particle:nth-child(12) { 
          width: 2px; height: 2px; 
          background: radial-gradient(circle, #00ffff 0%, transparent 70%);
          left: 65%; 
          animation: float 6.2s infinite linear, sparkle 2.3s infinite ease-in-out;
          animation-delay: 5s; 
        }

        .geometric-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .geo-element {
          position: absolute;
          border: 1px solid;
          opacity: 0.3;
          animation: geoFloat 8s ease-in-out infinite;
        }

        .geo-1 {
          top: 15%;
          left: 85%;
          width: 40px;
          height: 40px;
          border-color: #ffd700;
          border-radius: 50%;
          animation-delay: 0s;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }

        .geo-2 {
          top: 60%;
          left: 10%;
          width: 30px;
          height: 30px;
          border-color: #dc143c;
          transform: rotate(45deg);
          animation-delay: 2s;
          box-shadow: 0 0 15px rgba(220, 20, 60, 0.3);
        }

        .geo-3 {
          top: 25%;
          left: 15%;
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 25px solid #00ffff;
          border-top: none;
          animation-delay: 4s;
          filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.3));
        }

        .geo-4 {
          top: 70%;
          right: 20%;
          width: 35px;
          height: 35px;
          border-color: #ff69b4;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          animation-delay: 1s;
          background: rgba(255, 105, 180, 0.1);
        }

        .geo-5 {
          top: 40%;
          right: 10%;
          width: 25px;
          height: 25px;
          border-color: #ffd700;
          border-radius: 0 50% 0 50%;
          animation-delay: 3s;
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.3);
        }

        @keyframes geoFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          33% { 
            transform: translateY(-20px) rotate(120deg) scale(1.1);
            opacity: 0.6;
          }
          66% { 
            transform: translateY(10px) rotate(240deg) scale(0.9);
            opacity: 0.4;
          }
        }

        .connection-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.6) 50%, transparent 100%);
          transform-origin: left center;
        }

        .line-1 {
          top: 30%;
          left: 10%;
          width: 200px;
          animation: lineStretch 4s ease-in-out infinite;
          animation-delay: 0s;
        }

        .line-2 {
          top: 60%;
          right: 15%;
          width: 150px;
          background: linear-gradient(90deg, transparent 0%, rgba(220, 20, 60, 0.6) 50%, transparent 100%);
          animation: lineStretch 5s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .line-3 {
          top: 80%;
          left: 30%;
          width: 180px;
          background: linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.6) 50%, transparent 100%);
          animation: lineStretch 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        @keyframes lineStretch {
          0%, 100% { 
            transform: scaleX(0) rotateZ(0deg);
            opacity: 0;
          }
          20% { 
            transform: scaleX(1) rotateZ(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: scaleX(1) rotateZ(5deg);
            opacity: 0.8;
          }
          80% { 
            transform: scaleX(1) rotateZ(0deg);
            opacity: 0.6;
          }
        }

        .light-effects {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }

        .light-effect-1 {
          position: absolute;
          top: 128px;
          left: 128px;
          width: 256px;
          height: 256px;
          background: radial-gradient(circle, #ffd700 0%, transparent 70%);
          opacity: 0.08;
          border-radius: 50%;
          filter: blur(48px);
          transform: translateZ(30px);
          animation: pulse1 3s ease-in-out infinite;
        }

        .light-effect-2 {
          position: absolute;
          bottom: 128px;
          right: 128px;
          width: 192px;
          height: 192px;
          background: radial-gradient(circle, #dc143c 0%, transparent 70%);
          opacity: 0.12;
          border-radius: 50%;
          filter: blur(48px);
          transform: translateZ(25px);
          animation: pulse2 4s ease-in-out infinite;
        }

        @keyframes pulse1 {
          0%, 100% { transform: translateZ(30px) scale(1); opacity: 0.08; }
          50% { transform: translateZ(40px) scale(1.1); opacity: 0.12; }
        }

        @keyframes pulse2 {
          0%, 100% { transform: translateZ(25px) scale(1); opacity: 0.12; }
          50% { transform: translateZ(35px) scale(1.15); opacity: 0.16; }
        }

        .header-line {
          position: relative;
          z-index: 10;
          transform: translateZ(15px);
        }

        .gradient-line {
          height: 4px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            #dc143c 20%,
            #ffd700 50%, 
            #dc143c 80%,
            transparent 100%);
          background-size: 200% 100%;
          box-shadow: 
            0 0 20px rgba(255, 215, 0, 0.5),
            0 0 40px rgba(220, 20, 60, 0.3);
          animation: lineFlow 3s ease-in-out infinite, lineGlow 2s ease-in-out infinite alternate;
          position: relative;
          overflow: hidden;
        }

        .gradient-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.8) 50%, 
            transparent 100%);
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes lineFlow {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 0%; }
        }

        @keyframes lineGlow {
          0% { 
            box-shadow: 
              0 0 20px rgba(255, 215, 0, 0.5),
              0 0 40px rgba(220, 20, 60, 0.3);
          }
          100% { 
            box-shadow: 
              0 0 30px rgba(255, 215, 0, 0.8),
              0 0 60px rgba(220, 20, 60, 0.5);
          }
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .main-content {
          position: relative;
          z-index: 10;
          padding: 20px 34px;
          min-height: calc(100% - 4px);
          transform-style: preserve-3d;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 64px;
          min-height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          transform: translateZ(20px);
          transition: transform 0.3s ease;
        }

        .left-column:hover {
          transform: translateZ(30px);
        }

        /* TEXTO MEJORADO - NÍTIDO Y CLARO */
        .name-title {
          font-size: clamp(24px, 6vw, 72px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.025em;
          line-height: 1;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform: translateZ(15px);
          transition: all 0.3s ease;
          animation: titleEntrance 1.5s ease-out 0.5s both;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        @keyframes titleEntrance {
          0% {
            opacity: 0;
            transform: translateZ(-50px) translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateZ(15px) translateY(0px);
          }
        }

        .name-title:hover {
          transform: translateZ(25px) scale(1.02);
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
        }

        .surname {
          display: block;
          font-size: clamp(20px, 5vw, 60px);
          margin-top: 8px;
          color: #ffd700;
          font-weight: 700;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform: translateZ(20px);
          transition: all 0.3s ease;
          animation: surnameEntrance 1.8s ease-out 0.8s both;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        @keyframes surnameEntrance {
          0% {
            opacity: 0;
            transform: translateZ(-100px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateZ(20px) scale(1);
          }
        }

        .surname:hover {
          transform: translateZ(30px) scale(1.05);
          color: #ffed4e;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
        }

        .title-container {
          display: flex;
          align-items: center;
          margin-top: 16px;
          transform: translateZ(8px);
        }

        .title-line {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #dc143c 0%, #ff6b6b 100%);
          margin-right: 16px;
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.5);
          transform: translateZ(5px);
        }

        .title-text {
          font-size: clamp(12px, 2.5vw, 20px);
          color: #e5e7eb;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform: translateZ(10px);
          transition: all 0.3s ease;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .title-text:hover {
          transform: translateZ(15px);
          color: #ffffff;
        }

        .certification-section {
          margin-bottom: 40px;
          margin-top: 40px;
          transform: translateZ(12px);
        }

        .section-title {
          font-size: clamp(14px, 3vw, 24px);
          font-weight: 700;
          color: #ffd700;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform: translateZ(12px);
          transition: all 0.3s ease;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .section-title:hover {
          transform: translateZ(18px);
          color: #ffed4e;
        }

        .module-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          transform-style: preserve-3d;
        }

        .module-item {
          display: flex;
          align-items: flex-start;
          transform: translateZ(5px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: moduleEntrance 0.8s ease-out both;
        }

        .module-item:nth-child(1) { animation-delay: 1.2s; }
        .module-item:nth-child(2) { animation-delay: 1.4s; }
        .module-item:nth-child(3) { animation-delay: 1.6s; }
        .module-item:nth-child(4) { animation-delay: 1.8s; }
        .module-item:nth-child(5) { animation-delay: 2.0s; }

        @keyframes moduleEntrance {
          0% {
            opacity: 0;
            transform: translateZ(-20px) translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateZ(5px) translateX(0px);
          }
        }

        .module-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 215, 0, 0.1) 50%, 
            transparent 100%);
          transition: left 0.6s ease;
        }

        .module-item:hover {
          transform: translateZ(15px) scale(1.02);
          background: rgba(255, 215, 0, 0.08);
          box-shadow: 
            0 15px 35px rgba(255, 215, 0, 0.15),
            0 5px 15px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 215, 0, 0.3);
        }

        .module-item:hover::before {
          left: 100%;
        }

        .module-item:hover .module-dot {
          background: #ffd700;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
          transform: translateZ(8px) scale(1.3);
        }

        .module-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-top: 8px;
          margin-right: 20px;
          flex-shrink: 0;
          background: #dc143c;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.4);
          transform: translateZ(3px);
        }

        .module-text {
          color: #e5e7eb;
          font-size: clamp(11px, 2vw, 16px);
          line-height: 1.6;
          margin: 0;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform: translateZ(3px);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .module-number {
          font-weight: 700;
          color: #ffffff;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform: translateZ(3px);
          transition: all 0.3s ease;
        }

        .module-description {
          color: #d1d5db;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform: translateZ(2px);
        }

        .right-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateZ(25px);
          transition: transform 0.3s ease;
        }

        .right-column:hover {
          transform: translateZ(35px);
        }

        .trainer-image {
          width: 300px;
          height: 450px;
          border-radius: 12px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 10px 25px rgba(255, 215, 0, 0.1);
          border: 2px solid rgba(255, 215, 0, 0.2);
          transition: all 0.3s ease;
          transform: translateZ(10px);
          overflow: hidden;
        }

        .trainer-image:hover {
          transform: translateZ(20px) scale(1.05);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.5),
            0 15px 35px rgba(255, 215, 0, 0.2);
        }

        .footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          transform: translateZ(18px);
        }

        .footer-line {
          height: 2px;
          background: linear-gradient(90deg, #dc143c 0%, #ffd700 50%, #dc143c 100%);
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }

        .footer-content {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          padding: 16px;
          text-align: center;
          border-top: 1px solid rgba(255, 215, 0, 0.1);
        }

        .footer-text {
          color: #9ca3af;
          font-size: clamp(10px, 1.5vw, 14px);
          margin: 0;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform: translateZ(5px);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .decorative-element-1 {
          position: absolute;
          top: 32px;
          right: 32px;
          width: 16px;
          height: 16px;
          border: 2px solid #ffd700;
          transform: rotateZ(45deg) translateZ(30px);
          opacity: 0.6;
          animation: rotate3d 8s linear infinite;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
        }

        .decorative-element-2 {
          position: absolute;
          bottom: 100px;
          left: 32px;
          width: 24px;
          height: 24px;
          border: 2px solid #dc143c;
          opacity: 0.4;
          transform: translateZ(25px);
          animation: float3d 6s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.3);
        }

        @keyframes rotate3d {
          0% { transform: rotateZ(45deg) rotateX(0deg) rotateY(0deg) translateZ(30px); }
          100% { transform: rotateZ(45deg) rotateX(360deg) rotateY(360deg) translateZ(30px); }
        }

        @keyframes float3d {
          0%, 100% { transform: translateZ(25px) translateY(0px); }
          50% { transform: translateZ(35px) translateY(-10px); }
        }

        .ambient-glow {
          position: absolute;
          inset: -50px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 215, 0, 0.03) 0%,
            rgba(220, 20, 60, 0.02) 50%,
            transparent 100%
          );
          border-radius: 50px;
          transform: translateZ(-10px);
          animation: ambientPulse 5s ease-in-out infinite;
        }

        @keyframes ambientPulse {
          0%, 100% { opacity: 0.5; transform: translateZ(-10px) scale(1); }
          50% { opacity: 0.8; transform: translateZ(-5px) scale(1.05); }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .scene-container {
            height: auto;
            perspective: 800px;
            padding: 10px;
          }

          .trainer-container {
            transform: rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg) translateZ(10px);
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .main-content {
            padding: 20px;
            padding-bottom: 100px;
          }

          .left-column {
            order: 1;
            text-align: center;
            transform: translateZ(15px);
          }

          .right-column {
            order: 0;
            transform: translateZ(20px);
          }

          .trainer-image {
            width: 240px;
            height: 360px;
          }
        }

        @media (max-width: 480px) {
          .scene-container {
            perspective: 600px;
          }

          .trainer-container {
            margin: 5px;
            border-radius: 15px;
            transform: rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) translateZ(5px);
          }

          .trainer-image {
            width: 180px;
            height: 270px;
          }

          .decorative-element-1,
          .decorative-element-2 {
            display: none;
          }
        }
      `}</style>

      <div className="ambient-glow"></div>

      <div
        className="trainer-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Partículas flotantes */}
        <div className="floating-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>

        {/* Elementos geométricos flotantes */}
        <div className="geometric-elements">
          <div className="geo-element geo-1"></div>
          <div className="geo-element geo-2"></div>
          <div className="geo-element geo-3"></div>
          <div className="geo-element geo-4"></div>
          <div className="geo-element geo-5"></div>
        </div>

        {/* Líneas de conexión animadas */}
        <div className="connection-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        {/* Efectos de luz */}
        <div className="light-effects">
          <div className="light-effect-1"></div>
          <div className="light-effect-2"></div>
        </div>

        {/* Header con línea dorada */}
        <div className="header-line">
          <div className="gradient-line"></div>
        </div>

        {/* Contenido principal */}
        <div className="main-content">
          <div className="content-grid">

            {/* Columna izquierda - Información principal */}
            <div className="left-column">
              {/* Nombre y título */}
              <div className="name-container">
                <h1 className="name-title">
                  MARCOS
                  <span className="surname">RUBIÑO</span>
                </h1>
                <div className="title-container">
                  <div className="title-line"></div>
                  <p className="title-text">Entrenador Personal</p>
                </div>
              </div>

              {/* Certificación para Entrenador Deportivo */}
              <div className="certification-section">
                <h2 className="section-title">Certificación para Entrenador Deportivo</h2>
                <div className="module-list">
                  <div className="module-item">
                    <div className="module-dot"></div>
                    <p className="module-text">
                      <span className="module-number">Módulo 1:</span> <span className="module-description">Entrenamiento de la Resistencia</span>
                    </p>
                  </div>

                  <div className="module-item">
                    <div className="module-dot"></div>
                    <p className="module-text">
                      <span className="module-number">Módulo 2:</span> <span className="module-description">Entrenamiento de la Fuerza</span>
                    </p>
                  </div>

                  <div className="module-item">
                    <div className="module-dot"></div>
                    <p className="module-text">
                      <span className="module-number">Módulo 3:</span> <span className="module-description">Metodología y Sistemas de Entrenamiento</span>
                    </p>
                  </div>

                  <div className="module-item">
                    <div className="module-dot"></div>
                    <p className="module-text">
                      <span className="module-number">Módulo 4:</span> <span className="module-description">Fisiología</span>
                    </p>
                  </div>

                  <div className="module-item">
                    <div className="module-dot"></div>
                    <p className="module-text">
                      <span className="module-number">Módulo 5:</span> <span className="module-description">Suplementación y Nutrición Deportiva</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Imagen */}
            <div className="right-column">
              <div
                className="trainer-image"
                style={{
                  background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '14px',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  color: '#888'
                }}>
                  <video src={require('../img/gym.mp4')} autoPlay loop muted playsInline style={{ width: '100%', height: 'auto' }}>
                    Tu navegador no soporta el elemento de video.
                  </video>

                </div>
              </div>
            </div>
          </div>

          {/* Footer profesional */}
          <div className="footer">
            <div className="footer-line"></div>
            <div className="footer-content">
              <p className="footer-text">
                Entrenamiento personalizado • Preparación competitiva • Asesoría nutricional
              </p>
            </div>
          </div>
        </div>

        {/* Elementos decorativos animados */}
        <div className="decorative-element-1"></div>
        <div className="decorative-element-2"></div>
      </div>
    </div>
  );
};

export default TrainerProfile;