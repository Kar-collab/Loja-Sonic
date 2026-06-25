import { useState } from 'react';
import {
  STORE_EMAIL,
  STORE_WHATSAPP_DISPLAY,
  STORE_WHATSAPP_NUMBER,
} from '../config/store.js';
import '../styles/Footer.css';

export function Footer() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleNewsletterSubmit(event) {
    event.preventDefault();

    if (email.trim() !== '') {
      setEnviado(true);
      console.log(`E-mail cadastrado com sucesso: ${email}`);
      setEmail('');
    }
  }

  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div className="footer-brand">
          <strong className="footer-logo">Sonic Racing CrossWorlds Store</strong>

          <p className="footer-text">
            Loja demonstrativa em React com catálogo, carrinho, checkout e encaminhamento de pedido por WhatsApp.
          </p>

          <div className="footer-socials" aria-label="Redes sociais da loja">
            <a
              href="https://instagram.com/sonicthehedgehogbrasil"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href={`https://wa.me/${STORE_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="#produtos">Catálogo</a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Atendimento</h4>

          <ul className="footer-list">
            <li>
              <a
                href={`https://wa.me/${STORE_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {STORE_WHATSAPP_DISPLAY}
              </a>
            </li>

            <li>
              <a href={`mailto:${STORE_EMAIL}`}>{STORE_EMAIL}</a>
            </li>

            <li>
              <span>Segunda a sexta • 9h às 18h</span>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Loja</h4>

          <ul className="footer-list">
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#beneficios">Benefícios</a></li>
            <li><a href="#topo">Destaques</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4 className="footer-title">Fique por dentro</h4>

          {!enviado ? (
            <>
              <p>
                Receba novidades, promoções fictícias e novos produtos adicionados ao catálogo.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />

                <button type="submit">OK</button>
              </form>
            </>
          ) : (
            <p className="newsletter-success">
              ✓ Valeu! Você está na lista de pilotos.
            </p>
          )}
        </div>
      </div>

      <div className="container footer-feature-row">
        <div>
          <strong>Compra rápida</strong>
          <span>Resumo do pedido direto no WhatsApp.</span>
        </div>

        <div>
          <strong>Projeto React</strong>
          <span>Componentes, estados, filtros e carrinho.</span>
        </div>

        <div>
          <strong>Layout responsivo</strong>
          <span>Visual adaptado para celular e computador.</span>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>
            &copy; {new Date().getFullYear()} Sonic Game Store. Projeto acadêmico, sem vendas reais.
          </p>

          <div className="footer-payments" aria-label="Formas de pagamento simuladas">
            <span className="payment-badge">PIX</span>
            <span className="payment-badge">VISA</span>
            <span className="payment-badge">MASTERCARD</span>
            <span className="payment-badge">BOLETO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}