import { useState } from 'react';
import { STORE_WHATSAPP_NUMBER } from '../config/store.js';
import { formatCurrency } from '../utils/formatters.js';

const initialForm = {
  name: '',
  email: '',
  platform: 'pc',
  payment: 'pix',
};

const platformLabels = {
  pc: 'PC',
  ps5: 'PS5',
  ps4: 'PS4',
  xbox: 'Xbox',
  switch: 'Nintendo Switch',
  switch2: 'Nintendo Switch 2',
};

const paymentLabels = {
  pix: 'PIX',
  card: 'Cartão',
  boleto: 'Boleto',
};

function buildWhatsAppMessage(form, items, total) {
  const productLines = items
    .map((item) => {
      return `• ${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`;
    })
    .join('\n');

  return [
    'Olá! Quero finalizar este pedido da Sonic Game Store:',
    '',
    `Cliente: ${form.name}`,
    `E-mail: ${form.email}`,
    `Plataforma principal: ${platformLabels[form.platform]}`,
    `Pagamento escolhido: ${paymentLabels[form.payment]}`,
    '',
    'Produtos:',
    productLines,
    '',
    `Total: ${formatCurrency(total)}`,
  ].join('\n');
}

export function CheckoutModal({ isOpen, items, total, onClose, onFinish }) {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

  function updateField(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setMessage('Preencha nome e e-mail para concluir o pedido.');
      return;
    }

    if (!items.length) {
      setMessage('Adicione pelo menos um produto ao carrinho antes de finalizar.');
      return;
    }

    const whatsappMessage = buildWhatsAppMessage(form, items, total);

    const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setMessage(
      `Pedido de ${form.name} encaminhado para o WhatsApp. Total: ${formatCurrency(total)}.`
    );

    window.setTimeout(() => {
      setForm(initialForm);
      setMessage('');
      onFinish();
    }, 900);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      <div className="modal-card">
        <div className="drawer-header">
          <div>
            <span className="eyebrow">Checkout</span>
            <h2 id="checkout-title">Finalizar pedido</h2>
          </div>

          <button
            className="icon-button"
            type="button"
            onClick={onClose}
            aria-label="Fechar checkout"
          >
            ×
          </button>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            <span>Nome completo</span>
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Seu nome"
            />
          </label>

          <label>
            <span>E-mail</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="voce@email.com"
            />
          </label>

          <label>
            <span>Plataforma principal</span>
            <select name="platform" value={form.platform} onChange={updateField}>
              <option value="pc">PC</option>
              <option value="ps5">PS5</option>
              <option value="ps4">PS4</option>
              <option value="xbox">Xbox</option>
              <option value="switch">Nintendo Switch</option>
              <option value="switch2">Nintendo Switch 2</option>
            </select>
          </label>

          <label>
            <span>Pagamento</span>
            <select name="payment" value={form.payment} onChange={updateField}>
              <option value="pix">PIX</option>
              <option value="card">Cartão</option>
              <option value="boleto">Boleto</option>
            </select>
          </label>

          <div className="order-summary">
            <strong>Resumo</strong>
            <span>
              {items.reduce((totalItems, item) => totalItems + item.quantity, 0)} item(ns) no pedido
            </span>
            <strong>{formatCurrency(total)}</strong>
          </div>

          <p className="checkout-help">
            Ao confirmar, o site abre o WhatsApp com o resumo do pedido pronto para envio.
          </p>

          {message && <p className="form-message">{message}</p>}

          <button className="button button-primary full" type="submit">
            Confirmar e enviar para WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}