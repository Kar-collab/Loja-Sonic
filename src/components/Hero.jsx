import capa from '../assets/capa.png';
import '../styles/Hero.css';

export function Hero() {
  return (
    <section 
      className="hero"
      id="topo"
      /* Passamos a imagem importada para uma variável CSS */
      style={{ '--bg-image': `url(${capa})` }}
      >
      
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">Ready, Set, Warp!</span>
          <h1>Acelere na nova Sonic Game Store</h1>
          <p>
            Tudo o que você precisa para elevar o seu nível de jogo está aqui.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#produtos">Ver catálogo</a>
            <a className="button button-secondary" href="#beneficios">Como funciona</a>
          </div>
        </div>

      </div>
    </section>
  );
}
