import React from "react";

// Componente para cada card do Bento Grid
const BentoCard = ({ title, content, className }: any) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default function Test() {
  const cards = [
    {
      id: 1,
      title: "Análise de Dados",
      content: "Visualização e exploração de dados com gráficos interativos",
      className: "col-span-2 row-span-1",
    },
    {
      id: 2,
      title: "Automação",
      content: "Processos automatizados para maior eficiência",
      className: "col-span-1 row-span-2",
    },
    {
      id: 3,
      title: "Inteligência Artificial",
      content: "Modelos de IA para potencializar seus negócios",
      className: "col-span-1 row-span-1",
    },
    {
      id: 4,
      title: "Cloud Computing",
      content: "Soluções em nuvem escaláveis e seguras",
      className: "col-span-1 row-span-1",
    },
    {
      id: 5,
      title: "UX Design",
      content: "Experiências de usuário intuitivas e atraentes",
      className: "col-span-2 row-span-1",
    },
    {
      id: 6,
      title: "Desenvolvimento Mobile",
      content: "Aplicativos nativos e multiplataforma",
      className: "col-span-3 row-span-1",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Bento Grid Layout</h1>

      {/* Grid principal com gap entre os cards */}
      <div className="grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1">
        {cards.map((card) => (
          <BentoCard
            key={card.id}
            title={card.title}
            content={card.content}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
}
