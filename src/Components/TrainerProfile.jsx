import React from 'react';

const TrainerProfile = () => {
  return (
    <>
      <style jsx>{`
        .trainer-container {
          position: relative;
          width: 100%;
          max-width: 1536px;
          margin: 0 auto;
          min-height: 700px;
          background: linear-gradient(135deg, #000000 0%, #111111 50%, #222222 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid #333333;
        }

        .light-effects {
          position: absolute;
          inset: 0;
        }

        .light-effect-1 {
          position: absolute;
          top: 128px;
          left: 128px;
          width: 256px;
          height: 256px;
          background-color: #ffd700;
          opacity: 0.05;
          border-radius: 50%;
          filter: blur(48px);
        }

        .light-effect-2 {
          position: absolute;
          bottom: 128px;
          right: 128px;
          width: 192px;
          height: 192px;
          background-color: #dc143c;
          opacity: 0.08;
          border-radius: 50%;
          filter: blur(48px);
        }

        .header-line {
          position: relative;
          z-index: 10;
        }

        .gradient-line {
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, #ffd700 50%, transparent 100%);
        }

        .main-content {
          position: relative;
          z-index: 10;
          padding: 20px 34px;
          min-height: calc(100% - 4px);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 64px;
          min-height: 100%;
          position: relative;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .name-title {
          font-size: clamp(24px, 6vw, 72px);
          font-weight: bold;
          color: #ffffff;
          letter-spacing: -0.025em;
          line-height: 1;
        }

        .surname {
          display: block;
          font-size: clamp(20px, 5vw, 60px);
          margin-top: 8px;
          color: #ffd700;
        }

        .title-container {
          display: flex;
          align-items: center;
          margin-top: 16px;
        }

        .title-line {
          width: 48px;
          height: 2px;
          background-color: #dc143c;
          margin-right: 16px;
        }

        .title-text {
          font-size: clamp(12px, 2.5vw, 20px);
          color: #d1d5db;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .certification-section {
          margin-bottom: 40px;
          margin-top: 40px;
        }

        .section-title {
          font-size: clamp(14px, 3vw, 24px);
          font-weight: bold;
          color: #ffd700;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0;
        }

        .module-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .module-item {
          display: flex;
          align-items: flex-start;
        }

        .module-item:hover .module-dot {
          background-color: #ffd700;
        }

        .module-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 12px;
          margin-right: 20px;
          flex-shrink: 0;
          background-color: #dc143c;
          transition: background-color 0.3s ease;
        }

        .module-text {
          color: #e5e7eb;
          font-size: clamp(11px, 2vw, 16px);
          line-height: 1.6;
          margin: 0;
        }

        .module-number {
          font-weight: bold;
          color: #ffffff;
        }

        .module-description {
          color: #d1d5db;
        }

        .right-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .trainer-image {
          width: 300px;
          height: 500px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .footer-line {
          height: 2px;
          background: linear-gradient(90deg, #dc143c 0%, #ffd700 50%, #dc143c 100%);
        }

        .footer-content {
          background-color: rgba(0, 0, 0, 0.8);
          padding: 16px;
          text-align: center;
        }

        .footer-text {
          color: #9ca3af;
          font-size: clamp(10px, 1.5vw, 14px);
          margin: 0;
        }

        .decorative-element-1 {
          position: absolute;
          top: 32px;
          right: 32px;
          width: 16px;
          height: 16px;
          border: 1px solid #ffd700;
          transform: rotate(45deg);
          opacity: 0.6;
        }

        .decorative-element-2 {
          position: absolute;
          bottom: 100px;
          left: 32px;
          width: 24px;
          height: 24px;
          border: 1px solid #dc143c;
          opacity: 0.4;
        }

        /* Tablets y pantallas medianas */
        @media (max-width: 1024px) {
          .content-grid {
            gap: 32px;
          }
          
          .main-content {
            padding: 20px 24px;
          }

          .trainer-image {
            width: 280px;
            height: 460px;
          }

          .light-effect-1,
          .light-effect-2 {
            width: 150px;
            height: 150px;
          }
        }

        /* Tablets pequeñas */
        @media (max-width: 768px) {
          .trainer-container {
            min-height: auto;
            margin: 10px;
            border-radius: 12px;
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
          }

          .right-column {
            order: 0;
          }

          .trainer-image {
            width: 240px;
            height: 400px;
          }

          .title-container {
            justify-content: center;
            margin-top: 20px;
          }

          .certification-section {
            margin-top: 30px;
            margin-bottom: 20px;
          }

          .module-item {
            justify-content: flex-start;
            text-align: left;
          }

          .decorative-element-1 {
            top: 16px;
            right: 16px;
            width: 12px;
            height: 12px;
          }

          .decorative-element-2 {
            bottom: 80px;
            left: 16px;
            width: 18px;
            height: 18px;
          }

          .light-effect-1 {
            top: 50px;
            left: 50px;
            width: 120px;
            height: 120px;
          }

          .light-effect-2 {
            bottom: 50px;
            right: 50px;
            width: 100px;
            height: 100px;
          }
        }

        /* Pantallas pequeñas - 450px aproximadamente */
        @media (max-width: 600px) {
          .trainer-image {
            width: 200px;
            height: 400px;
          }
        }

        /* Móviles */
        @media (max-width: 480px) {
          .trainer-container {
            margin: 5px;
            border-radius: 8px;
          }

          .main-content {
            padding: 15px;
            padding-bottom: 90px;
          }

          .content-grid {
            gap: 20px;
          }

          .trainer-image {
            width: 180px;
            height: 360px;
          }

          .title-line {
            width: 32px;
            margin-right: 12px;
          }

          .module-dot {
            margin-right: 15px;
            margin-top: 10px;
          }

          .certification-section {
            margin-top: 25px;
          }

          .module-list {
            gap: 12px;
          }

          .footer-content {
            padding: 12px 8px;
          }

          .decorative-element-1,
          .decorative-element-2 {
            display: none;
          }

          .light-effect-1,
          .light-effect-2 {
            opacity: 0.03;
          }
        }

        /* Móviles muy pequeños */
        @media (max-width: 320px) {
          .main-content {
            padding: 12px;
            padding-bottom: 85px;
          }

          .trainer-image {
            width: 150px;
            height: 300px;
          }
        }
      `}</style>

      <div className="trainer-container">
        {/* Efectos de luz sutiles */}
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
              <img
                src={require('../img/gym.png')}
                alt="Trainer Marcos Rubiño"
                className="trainer-image"
              />
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

        {/* Elementos decorativos sutiles */}
        <div className="decorative-element-1"></div>
        <div className="decorative-element-2"></div>
      </div>
    </>
  );
};

export default TrainerProfile;