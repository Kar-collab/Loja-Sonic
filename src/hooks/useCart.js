import { useMemo, useState } from 'react';

export function useCart() {
  const [items, setItems] = useState([]);

  function addItem(product) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (!existingItem) {
        return [...currentItems, { ...product, quantity: 1 }];
      }

      return currentItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  }

  function removeItem(productId) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  }

  function changeQty(productId, delta) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clear() {
    setItems([]);
  }

  const count = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const total = useMemo(
    () => items.reduce((totalValue, item) => totalValue + item.price * item.quantity, 0),
    [items]
  );

  return {
    items,
    count,
    total,
    addItem,
    removeItem,
    changeQty,
    clear,
  };
}
