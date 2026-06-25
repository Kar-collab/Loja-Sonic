import React from 'react';
// 1. Importando a logo que está na sua pasta assets
import logoImg from '../assets/logo.png'; 
import '../styles/Header.css'

export function Header({ cartCount, onOpenCart }) {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegação principal">
        
        {/* Link da marca atualizado com a logo nova */}
        <a className="brand" href="#topo" aria-label="Voltar ao início">
          <img 
            src={logoImg} 
            alt="Sonic Game Store Logo" 
            className="brand-logo-img" 
          />
          <span>Sonic Game Store</span>
        </a>

        <div className="nav-links">
          <a href="#produtos">Produtos</a>
          <a href="#beneficios">Sobre</a>
          <a href="#contato">Contato</a>
        </div>

        {/* Botão do carrinho com o contador reativo */}
        <button className="cart-button" type="button" onClick={onOpenCart}>
          <span className="cart-text">Carrinho</span>
          {cartCount > 0 && (
            <span className="cart-count-badge">{cartCount}</span>
          )}
        </button>
        
      </nav>
    </header>
  );
}
