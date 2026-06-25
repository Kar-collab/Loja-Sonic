import { useEffect, useState } from 'react';
import capa from '../assets/capa.png';
import deluxe from '../assets/deluxe.png';
import poster from '../assets/poster.png';
import standard from '../assets/standard.png';
import '../styles/Hero.css';

const heroSlides = [
  {
    id: 'corrida-dimensional',
    image: capa,
    eyebrow: 'Ready, Set, Warp!',
    title: 'Acelere na nova Sonic Game Store',
    description: 'Jogos, DLCs e colecionáveis para entrar no clima de Sonic Racing: CrossWorlds.',
  },
  {
    id: 'deluxe-edition',
    image: deluxe,
    eyebrow: 'Oferta turbo',
    title: 'Digital Deluxe com conteúdo extra',
    description: 'Garanta jogo base, Season Pass, personagens, pistas e veículos adicionais em um só pacote.',
  },
  {
    id: 'colecionaveis',
    image: poster,
    eyebrow: 'Setup gamer',
    title: 'Produtos físicos para fãs do Sonic',
    description: 'Pôsteres, pelúcias, chaveiros, camisetas e acessórios para decorar seu espaço.',
  },
  {
    id: 'standard',
    image: standard,
    eyebrow: 'Comece agora',
    title: 'Edição Standard para todos os pilotos',
    description: 'A opção ideal para quem quer correr pelas dimensões pagando menos.',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  function goToSlide(index) {
    setCurrentSlide(index);
  }

  function nextSlide() {
    setCurrentSlide((current) => (current + 1) % heroSlides.length);
  }

  function previousSlide() {
    setCurrentSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  }

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 5500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section
      className="hero"
      id="topo"
      style={{ '--bg-image': `url(${slide.image})` }}
    >
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">{slide.eyebrow}</span>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#produtos">
              Ver catálogo
            </a>
            <a className="button button-secondary" href="#beneficios">
              Como funciona
            </a>
          </div>
        </div>

        <div className="hero-carousel" aria-label="Destaques da loja">
          <button
            className="carousel-arrow"
            type="button"
            onClick={previousSlide}
            aria-label="Slide anterior"
          >
            ‹
          </button>

          <div className="carousel-card">
            <img src={slide.image} alt={`Destaque: ${slide.title}`} />

            <div className="carousel-caption">
              <strong>{slide.eyebrow}</strong>
              <span>{slide.title}</span>
            </div>
          </div>

          <button
            className="carousel-arrow"
            type="button"
            onClick={nextSlide}
            aria-label="Próximo slide"
          >
            ›
          </button>

          <div className="carousel-dots" role="tablist" aria-label="Escolher destaque">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                className={index === currentSlide ? 'active' : ''}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Mostrar destaque ${index + 1}`}
                aria-pressed={index === currentSlide}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}