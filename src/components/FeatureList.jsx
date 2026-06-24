import '../styles/FeatureList.css';

const features = [
  {
    title: 'Atendimento de Fã para Fã',
    text: 'Aqui você não fala com robôs, fala com quem ama o Sonic tanto quanto você.'
  },

  {
    title: 'Curadoria Exclusiva',
    text: 'Garanta jogos raros, edições de colecionador e itens importados que ninguém mais tem.'
  },
  
  {
    title: 'Experiência Além da Caixa',
    text: 'Eventos, campeonatos e uma comunidade ativa para você jogar junto.'
  },
];

export function FeatureList() {
  return (
    <section className="section section-dark" id="beneficios">
      
      <div className="container">
        <div className="feature-header"> 
          <h1>Por que comprar na CrossWorlds Store?</h1>
          <p>Muito além de preços acessíveis, nosso propósito é transformar sua paixão por Sonic em uma experiência real, visual e emocionante. O e-commerce tradicional entrega caixas; nós entregamos nostalgia e diversão em alta velocidade.</p>
        </div>

        <div className="feature-grid" >
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <span>★</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
        </div>

      </div>
    </section>
  );
}
