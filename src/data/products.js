import standard from '../assets/standard.png'
import deluxe from '../assets/deluxe.png'
import pass from '../assets/pass.png'
import chav from '../assets/chav.png'
import grip from '../assets/grip.png'
import poster from '../assets/poster.png'
import ursinho from '../assets/ursinho.png'

export const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'jogos', label: 'Jogos' },
  { key: 'dlc', label: 'DLCs' },
  { key: 'colecionaveis', label: 'Colecionáveis' },
  { key: 'acessorios', label: 'Acessórios' },
];

export const platforms = [
  { key: 'todas', label: 'Todas as plataformas' },
  { key: 'ps5', label: 'PS5' },
  { key: 'ps4', label: 'PS4' },
  { key: 'xbox', label: 'Xbox' },
  { key: 'switch', label: 'Nintendo Switch' },
  { key: 'switch2', label: 'Nintendo Switch 2' },
  { key: 'pc', label: 'PC' },
];

export const products = [
  {
    id: 'standard-digital',
    name: 'Sonic Racing: CrossWorlds - Standard Digital',
    image: standard,
    description: 'Edição base para quem quer entrar nas corridas dimensionais com preço mais acessível.',
    price: 299.9,
    oldPrice: 349.9,
    category: 'jogos',
    platforms: ['ps5', 'ps4', 'xbox', 'switch', 'switch2', 'pc'],
    rating: 4.8,
    badge: 'Mais vendido',
    tags: ['jogo base', 'corrida', 'multiplataforma'],
  },
  {
    id: 'deluxe-digital',
    name: 'Digital Deluxe Edition',
    image: deluxe,
    description: 'Inclui o jogo base e o Season Pass com personagens, pistas e veículos adicionais.',
    price: 399.9,
    oldPrice: 449.9,
    category: 'jogos',
    platforms: ['ps5', 'ps4', 'xbox', 'pc'],
    rating: 4.9,
    badge: 'Oferta turbo',
    tags: ['deluxe', 'season pass', 'conteúdo extra'],
  },
  {
    id: 'season-pass',
    name: 'Season Pass CrossWorlds',
    image: pass,
    description: 'Conteúdo extra com pacotes crossover, veículos, pistas, emotes e sons.',
    price: 149.9,
    oldPrice: null,
    category: 'dlc',
    platforms: ['ps5', 'ps4', 'xbox', 'switch', 'switch2', 'pc'],
    rating: 4.7,
    badge: 'DLC',
    tags: ['dlc', 'crossovers', 'personagens'],
  },
  {
    id: 'starter-pack',
    name: 'Starter Pack - Chaveiro + Adesivos',
    image: chav,
    description: 'Kit físico fictício para fãs, com chaveiro de carro de corrida e adesivos temáticos.',
    price: 59.9,
    oldPrice: 79.9,
    category: 'colecionaveis',
    platforms: ['ps5', 'ps4', 'xbox', 'switch', 'switch2', 'pc'],
    rating: 4.5,
    badge: 'Presente',
    tags: ['brinde', 'adesivos', 'colecionável'],
  },
  {
    id: 'controller-grip',
    name: 'Grip de Controle Speed Blue',
    image: grip,
    description: 'Acessório fictício com visual azul, pensado para sessões longas de corrida.',
    price: 89.9,
    oldPrice: null,
    category: 'acessorios',
    platforms: ['ps5', 'ps4', 'xbox', 'switch', 'switch2', 'pc'],
    rating: 4.4,
    badge: null,
    tags: ['controle', 'acessório', 'conforto'],
  },
  {
    id: 'collector-poster',
    name: 'Pôster CrossWorlds Neon',
    image: poster,
    description: 'Pôster fictício em estilo neon para decorar setup gamer.',
    price: 39.9,
    oldPrice: null,
    category: 'colecionaveis',
    platforms: ['ps5', 'ps4', 'xbox', 'switch', 'switch2', 'pc'],
    rating: 4.6,
    badge: 'Novo',
    tags: ['pôster', 'decoração', 'setup'],
  },

  {
    id:'pelucia-sonic',
    name: 'Ursinho de Pelúcia Sonic Classic',
    image: ursinho,
    description: 'Pelúcia super macia de 30cm do ouriço mais rápido do mundo. Perfeito para decorar seu setup.',
    price: 129.90,
    oldPrice: 159.90,
    category: 'colecionaveis',
    platforms: [],
    rating:5.0,
    badge: 'Fofinho',
    tags: ['pelúcia', 'colecionável', 'infantil'],
  }
];
