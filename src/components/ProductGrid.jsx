// IMPORTAÇÃO CONECTIVA: Este arquivo precisa conhecer o 'ProductCard' para conseguir carimbá-lo na tela
import { ProductCard } from './ProductCard.jsx';

// Recebe via props o array 'products' filtrado e a função de adicionar ao carrinho
export function ProductGrid({ products, onAddToCart }) {

  {/* TELA DE ERRO (Early Return): Se o array estiver vazio (!products.length avalia como 0, que vira 'true' com a exclamação) */}
  if (!products.length) {
    // Interrompe a execução da função aqui e exibe uma tela amigável avisando que a busca não trouxe resultados
    return (
      <div className="empty-state">
        <h3>Nenhum produto encontrado</h3>
        <p>Tente mudar a busca, a categoria ou a plataforma.</p>
      </div>
    );
  }

  // TELA DE SUCESSO: Se existirem produtos no array, o código passa pelo 'if' acima e chega aqui
  return (
    // Div container que o CSS transforma em uma malha de colunas (Grid)
    <div className="product-grid">
      {/* O GRANDE LOOP: '.map()' percorre cada objeto do produto contido no array 'products' */}
      {products.map((product) => (
        // Para CADA produto encontrado, ele renderiza (carimba) um componente <ProductCard />
        // 'key={product.id}' dá o ID único que o React precisa para gerenciar a renderização de forma veloz
        // 'product={product}' passa os dados específicos desse produto atual para dentro das props do card
        // 'onAddToCart={onAddToCart}' repassa a função do carrinho adiante para que o botão lá dentro saiba o que fazer
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
