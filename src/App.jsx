// 'useState' gerencia a memória do site. 'useMemo' calcula filtros de forma inteligente, evitando lentidão.
import { useMemo, useState } from 'react';
// IMPORTAÇÕES VISUAIS: Traz todos os pedacinhos da interface que vão compor a tela
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { FeatureList } from './components/FeatureList.jsx';
import { ProductFilters } from './components/ProductFilters.jsx';
import { ProductGrid } from './components/ProductGrid.jsx';
import { CartDrawer } from './components/CartDrawer.jsx';
import { CheckoutModal } from './components/CheckoutModal.jsx';
import { Footer } from './components/Footer.jsx';
// IMPORTAÇÕES DE LÓGICA E DADOS:
import { useCart } from './hooks/useCart.js';// Traz as ações do carrinho (adicionar, remover, contar itens)
import { products, categories, platforms } from './data/products.js'; 
import { normalizeText } from './utils/formatters.js';// Função que remove acentos e deixa letras minúsculas

export default function App() {
  // CAIXAS DE MEMÓRIA (ESTADOS - useState):
  // Guardam o que o usuário escolheu. Toda vez que um valor aqui muda, a tela se atualiza sozinha.
  const [selectedCategory, setSelectedCategory] = useState('todos');// Categoria atual do filtro
  const [selectedPlatform, setSelectedPlatform] = useState('todas');// Plataforma atual do filtro
  const [search, setSearch] = useState(''); // O texto digitado na busca
  const [isCartOpen, setIsCartOpen] = useState(false); // Controla se o carrinho lateral está aberto
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);// Controla se a tela de finalização de compra está aberta

  // Ativa o gancho (hook) que gerencia todas as funções matemáticas e de lista do carrinho de compras
  const cart = useCart();

  // O FILTRADOR INTELIGENTE (useMemo):
  // Ele filtra a lista inteira de produtos com base no que o usuário escolheu acima.
  // Graças ao 'useMemo', ele só refaz esse cálculo se a categoria, a plataforma ou a busca mudarem.
  const filteredProducts = useMemo(() => {
    // Limpa o termo de busca tirando espaços extras e acentos (ex: "Pôster" vira "poster")
    const term = normalizeText(search);

    // '.filter()' percorre o catálogo original e decide item por item quem passa no teste
    return products.filter((product) => {
      // Teste 1: É a categoria 'todos' ou bate com a categoria selecionada?
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
      // Teste 2: É a plataforma 'todas' ou o produto inclui a plataforma selecionada no array dele?
      const matchesPlatform = selectedPlatform === 'todas' || product.platforms.includes(selectedPlatform);
      // Monta um "blocão de texto" juntando o nome, descrição e tags do produto em minúsculo para facilitar a busca
      const searchableContent = normalizeText(`${product.name} ${product.description} ${product.tags.join(' ')}`);
      // Teste 3: O usuário não digitou nada? Se digitou, o termo está dentro do blocão de texto do produto?
      const matchesSearch = !term || searchableContent.includes(term);
      // O produto só vai para a tela se passar nos três testes ao mesmo tempo (Operador &&)
      return matchesCategory && matchesPlatform && matchesSearch;
    });
  }, [selectedCategory, selectedPlatform, search]); // Lista de dependências do useMemo

  // Função disparada quando o usuário clica em "Finalizar Compra" dentro do carrinho lateral
  function handleCheckout() {
    setIsCartOpen(false); // Fecha o carrinho lateral
    setIsCheckoutOpen(true); // Abre a janela (modal) de sucesso/finalização
  }

  return (
    <> {/* Fragmento do React (<>): serve para envelopar os componentes sem criar uma div desnecessária no HTML */}

      {/* 1. TOPO: Passa a quantidade de itens no carrinho e a função que altera o estado 'isCartOpen' para true */}
      <Header cartCount={cart.count} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <Hero />
        <FeatureList />

        <section className="section" id="produtos">
          <div className="section-heading">
            <span className="eyebrow">Catálogo</span>
            <h2>Produtos CrossWorlds</h2>
          </div>

        {/* 2. FILTROS (O Painel de Controle): Recebe os dados das listas e os estados. */}
        {/* 'onCategoryChange={setSelectedCategory}' é a conexão: quando o select mudar lá dentro, ele altera a variável de memória aqui no App.jsx! */}
          <ProductFilters
            categories={categories}
            platforms={platforms}
            selectedCategory={selectedCategory}
            selectedPlatform={selectedPlatform}
            search={search}
            onCategoryChange={setSelectedCategory}
            onPlatformChange={setSelectedPlatform}
            onSearchChange={setSearch}
          />

          {/* 3. A GRADE (O Organizador): Recebe apenas os produtos já filtrados pelo useMemo. */}
          {/* Também passa a função 'cart.addItem' para que o botão de comprar adicione o item ao carrinho global */}
          <ProductGrid products={filteredProducts} onAddToCart={cart.addItem} />
        </section>
      </main>

      {/* 4. CARRINHO LATERAL: Abre ou fecha se 'isOpen' for true ou false. Recebe as funções de mudar quantidade e remover */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cart.items}
        total={cart.total}
        onClose={() => setIsCartOpen(false)}
        onChangeQty={cart.changeQty}
        onRemove={cart.removeItem}
        onCheckout={handleCheckout}
      />

      {/* 5. MODAL DE PAGAMENTO: Mostra o resumo final e limpa o carrinho ('cart.clear()') ao finalizar */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        items={cart.items}
        total={cart.total}
        onClose={() => setIsCheckoutOpen(false)}
        onFinish={() => {
          cart.clear(); // Esvazia o carrinho de compras
          setIsCheckoutOpen(false); // Fecha a janela do modal
        }}
      />

      <Footer />
    </>
  );
}
