import { useState } from 'react';
import { formatCurrency } from '../utils/formatters.js';

const initialForm = {
  name: '',
  email: '',
  platform: 'pc',
  payment: 'pix',
};

export function CheckoutModal({ isOpen, items, total, onClose, onFinish }) {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setMessage('Preencha nome e e-mail para concluir o pedido.');
      return;
    }

    setMessage(`Pedido confirmado para ${form.name}. Total: ${formatCurrency(total)}.`);

    window.setTimeout(() => {
      setForm(initialForm);
      setMessage('');
      onFinish();
    }, 1200);
  }

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
      <div className="modal-card">
        <div className="drawer-header">
          <div>
            <span className="eyebrow">Checkout</span>
            <h2 id="checkout-title">Finalizar pedido</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Fechar checkout">×</button>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            <span>Nome completo</span>
            <input name="name" value={form.name} onChange={updateField} placeholder="Seu nome" />
          </label>

          <label>
            <span>E-mail</span>
            <input name="email" type="email" value={form.email} onChange={updateField} placeholder="voce@email.com" />
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
            <span>{items.length} produto(s) no pedido</span>
            <strong>{formatCurrency(total)}</strong>
          </div>

          {message && <p className="form-message">{message}</p>}

          <button className="button button-primary full" type="submit">
            Confirmar pedido simulado
          </button>
        </form>
      </div>
    </div>
  );
}
