import React, { useState } from 'react';
import '../styles/Footer.css';

export function Footer() {
  // Guardar o e-mail digitado e outro para a mensagem de sucesso
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Função executada quando o usuário clica no botão "OK" ou aperta Enter
  const handleNewsletterSubmit = (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    if (email.trim() !== '') {
      setEnviado(true);
      // Aqui simularíamos o envio para um banco de dados
      console.log(`E-mail cadastrado com sucesso: ${email}`);
      setEmail(''); // Limpa o campo após o envio
    }
  };

  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        
        {/* Coluna 1: Marca */}
        <div className="footer-brand">
          <strong className="footer-logo">Sonic Racing CrossWorlds Store</strong>
          <p className="footer-text">
            Projeto acadêmico em React. Uma vitrine demonstrativa voltada ao público gamer, sem fins comerciais.
          </p>
        </div>

        {/* Coluna 2: Suporte */}
        <div className="footer-links">
          <h4 className="footer-title">Suporte</h4>
          <ul className="footer-list">
            <li><a href="#faq">Políticas de Troca</a></li>
            <li><a href="#termos">Termos de Serviço</a></li>
            <li><a href="#privacidade">Privacidade</a></li>
          </ul>
        </div>

        {/* Coluna 3: Desenvolvedores */}
        <div className="footer-links">
          <h4 className="footer-title">Desenvolvedores</h4>
          <ul className="footer-team-list">
            <li><a href="https://instagram.com/sonicthehedgehogbrasil" target="_blank" rel="noreferrer">@sonicthehedgehogbrasil</a></li>
            <li><a href="https://instagram.com/ryan6_9" target="_blank" rel="noreferrer">@ryan6_9</a></li>
            <li><a href="https://instagram.com/dudekkjkj" target="_blank" rel="noreferrer">@dudekkjkj</a></li>
            <li><a href="https://instagram.com/_karlita.beatrix" target="_blank" rel="noreferrer">@_karlita.beatrix</a></li>
            <li><a href="https://instagram.com/_.yurilimaxz._" target="_blank" rel="noreferrer">@_.yurilimaxz._</a></li>
          </ul>
        </div>

        {/* Coluna 4: Newsletter Interativa */}
        <div className="footer-newsletter">
          <h4 className="footer-title">Fique por dentro</h4>
          
          {/* Se ainda não foi enviado, mostra o formulário. Se foi, mostra mensagem de sucesso */}
          {!enviado ? (
            <>
              <p>Receba atualizações e novos patches do jogo.</p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Atualiza o estado enquanto digita
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

      <hr className="footer-divider" />

      {/* Linha Inferior */}
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} Sonic Game Store. Alguns direitos reservados.</p>
          
          <div className="footer-payments">
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