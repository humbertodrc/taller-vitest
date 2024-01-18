# React + TypeScript + Vitest + RTL

## Configuracion Inicial

### Instalar dependencias

```bash
npm install vitest happy-dom -D
```

¿Que es vitest?

Vitest es un marco de pruebas de próxima generación impulsado por Vite. Es rápido, liviano y fácil de usar. Viene con un conjunto de características que lo hacen ideal para probar aplicaciones modernas.

¿Que es happy-dom?

Es una implementación ligera y simplificada del DOM (Document Object Model) en JavaScript. El DOM es una interfaz de programación que representa y manipula la estructura de documentos HTML y XML como un árbol de objetos.

Happy-DOM se utiliza comúnmente en entornos de prueba para simular el DOM en un entorno de ejecución de JavaScript, permitiendo a los desarrolladores realizar pruebas de unidades o integración sin depender de un navegador real. Esta herramienta es especialmente útil para pruebas en entornos de Node.js o entornos de ejecución de JavaScript sin un navegador completo.

### Configuracion de Vite

En el archivo vite.config.ts agregar la siguiente configuracion:

```typescript
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment:'happy-dom'
  }
})

```

referencia: https://vitest.dev/guide/

### Agregar script de test

En el archivo package.json agregar el siguiente script:

```json
"scripts": {
    "test": "vitest"
  },
```

### Crear primer test de ejemplo

En la carpeta src crear la carpeta test y dentro de ella el archivo App.test.tsx con el siguiente contenido:

```typescript
import { describe, test, expect } from 'vitest'

describe('App', () => {
  test('should render', () => {
    expect(true).toBe(true)
  })
})
```

Anatomia de un test:

- describe: agrupa un conjunto de pruebas
- test: define una prueba
- expect: define una asercion

Estructura de un test:

- Arrange: preparar el escenario
- Act: ejecutar la prueba
- Assert: verificar el resultado

Tipos de test:

- Test End to End (E2E): Prueba de extremo a extremo, prueba la aplicación completa como si fuera un usuario real.
- Test de integración: Prueba la integración entre componentes.
- Test Unitario: Prueba una unidad de código, por ejemplo una función.
- Test estático: Prueba el código sin ejecutarlo.


Ejectuar el comando npm run test

```bash
npm run test
```

referencia: https://vueschool.io/lessons/your-first-test?friend=vueuse

## Agregar RTL (React Testing Library)

¿Que es RTL?

React Testing Library es una biblioteca de utilidades de prueba liviana y simple que le permite escribir pruebas de componentes React que son fáciles de mantener y confiables en el tiempo. Esta biblioteca se basa en dos principios básicos:

- Pruebe el comportamiento del componente desde la perspectiva del usuario.
- Escriba pruebas que simulen la forma en que los usuarios interactúan con su aplicación.

referencia: https://testing-library.com/docs/react-testing-library/intro/

## Simular un usuario real

¿Que hace user-event de RTL?

user-event es una biblioteca que contiene una colección de funciones que simulan eventos del usuario. Estas funciones se pueden usar para probar cómo un usuario interactuaría con su aplicación.

referencia: https://testing-library.com/docs/user-event/intro

instalar dependencia:

```bash
npm install @testing-library/user-event -D
```

Creamos el usuario de prueba en el archivo App.test.tsx

```typescript
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()
```

## Seleccionar elementos

Para seleccionar elementos en el DOM RTL nos provee de una serie de funciones:

- getByText: Selecciona un elemento por su texto.
- getByRole: Selecciona un elemento por su rol.
- getByLabelText: Selecciona un elemento por su etiqueta.
- getByPlaceholderText: Selecciona un elemento por su placeholder.
- getByAltText: Selecciona un elemento por su texto alternativo.
- getByDisplayValue: Selecciona un elemento por su valor.

referencia: https://testing-library.com/docs/dom-testing-library/api-queries

Es importante tener en cuenta los ordenes de prioridad que nos provee RTL para seleccionar elementos:

1. Consultas Accesibles para Todos: Reflejan la experiencia de usuarios visuales/mouse y aquellos que utilizan tecnología asistencial.

- getByRole: Principal preferencia para casi todo, especialmente útil con la opción de nombre.
- getByLabelText: Ideal para campos de formularios, emula la forma en que los usuarios encuentran elementos en formularios.
- getByPlaceholderText: Utilizado cuando solo se dispone de un marcador de posición.
- getByText: Para encontrar elementos no interactivos basados en su contenido de texto.
- getByDisplayValue: Útil para obtener el valor actual de un elemento de formulario con valores llenados.

2. Consultas Semánticas: Selectores compatibles con HTML5 y ARIA.

- getByAltText: Útil para elementos que admiten texto alternativo (img, área, input).
- getByTitle: La atributo de título no es consistentemente leído por lectores de pantalla y no es visible por defecto.

3. IDs de Prueba:

- getByTestId: Recomendado en casos donde no se puede emparejar por rol o texto, o cuando no tiene sentido (por ejemplo, texto dinámico)."

Ejemplos:

```typescript
const button = screen.getByRole('button', { name: /click me/i })
const button = screen.getByText(/click me/i)
const button = screen.getByLabelText(/click me/i)

const input = screen.getByPlaceholderText(/username/i)
const input = screen.getByDisplayValue(/username/i)

const image = screen.getByAltText(/logo/i)

const element = screen.getByTestId('test-id')
```

Ejemplos de roles:

- Botones:
``` typescript
// (<button>, <input type="button">, <input type="submit">, <input type="reset">)
screen.getByRole('button');
screen.getByRole('button', { name: /click me/i });
```

- Enlaces:
``` typescript
// (<a>)
screen.getByRole('link');
screen.getByRole('link', { name: /click me/i });
```

- Campos de Entrada:
``` typescript
// (<input>, <textarea>)
screen.getByRole('textbox');
screen.getByRole('textbox', { name: /username/i });
```

- Para campos de contraseña:
``` typescript
screen.getByRole('textbox', { type: 'password' });
```

- Imágenes:
``` typescript
// (<img>)
screen.getByRole('img');
```

- Listas:
``` typescript
// (<ul>, <ol>, <li>)
screen.getByRole('list');
```

- Para listas ordenadas:
``` typescript
screen.getByRole('list', { type: 'ordered' });
```

- Para elementos de lista:
``` typescript
screen.getByRole('listitem');
```

- Encabezados:
Para todos los encabezados:`
``` typescript
// (<h1>, <h2>, <h3>, <h4>, <h5>, <h6>)
screen.getByRole('heading');
```

- Parrafo:
``` typescript
// (<p>)
screen.getByRole('paragraph');
```

- Para un encabezado específico (por ejemplo, nivel 2):
``` typescript
screen.getByRole('heading', { level: 2 });
```

- Formularios:
``` typescript
// (<form>)
screen.getByRole('form');
```

- Celdas de Tabla:
``` typescript
// (<td>, <th>)
screen.getByRole('cell');
```


Tambien podemos buscar elementos dentro de un elemento:

```typescript
const form = screen.getByRole('form')

const button = form.querySelector('button')
```

## Hacer pruebas en custom hooks

¿Que es un custom hook?

Un custom hook es una función que utiliza otras funciones de React, como useState, useEffect, useContext, etc. Los custom hooks nos permiten reutilizar lógica entre componentes.

referencia: https://es.reactjs.org/docs/hooks-custom.html

Metodos a utilizar:

- renderHook: renderiza un hook en un componente de prueba.
- act: ejecuta efectos secundarios en el hook.

Pasos para probar un custom hook:

1. Importar renderHook y act de RTL.
2. Importar el custom hook a probar.
3. Ejecutar el hook con renderHook, se le debe pasar una función que retorne el hook a probar.
4. Esto nos devuelve un objeto con el resultado del hook (result) y una función para actualizar el hook (rerender). Para ver el resultado del hook podemos acceder a result.current.
5. Para actualizar el hook podemos ejecutar el result.current y llamar a los metodos que nos provee el hook. Esto debe estar envuelto en un act, ya que estamos ejecutando efectos secundarios.

referencia: https://react-hooks-testing-library.com/usage/basic-hooks