import { describe, test, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useItemsList } from '../../src/hooks/useItemsList';

describe('useItemsList', () => {

  test('should add and remove item', () => {
    const { result } = renderHook(() => useItemsList())
    
    // Comprobar que la lista está vacía
    expect(result.current.items).toEqual([]);
    expect(result.current.items.length).toBe(0);

    // Agregar un item
    act(() => {
      result.current.addItem('Test');
    })

    // Comprobar que la lista tiene un item
    expect(result.current.items.length).toBe(1);

    act(() => {
      result.current.removeItem(result.current.items[0].id);
    })

    expect(result.current.items.length).toBe(0);
  })

})