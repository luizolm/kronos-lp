import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Bot,
  Zap,
  XCircle,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
} from "lucide-react";

export default function InteractiveComparison() {
  const [activeTab, setActiveTab] = useState("kronos");

  const tabs = [
    {
      id: "old",
      label: "O Velho Jeito",
      icon: <Layers size={18} />,
      title: "Ferramentas Fragmentadas",
      description:
        "Vendedores pulando entre abas, planilhas bagunçadas e o WhatsApp web perdendo mensagens importantes. Dados descentralizados matam a previsibilidade.",
      metrics: [
        {
          label: "Tempo Resposta Médio",
          value: "3 a 5 horas",
          icon: <Clock size={16} color="var(--danger)" />,
        },
        {
          label: "Taxa de Perda de Dados",
          value: "Alta (Desconexa)",
          icon: <XCircle size={16} color="var(--danger)" />,
        },
        {
          label: "Engajamento Fora de Hora",
          value: "Nenhum",
          icon: <AlertTriangle size={16} color="var(--warning)" />,
        },
      ],
      color: "var(--danger)",
      bgImage:
        "linear-gradient(45deg, rgba(239, 68, 68, 0.05) 0%, transparent 100%)",
      borderColor: "rgba(239, 68, 68, 0.2)",
    },
    {
      id: "generic",
      label: "Bots Genéricos",
      icon: <Bot size={18} />,
      title: "Robôs com Opções Fechadas",
      description:
        'Menus engessados ("Digite 1 para Vendas") que travam o usuário. A intenção real do cliente é perdida num labirinto automático frio e irritante.',
      metrics: [
        {
          label: "Atrito na Conversa",
          value: "Muito Alto",
          icon: <XCircle size={16} color="var(--danger)" />,
        },
        {
          label: "Entendimento do cliente",
          value: "Básico",
          icon: <AlertTriangle size={16} color="var(--warning)" />,
        },
        {
          label: "Integração com seu sistema",
          value: "Improvisada",
          icon: <AlertTriangle size={16} color="var(--warning)" />,
        },
      ],
      color: "var(--warning)",
      bgImage:
        "linear-gradient(45deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%)",
      borderColor: "rgba(245, 158, 11, 0.2)",
    },
    {
      id: "kronos",
      label: "O Jeito Kronos",
      icon: <Zap size={18} />,
      title: "Sistema Operacional Integrado",
      description:
        "Hub central. A IA que atende em 1 segundo via áudio ou texto, detecta emoção, qualifica, cria a Oportunidade no CRM e avisa o vendedor — tudo numa tela só.",
      metrics: [
        {
          label: "Tempo Resposta",
          value: "< 2 Segundos (Ao Vivo)",
          icon: <CheckCircle2 size={16} color="var(--success)" />,
        },
        {
          label: "Qualificação Preditiva",
          value: "Completa e automática",
          icon: <CheckCircle2 size={16} color="var(--success)" />,
        },
        {
          label: "Atualização das vendas",
          value: "Tempo Real",
          icon: <CheckCircle2 size={16} color="var(--success)" />,
        },
      ],
      color: "var(--purple)",
      bgImage:
        "linear-gradient(135deg, rgba(130, 87, 229, 0.1) 0%, rgba(97, 218, 251, 0.05) 100%)",
      borderColor: "rgba(130, 87, 229, 0.3)",
    },
  ];

  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section
      className="comparison-section"
      style={{
        padding: "80px 0",
        borderTop: "1px solid var(--dark-3)",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              background: "var(--dark-2)",
              border: "1px solid var(--dark-3)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
              padding: "6px 16px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            Comparativo
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Por que migrar para a{" "}
            <span style={{ color: "var(--text-primary)" }}>Kronos?</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Enquanto as ferramentas atuais sobrecarregam sua equipe, a Kronos
            centraliza tudo em um único lugar, rápido e organizado.
          </p>
        </div>

        {/* Tab Switcher Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.8fr)",
            gap: "40px",
            alignItems: "start",
          }}
          className="comparison-layout"
        >
          {/* Tabs Menu */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "24px",
                    background: isActive
                      ? "var(--dark-2)"
                      : "transparent",
                    border: `1px solid ${isActive ? tab.borderColor : "var(--dark-3)"}`,
                    borderRadius: "16px",
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="tab-button"
                  onMouseEnter={(e) => {
                    if (!isActive)
                      e.currentTarget.style.background =
                        "var(--overlay-bg)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: isActive
                        ? `rgba(${tab.color === "#ef4444" ? "239,68,68" : tab.color === "#f59e0b" ? "245,158,11" : "130,87,229"}, 0.2)`
                        : "var(--overlay-bg)",
                      color: isActive ? tab.color : "var(--text-secondary)",
                      transition: "all 0.3s",
                    }}
                  >
                    {tab.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: isActive ? 600 : 500,
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {tab.label}
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      style={{
                        position: "absolute",
                        right: "16px",
                        display: "flex",
                      }}
                    >
                      <ArrowRight size={18} color={tab.color} />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Content Window */}
          <div
            style={{
              background: "var(--dark-2)",
              border: `1px solid ${activeContent.borderColor}`,
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              minHeight: "400px",
            }}
            className="content-window"
          >
            {/* Animated Background Mesh */}
            <motion.div
              key={`bg-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "absolute",
                inset: 0,
                background: activeContent.bgImage,
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: "auto" }}>
                  <div
                    style={{
                      color: activeContent.color,
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    Processo
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "28px",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: "var(--text-primary)",
                      marginBottom: "24px",
                    }}
                  >
                    {activeContent.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "40px",
                      maxWidth: "500px",
                    }}
                  >
                    {activeContent.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                    borderTop: "1px solid var(--dark-3)",
                    paddingTop: "32px",
                  }}
                >
                  {activeContent.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                          fontWeight: 500,
                        }}
                      >
                        {metric.icon} {metric.label}
                      </div>
                      <div
                        style={{
                          fontSize: "15px",
                          color: "var(--text-primary)",
                          fontWeight: 600,
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .comparison-layout {
            grid-template-columns: 1fr !important;
          }
          .content-window {
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
