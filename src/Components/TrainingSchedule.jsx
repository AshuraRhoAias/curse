import React from 'react';
import TrainerProfile from './TrainerProfile';

const TrainingSchedule = () => {
    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#fff',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            lineHeight: '1.6',
            boxShadow: '0 0 30px rgba(0,0,0,0.1)'
        }}>

            {/* Corporate Header */}
            <div style={{
                background: 'linear-gradient(135deg, #000 0%, #333 100%)',
                padding: '0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Top Bar */}
                <div className='bar-header' style={{
                    backgroundColor: '#ffd700',
                    padding: '8px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: '#000',
                    fontWeight: '600'
                }}>
                    <div>📧 info@sportscertification.com | 📞 +1 (555) 123-4567</div>
                    <div>🌍 PRESENCIA MUNDIAL | 🏆 +50.000 CERTIFICADOS</div>
                </div>

                {/* Main Header */}
                <div style={{
                    padding: window.innerWidth < 768 ? '20px' : '40px',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    {/* Background Pattern */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        background: 'repeating-linear-gradient(45deg, rgba(255,215,0,0.1) 0px, rgba(255,215,0,0.1) 2px, transparent 2px, transparent 20px)',
                        opacity: '0.3'
                    }}></div>

                    <TrainerProfile />
                </div>
            </div>

            {/* Hero Section with Image Placeholder */}
            <div style={{
                display: window.innerWidth < 768 ? 'block' : 'grid',
                gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 400px',
                gap: window.innerWidth < 768 ? '20px' : '40px',
                padding: window.innerWidth < 768 ? '30px 20px' : '60px 40px',
                backgroundColor: '#f8f8f8',
                borderBottom: '5px solid #ffd700'
            }}>
                <div style={{ order: window.innerWidth < 768 ? '2' : '1' }}>
                    <h2 style={{
                        color: '#000',
                        fontSize: window.innerWidth < 768 ? '24px' : '32px',
                        fontWeight: '900',
                        marginBottom: '20px',
                        letterSpacing: '1px',
                        lineHeight: '1.2'
                    }}>
                        TRANSFORMA TU CARRERA PROFESIONAL
                    </h2>
                    <p style={{
                        color: '#333',
                        fontSize: window.innerWidth < 768 ? '16px' : '18px',
                        lineHeight: '1.8',
                        marginBottom: '25px'
                    }}>
                        Únete a la élite mundial de entrenadores deportivos con nuestra certificación nacional.
                        Más de <strong style={{ color: '#dc143c' }}>50,000 profesionales</strong> en <strong style={{ color: '#dc143c' }}>85 países</strong>
                        confían en nuestros programas de formación.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth < 480 ? '1fr' : '1fr 1fr',
                        gap: '20px',
                        marginTop: '30px'
                    }}>
                        <div style={{
                            backgroundColor: '#000',
                            color: '#ffd700',
                            padding: '20px',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>80</div>
                            <div style={{ fontSize: '12px', color: '#fff' }}>HORAS ACADÉMICAS</div>
                        </div>
                        <div style={{
                            backgroundColor: '#dc143c',
                            color: '#fff',
                            padding: '20px',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>5</div>
                            <div style={{ fontSize: '12px' }}>MÓDULOS ESPECIALIZADOS</div>
                        </div>
                    </div>
                </div>

                {/* Professional Image Section */}
                <div style={{
                    position: 'relative',
                    backgroundColor: '#000',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: '3px solid #ffd700',
                    order: window.innerWidth < 768 ? '1' : '2',
                    maxWidth: window.innerWidth < 768 ? '100%' : '400px',
                    margin: window.innerWidth < 768 ? '0 auto' : '0'
                }}>
                    {/* Image Placeholder */}
                    <div style={{
                        height: window.innerWidth < 768 ? '300px' : '400px',
                        backgroundColor: '#222',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#ffd700',
                        fontSize: window.innerWidth < 768 ? '14px' : '16px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        padding: '20px',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: window.innerWidth < 768 ? '80px' : '100px',
                            height: window.innerWidth < 768 ? '80px' : '100px',
                            backgroundColor: '#ffd700',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px',
                            fontSize: window.innerWidth < 768 ? '32px' : '40px'
                        }}>
                            💪
                        </div>
                        <div style={{ marginBottom: '10px' }}>IMAGEN PROFESIONAL</div>
                        <div style={{ fontSize: window.innerWidth < 768 ? '12px' : '14px', color: '#ccc' }}>Fisicoculturista / Atleta Elite</div>
                        <div style={{ fontSize: window.innerWidth < 768 ? '10px' : '12px', color: '#888', marginTop: '10px' }}>
                            [Coloca aquí la imagen de tu atleta profesional]
                        </div>
                    </div>

                    {/* Image Overlay */}
                    <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        color: '#fff',
                        padding: '20px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: window.innerWidth < 768 ? '12px' : '14px', fontWeight: 'bold', color: '#ffd700' }}>
                            "EXCELENCIA EN CADA ENTRENAMIENTO"
                        </div>
                    </div>
                </div>
            </div>

            {/* Program Overview */}
            <div style={{ padding: window.innerWidth < 768 ? '30px 20px' : '60px 40px', backgroundColor: '#fff' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{
                        color: '#000',
                        fontSize: window.innerWidth < 768 ? '22px' : '28px',
                        fontWeight: '900',
                        marginBottom: '15px',
                        letterSpacing: '1px',
                        lineHeight: '1.3'
                    }}>
                        PROGRAMA DE CERTIFICACIÓN INTERNACIONAL
                    </h2>
                    <div style={{
                        width: window.innerWidth < 768 ? '80px' : '120px',
                        height: '4px',
                        backgroundColor: '#dc143c',
                        margin: '0 auto 20px auto'
                    }}></div>
                    <p style={{
                        color: '#666',
                        fontSize: window.innerWidth < 768 ? '16px' : '18px',
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: window.innerWidth < 768 ? '0 10px' : '0'
                    }}>
                        Desarrollado por expertos internacionales en ciencias del deporte y avalado por las principales organizaciones mundiales
                    </p>
                </div>

                {/* Stats Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth < 480 ? '1fr' : window.innerWidth < 768 ? '1fr 1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: window.innerWidth < 768 ? '20px' : '30px',
                    marginBottom: window.innerWidth < 768 ? '40px' : '60px'
                }}>
                    <div style={{
                        textAlign: 'center',
                        padding: window.innerWidth < 768 ? '20px' : '30px',
                        backgroundColor: '#f8f8f8',
                        borderRadius: '15px',
                        border: '3px solid #ffd700'
                    }}>
                        <div style={{ fontSize: window.innerWidth < 768 ? '32px' : '48px', marginBottom: '10px' }}>🌍</div>
                        <div style={{ fontSize: window.innerWidth < 768 ? '20px' : '24px', fontWeight: 'bold', color: '#000', marginBottom: '5px' }}>85+</div>
                        <div style={{ color: '#666', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>PAÍSES CON PRESENCIA</div>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        padding: window.innerWidth < 768 ? '20px' : '30px',
                        backgroundColor: '#f8f8f8',
                        borderRadius: '15px',
                        border: '3px solid #dc143c'
                    }}>
                        <div style={{ fontSize: window.innerWidth < 768 ? '32px' : '48px', marginBottom: '10px' }}>👥</div>
                        <div style={{ fontSize: window.innerWidth < 768 ? '20px' : '24px', fontWeight: 'bold', color: '#000', marginBottom: '5px' }}>50,000+</div>
                        <div style={{ color: '#666', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>PROFESIONALES CERTIFICADOS</div>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        padding: window.innerWidth < 768 ? '20px' : '30px',
                        backgroundColor: '#f8f8f8',
                        borderRadius: '15px',
                        border: '3px solid #ffd700'
                    }}>
                        <div style={{ fontSize: window.innerWidth < 768 ? '32px' : '48px', marginBottom: '10px' }}>⭐</div>
                        <div style={{ fontSize: window.innerWidth < 768 ? '20px' : '24px', fontWeight: 'bold', color: '#000', marginBottom: '5px' }}>98%</div>
                        <div style={{ color: '#666', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>SATISFACCIÓN PROFESIONAL</div>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        padding: window.innerWidth < 768 ? '20px' : '30px',
                        backgroundColor: '#f8f8f8',
                        borderRadius: '15px',
                        border: '3px solid #dc143c'
                    }}>
                        <div style={{ fontSize: window.innerWidth < 768 ? '32px' : '48px', marginBottom: '10px' }}>🏆</div>
                        <div style={{ fontSize: window.innerWidth < 768 ? '20px' : '24px', fontWeight: 'bold', color: '#000', marginBottom: '5px' }}>25+</div>
                        <div style={{ color: '#666', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>AÑOS DE EXCELENCIA</div>
                    </div>
                </div>
            </div>

            {/* Modules Section */}
            <div style={{ padding: window.innerWidth < 768 ? '30px 20px' : '60px 40px', backgroundColor: '#f8f8f8' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{
                        color: '#000',
                        fontSize: window.innerWidth < 768 ? '22px' : '28px',
                        fontWeight: '900',
                        marginBottom: '15px',
                        letterSpacing: '1px',
                        lineHeight: '1.3'
                    }}>
                        CURRÍCULUM ACADÉMICO ESPECIALIZADO
                    </h2>
                    <div style={{
                        width: window.innerWidth < 768 ? '80px' : '120px',
                        height: '4px',
                        backgroundColor: '#dc143c',
                        margin: '0 auto 20px auto'
                    }}></div>
                </div>

                <div style={{ display: 'grid', gap: window.innerWidth < 768 ? '20px' : '30px' }}>
                    {/* Module 1 */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '15px',
                        padding: window.innerWidth < 768 ? '20px' : '40px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        border: '3px solid #ffd700',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            left: window.innerWidth < 768 ? '20px' : '40px',
                            backgroundColor: '#000',
                            color: '#ffd700',
                            padding: '8px 20px',
                            borderRadius: '20px',
                            fontSize: window.innerWidth < 768 ? '12px' : '14px',
                            fontWeight: 'bold'
                        }}>
                            MÓDULO FUNDAMENTAL
                        </div>

                        <div style={{
                            display: window.innerWidth < 768 ? 'block' : 'grid',
                            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr auto',
                            gap: window.innerWidth < 768 ? '20px' : '30px',
                            alignItems: 'start',
                            marginTop: window.innerWidth < 768 ? '20px' : '0'
                        }}>
                            <div>
                                <h3 style={{
                                    color: '#000',
                                    fontSize: window.innerWidth < 768 ? '18px' : '24px',
                                    fontWeight: '900',
                                    marginBottom: '10px',
                                    letterSpacing: '1px',
                                    lineHeight: '1.3'
                                }}>
                                    MÓDULO 1: ENTRENAMIENTO DE LA RESISTENCIA
                                </h3>
                                <div style={{
                                    color: '#dc143c',
                                    fontSize: window.innerWidth < 768 ? '14px' : '16px',
                                    fontWeight: 'bold',
                                    marginBottom: '20px'
                                }}>
                                    📅 11 Y 12 DE OCTUBRE • 16 HORAS ACADÉMICAS
                                </div>

                                <div style={{
                                    backgroundColor: '#f8f8f8',
                                    padding: window.innerWidth < 768 ? '15px' : '20px',
                                    borderRadius: '10px',
                                    marginBottom: '25px',
                                    borderLeft: '5px solid #ffd700'
                                }}>
                                    <h4 style={{ color: '#000', fontSize: window.innerWidth < 768 ? '14px' : '16px', fontWeight: 'bold', marginBottom: '10px' }}>
                                        🎯 OBJETIVO ESTRATÉGICO
                                    </h4>
                                    <p style={{ color: '#333', fontSize: window.innerWidth < 768 ? '12px' : '14px', margin: '0' }}>
                                        Dominar los fundamentos científicos y metodológicos del entrenamiento cardiovascular para diseñar programas efectivos y seguros
                                    </p>
                                </div>

                                <div style={{
                                    display: window.innerWidth < 768 ? 'block' : 'grid',
                                    gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                                    gap: '20px'
                                }}>
                                    <div style={{ marginBottom: window.innerWidth < 768 ? '20px' : '0' }}>
                                        <h5 style={{ color: '#dc143c', fontSize: window.innerWidth < 768 ? '12px' : '14px', fontWeight: 'bold', marginBottom: '10px' }}>
                                            📚 CONTENIDO CIENTÍFICO
                                        </h5>
                                        <ul style={{ listStyle: 'none', padding: '0', color: '#333', fontSize: window.innerWidth < 768 ? '11px' : '13px' }}>
                                            <li style={{ marginBottom: '6px' }}>• Capacidades físicas y fisiología</li>
                                            <li style={{ marginBottom: '6px' }}>• Sistemas energéticos aeróbicos/anaeróbicos</li>
                                            <li style={{ marginBottom: '6px' }}>• VO₂max y MET aplicados</li>
                                            <li style={{ marginBottom: '6px' }}>• Evaluación cardiovascular avanzada</li>
                                            <li style={{ marginBottom: '6px' }}>• Poblaciones especiales y adaptaciones</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 style={{ color: '#dc143c', fontSize: window.innerWidth < 768 ? '12px' : '14px', fontWeight: 'bold', marginBottom: '10px' }}>
                                            🛠️ HERRAMIENTAS PRÁCTICAS
                                        </h5>
                                        <ul style={{ listStyle: 'none', padding: '0', color: '#333', fontSize: window.innerWidth < 768 ? '11px' : '13px' }}>
                                            <li style={{ marginBottom: '6px' }}>• Tests de Rockport y Cooper</li>
                                            <li style={{ marginBottom: '6px' }}>• Fórmula de Karvonen personalizada</li>
                                            <li style={{ marginBottom: '6px' }}>• Zonas de entrenamiento óptimas</li>
                                            <li style={{ marginBottom: '6px' }}>• Métodos cardiovasculares avanzados</li>
                                            <li style={{ marginBottom: '6px' }}>• Protocolos de evaluación inicial</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                backgroundColor: '#000',
                                color: '#ffd700',
                                padding: '20px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                minWidth: window.innerWidth < 768 ? 'auto' : '120px',
                                margin: window.innerWidth < 768 ? '0 auto' : '0',
                                maxWidth: window.innerWidth < 768 ? '200px' : 'none'
                            }}>
                                <div style={{ fontSize: window.innerWidth < 768 ? '24px' : '32px', marginBottom: '10px' }}>🏃‍♂️</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '12px' : '14px', fontWeight: 'bold' }}>RESISTENCIA</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '10px' : '12px', color: '#ccc', marginTop: '5px' }}>Base Cardiovascular</div>
                            </div>
                        </div>
                    </div>

                    {/* Module 2 */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '15px',
                        padding: window.innerWidth < 768 ? '20px' : '40px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        border: '3px solid #dc143c'
                    }}>
                        <div style={{
                            display: window.innerWidth < 768 ? 'block' : 'grid',
                            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr auto',
                            gap: window.innerWidth < 768 ? '20px' : '30px',
                            alignItems: 'start'
                        }}>
                            <div>
                                <h3 style={{
                                    color: '#000',
                                    fontSize: window.innerWidth < 768 ? '18px' : '24px',
                                    fontWeight: '900',
                                    marginBottom: '10px',
                                    lineHeight: '1.3'
                                }}>
                                    MÓDULO 2: ENTRENAMIENTO DE LA FUERZA
                                </h3>
                                <div style={{
                                    color: '#dc143c',
                                    fontSize: window.innerWidth < 768 ? '14px' : '16px',
                                    fontWeight: 'bold',
                                    marginBottom: '20px'
                                }}>
                                    📅 8 Y 9 DE NOVIEMBRE • 16 HORAS ACADÉMICAS
                                </div>
                                <p style={{ color: '#333', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>
                                    Desarrollo de competencias avanzadas en diseño y ejecución de programas de entrenamiento de fuerza para diferentes poblaciones y objetivos específicos.
                                </p>
                            </div>
                            <div style={{
                                backgroundColor: '#dc143c',
                                color: '#fff',
                                padding: '20px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                minWidth: window.innerWidth < 768 ? 'auto' : '120px',
                                margin: window.innerWidth < 768 ? '0 auto' : '0',
                                maxWidth: window.innerWidth < 768 ? '200px' : 'none'
                            }}>
                                <div style={{ fontSize: window.innerWidth < 768 ? '24px' : '32px', marginBottom: '10px' }}>💪</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '12px' : '14px', fontWeight: 'bold' }}>FUERZA</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '10px' : '12px', opacity: '0.8' }}>Potencia Muscular</div>
                            </div>
                        </div>
                    </div>

                    {/* Module 3 */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '15px',
                        padding: window.innerWidth < 768 ? '20px' : '40px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        border: '3px solid #ffd700'
                    }}>
                        <div style={{
                            display: window.innerWidth < 768 ? 'block' : 'grid',
                            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr auto',
                            gap: window.innerWidth < 768 ? '20px' : '30px',
                            alignItems: 'start'
                        }}>
                            <div>
                                <h3 style={{
                                    color: '#000',
                                    fontSize: window.innerWidth < 768 ? '18px' : '24px',
                                    fontWeight: '900',
                                    marginBottom: '10px',
                                    lineHeight: '1.3'
                                }}>
                                    MÓDULO 3: METODOLOGÍA Y SISTEMAS DE ENTRENAMIENTO
                                </h3>
                                <div style={{
                                    color: '#dc143c',
                                    fontSize: window.innerWidth < 768 ? '14px' : '16px',
                                    fontWeight: 'bold',
                                    marginBottom: '20px'
                                }}>
                                    📅 6 Y 7 DE DICIEMBRE • 16 HORAS ACADÉMICAS
                                </div>
                                <p style={{ color: '#333', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>
                                    Integración de metodologías científicas avanzadas para optimización del rendimiento deportivo y planificación periodizada.
                                </p>
                            </div>
                            <div style={{
                                backgroundColor: '#ffd700',
                                color: '#000',
                                padding: '20px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                minWidth: window.innerWidth < 768 ? 'auto' : '120px',
                                margin: window.innerWidth < 768 ? '0 auto' : '0',
                                maxWidth: window.innerWidth < 768 ? '200px' : 'none'
                            }}>
                                <div style={{ fontSize: window.innerWidth < 768 ? '24px' : '32px', marginBottom: '10px' }}>📊</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '12px' : '14px', fontWeight: 'bold' }}>METODOLOGÍA</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '10px' : '12px', opacity: '0.7' }}>Sistemas Avanzados</div>
                            </div>
                        </div>
                    </div>

                    {/* Module 4 */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '15px',
                        padding: window.innerWidth < 768 ? '20px' : '40px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        border: '3px solid #dc143c'
                    }}>
                        <div style={{
                            display: window.innerWidth < 768 ? 'block' : 'grid',
                            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr auto',
                            gap: window.innerWidth < 768 ? '20px' : '30px',
                            alignItems: 'start'
                        }}>
                            <div>
                                <h3 style={{
                                    color: '#000',
                                    fontSize: window.innerWidth < 768 ? '18px' : '24px',
                                    fontWeight: '900',
                                    marginBottom: '10px',
                                    lineHeight: '1.3'
                                }}>
                                    MÓDULO 4: FISIOLOGÍA DEL EJERCICIO
                                </h3>
                                <div style={{
                                    color: '#dc143c',
                                    fontSize: window.innerWidth < 768 ? '14px' : '16px',
                                    fontWeight: 'bold',
                                    marginBottom: '20px'
                                }}>
                                    📅 3 Y 4 DE ENERO • 16 HORAS ACADÉMICAS
                                </div>
                                <p style={{ color: '#333', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>
                                    Comprensión profunda de los mecanismos fisiológicos que rigen la respuesta al ejercicio y las adaptaciones corporales.
                                </p>
                            </div>
                            <div style={{
                                backgroundColor: '#000',
                                color: '#ffd700',
                                padding: '20px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                minWidth: window.innerWidth < 768 ? 'auto' : '120px',
                                margin: window.innerWidth < 768 ? '0 auto' : '0',
                                maxWidth: window.innerWidth < 768 ? '200px' : 'none'
                            }}>
                                <div style={{ fontSize: window.innerWidth < 768 ? '24px' : '32px', marginBottom: '10px' }}>🧬</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '12px' : '14px', fontWeight: 'bold' }}>FISIOLOGÍA</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '10px' : '12px', color: '#ccc' }}>Ciencia Aplicada</div>
                            </div>
                        </div>
                    </div>

                    {/* Module 5 */}
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '15px',
                        padding: window.innerWidth < 768 ? '20px' : '40px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        border: '3px solid #ffd700'
                    }}>
                        <div style={{
                            display: window.innerWidth < 768 ? 'block' : 'grid',
                            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr auto',
                            gap: window.innerWidth < 768 ? '20px' : '30px',
                            alignItems: 'start'
                        }}>
                            <div>
                                <h3 style={{
                                    color: '#000',
                                    fontSize: window.innerWidth < 768 ? '18px' : '24px',
                                    fontWeight: '900',
                                    marginBottom: '10px',
                                    lineHeight: '1.3'
                                }}>
                                    MÓDULO 5: SUPLEMENTACIÓN Y NUTRICIÓN DEPORTIVA
                                </h3>
                                <div style={{
                                    color: '#dc143c',
                                    fontSize: window.innerWidth < 768 ? '14px' : '16px',
                                    fontWeight: 'bold',
                                    marginBottom: '20px'
                                }}>
                                    📅 31 DE ENERO Y 1 DE FEBRERO • 16 HORAS ACADÉMICAS
                                </div>
                                <p style={{ color: '#333', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>
                                    Optimización del rendimiento a través de estrategias nutricionales avanzadas basadas en evidencia científica internacional.
                                </p>
                            </div>
                            <div style={{
                                backgroundColor: '#dc143c',
                                color: '#fff',
                                padding: '20px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                minWidth: window.innerWidth < 768 ? 'auto' : '120px',
                                margin: window.innerWidth < 768 ? '0 auto' : '0',
                                maxWidth: window.innerWidth < 768 ? '200px' : 'none'
                            }}>
                                <div style={{ fontSize: window.innerWidth < 768 ? '24px' : '32px', marginBottom: '10px' }}>🥗</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '12px' : '14px', fontWeight: 'bold' }}>NUTRICIÓN</div>
                                <div style={{ fontSize: window.innerWidth < 768 ? '10px' : '12px', opacity: '0.8' }}>Rendimiento Óptimo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certification Benefits */}
            <div style={{
                backgroundColor: '#000',
                padding: window.innerWidth < 768 ? '30px 20px' : '60px 40px',
                color: '#fff'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{
                        color: '#ffd700',
                        fontSize: window.innerWidth < 768 ? '22px' : '28px',
                        fontWeight: '900',
                        marginBottom: '15px',
                        letterSpacing: '1px',
                        lineHeight: '1.3'
                    }}>
                        BENEFICIOS PROFESIONALES EXCLUSIVOS
                    </h2>
                    <div style={{
                        width: window.innerWidth < 768 ? '80px' : '120px',
                        height: '4px',
                        backgroundColor: '#dc143c',
                        margin: '0 auto 20px auto'
                    }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: window.innerWidth < 768 ? '20px' : '30px'
                }}>
                    <div style={{
                        backgroundColor: '#222',
                        padding: window.innerWidth < 768 ? '20px' : '30px',
                        borderRadius: '15px',
                        border: '2px solid #ffd700'
                    }}>
                        <div style={{ fontSize: window.innerWidth < 768 ? '32px' : '40px', marginBottom: '15px' }}>🌍</div>
                        <h4 style={{
                            color: '#ffd700',
                            fontSize: window.innerWidth < 768 ? '16px' : '18px',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            lineHeight: '1.3'
                        }}>
                            RECONOCIMIENTO INTERNACIONAL
                        </h4>
                        <p style={{ color: '#ccc', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>
                            Certificación válida en 85+ países con reconocimiento de organizaciones deportivas mundiales
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#222',
                        padding: window.innerWidth < 768 ? '20px' : '30px',
                        borderRadius: '15px',
                        border: '2px solid #dc143c'
                    }}>
                        <div style={{ fontSize: window.innerWidth < 768 ? '32px' : '40px', marginBottom: '15px' }}>💼</div>
                        <h4 style={{
                            color: '#ffd700',
                            fontSize: window.innerWidth < 768 ? '16px' : '18px',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            lineHeight: '1.3'
                        }}>
                            OPORTUNIDADES ELITE
                        </h4>
                        <p style={{ color: '#ccc', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>
                            Acceso exclusivo a posiciones en clubes profesionales, federaciones y centros de alto rendimiento
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#222',
                        padding: window.innerWidth < 768 ? '20px' : '30px',
                        borderRadius: '15px',
                        border: '2px solid #ffd700'
                    }}>
                        <div style={{ fontSize: window.innerWidth < 768 ? '32px' : '40px', marginBottom: '15px' }}>🔬</div>
                        <h4 style={{
                            color: '#ffd700',
                            fontSize: window.innerWidth < 768 ? '16px' : '18px',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            lineHeight: '1.3'
                        }}>
                            INVESTIGACIÓN AVANZADA
                        </h4>
                        <p style={{ color: '#ccc', fontSize: window.innerWidth < 768 ? '12px' : '14px' }}>
                            Acceso a plataformas de investigación y publicaciones científicas internacionales
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
                padding: window.innerWidth < 768 ? '30px 20px' : '40px',
                textAlign: 'center',
                color: '#000'
            }}>
                <h2 style={{
                    fontSize: window.innerWidth < 768 ? '18px' : '24px',
                    fontWeight: '900',
                    marginBottom: '20px',
                    letterSpacing: window.innerWidth < 768 ? '1px' : '2px'
                }}>
                    SPORTS INSTITUTE
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: window.innerWidth < 768 ? '15px' : '20px',
                    marginBottom: '30px',
                    fontSize: window.innerWidth < 768 ? '12px' : '14px'
                }}>
                    
                    {/* <div>
                        <strong>📧 CONTACTO DIRECTO</strong><br />
                        certification@globalsports.edu
                    </div> */}
                </div>
                <div style={{
                    borderTop: '2px solid #000',
                    paddingTop: '20px',
                    fontSize: window.innerWidth < 768 ? '10px' : '12px',
                    fontWeight: 'bold'
                }}>
                    © 2025 Nacional Sports Institute • Excelencia • Innovación • Resultados
                </div>
            </div>
        </div>
    );
};

export default TrainingSchedule;