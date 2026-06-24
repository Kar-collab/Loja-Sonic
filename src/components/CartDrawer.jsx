import { formatCurrency } from '../utils/formatters.js';

export function CartDrawer({ isOpen, items, total, onClose, onChangeQty, onRemove, onCheckout }) {
  return (
    <aside className={`drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      <div className="drawer-header">
        <div>
          <span className="eyebrow">Pedido</span>
          <h2>Meu carrinho</h2>
        </div>
        <button className="icon-button" type="button" onClick={onClose} aria-label="Fechar carrinho">×</button>
      </div>

      <div className="drawer-body">
        {items.length === 0 ? (
          <p className="muted">Seu carrinho ainda está vazio.</p>
        ) : (
          items.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <small>{formatCurrency(item.price)}</small>
              </div>
              <div className="qty-control">
                <button type="button" onClick={() => onChangeQty(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => onChangeQty(item.id, 1)}>+</button>
              </div>
              <button className="remove-button" type="button" onClick={() => onRemove(item.id)}>
                Remover
              </button>
            </div>
          ))
        )}
      </div>

      <div className="drawer-footer">
        <div className="total-row">
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </div>
        <button className="button button-primary full" type="button" disabled={!items.length} onClick={onCheckout}>
          Finalizar pedido
        </button>
      </div>
    </aside>
  );
}
