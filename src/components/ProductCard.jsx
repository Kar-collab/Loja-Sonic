// 'import' traz ferramentas externas. Aqui, trazemos a função de formatar dinheiro (ex: 299.9 vira R$ 299,90)
import { formatCurrency } from '../utils/formatters.js';
// 'import' também vincula o arquivo de estilos CSS exclusivo deste card
import '../styles/ProductCard.css';

// 'export function' torna este componente usável em outros arquivos (o ProductGrid vai chamá-lo!)
// '{ product, onAddToCart }' são as PROPS (dados passados de pai para filho).
// 'product' é o objeto com os dados de um jogo/item. 'onAddToCart' é a função disparada ao clicar no botão.
export function ProductCard({ product, onAddToCart }) {
  return (
    // 'article' é uma tag HTML semântica para indicar um conteúdo independente (um card de produto)
    <article className="product-card">
      {/* LÓGICA SHORT-CIRCUIT (&&): Se o produto tiver um badge (ex: 'Mais vendido'), renderiza o <span>. Se não tiver, ignora. */}
      {product.badge && <span className="product-badge">{product.badge}</span>}

      {/* 'aria-hidden="true"' avisa leitores de tela para deficientes visuais ignorarem essa div, pois ela é puramente visual */}
      {/* AQUI FICA APENAS A PARTE DA IMAGEM DO TOPO */}
      <div className="product-art" aria-hidden="true">
        {/* Esta div vazia gera o círculo decorativo branco em cima da imagem através do CSS */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
        />
      </div>{/* <-- A CAIXINHA DA IMAGEM FECHA AQUI! */}

        {/* Caixa que agrupa as informações de texto abaixo da foto */}
        {/* TODO O TEXTO E BOTÕES FICAM NESSA CAIXINHA ABAIXO DA IMAGEM */}
        <div className="product-info">
          {/* 'aria-label' fornece uma leitura por voz limpa para leitores de tela, em vez de ler o caractere '★' */}
          <div className="rating" aria-label={`Nota ${product.rating} de 5`}>★ {product.rating}</div>
          {/* Título dinâmico puxado diretamente do nome do produto cadastrado */}
          <h3>{product.name}</h3>
          {/* Parágrafo com a descrição curta do produto */}
          <p>{product.description}</p>

          <div className="tag-list">
            {/* '.slice(0, 3)' corta o array de tags do produto para garantir que renderize no máximo 3 tags e não quebre o layout */}
            {/* '.map()' faz um loop por essas 3 tags. Para cada tag isolada, ele cria um elemento <span> */}
            {product.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          </div>

        <div className="price-row">
          {/* 'strong' deixa o preço principal em negrito. A função formatCurrency formata o número puro */}
          <strong>{formatCurrency(product.price)}</strong>
          {/* Operador lógico: Se 'product.oldPrice' existir (não for nulo), renderiza o preço riscado (tag 's') */}
          {product.oldPrice && <s>{formatCurrency(product.oldPrice)}</s>}
        </div>
        
        {/* Botão de ação. 'type="button"' impede comportamentos estranhos em formulários */}
        {/* 'onClick={() => onAddToCart(product)}' executa uma arrow function que repassa este produto específico de volta para o carrinho */}
        <button className="button button-primary full" type="button" onClick={() => onAddToCart(product)}>
          Adicionar ao carrinho
        </button>

      </div>
    </article>
  );
}
