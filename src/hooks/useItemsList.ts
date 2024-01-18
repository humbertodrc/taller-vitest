import { useState } from 'react';
import { Item } from '../interface/todo';

export const useItemsList = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (todo: string) => {
    // Crear un nuevo item
		const newItem: Item = {
			id: crypto.randomUUID(),
			timestamp: new Date(),
			text: todo,
		};

		// Agregar el item a la lista
		setItems([newItem, ...items]);
  }

  const removeItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return {
    items,
    addItem,
    removeItem,
  }
}