import { useMemo, useState } from 'react';

import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { FeatureList } from './components/FeatureList.jsx';
import { ProductFilters } from './components/ProductFilters.jsx';
import { ProductGrid } from './components/ProductGrid.jsx';
import { CartDrawer } from './components/CartDrawer.jsx';
import { CheckoutModal } from './components/CheckoutModal.jsx';
import { Footer } from './components/Footer.jsx';

import { useCart } from './hooks/useCart.js';
import { products, categories, platforms } from './data/products.js';
import { normalizeText } from './utils/formatters.js';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedPlatform, setSelectedPlatform] = useState('todas');
  const [search, setSearch] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const cart = useCart();

  const filteredProducts = useMemo(() => {
    const term = normalizeText(search);

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'todos' || product.category === selectedCategory;

      const matchesPlatform =
        selectedPlatform === 'todas' || product.platforms.includes(selectedPlatform);

      const searchableContent = normalizeText(
        `${product.name} ${product.description} ${product.tags.join(' ')}`
      );

      const matchesSearch = !term || searchableContent.includes(term);

      return matchesCategory && matchesPlatform && matchesSearch;
    });
  }, [selectedCategory, selectedPlatform, search]);

  function handleCheckout() {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  }

  return (
    <>
      <Header cartCount={cart.count} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <Hero />

        <FeatureList />

        <section className="section" id="produtos">
          <div className="section-heading">
            <span className="eyebrow">Catálogo</span>
            <h2>Produtos CrossWorlds</h2>
          </div>

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

          <ProductGrid
            products={filteredProducts}
            onAddToCart={cart.addItem}
          />
        </section>
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        items={cart.items}
        total={cart.total}
        onClose={() => setIsCartOpen(false)}
        onChangeQty={cart.changeQty}
        onRemove={cart.removeItem}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        items={cart.items}
        total={cart.total}
        onClose={() => setIsCheckoutOpen(false)}
        onFinish={() => {
          cart.clear();
          setIsCheckoutOpen(false);
        }}
      />

      <Footer />
    </>
  );
}