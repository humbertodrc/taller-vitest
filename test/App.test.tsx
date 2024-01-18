import React from "react";
import { describe, test, expect} from 'vitest';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";


describe("Pruebas en <App />", () => {
	// test('Debe pasar', () => {
	//   // Arrange
	//   const number1 = 1;
	//   const number2 = 2;

	//   // Act
	//   const result = number1 + number2;

	//   // Assert
	//   expect(result).toBe(3);

	// })

	// test("Render <App />", () => {
	// 	// Arrange
	// 	render(<App />);

	// 	// Act
	// 	const heading = screen.getByText(/Todo App/i);
	// 	// const heading = screen.getByRole('heading', { name: /Todo App/i });

	// 	// Assert
	// 	expect(heading).toBeDefined();
	// 	// screen.debug();
	// });

	test("Should add item and remove item", async() => {
		// Creamos el usuario
    const user = userEvent.setup();

    // Renderizamos el componente
    render(<App />);

		// Buscamos el input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // Buscamos el formulario
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    // Buscamos el botón dentro del formulario
    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // Simulamos el evento de escribir en el input
    await user.type(input, "New item");

    // Simulamos el evento de enviar el formulario
    await user.click(button!);
    // screen.debug();

    // Validamos que se pueda añaadir otro item
    await user.type(input, "New item 2");
    await user.click(button!);
    // screen.debug();


    // Validamos que se creo la lista
    const list = screen.getByRole('list')
    expect(list).toBeDefined()

    // Validamos que se crearon dos items
    expect(list.childNodes.length).toBe(2)
    // Otra forma de hacerlo
    expect(list.children.length).toBe(2)

    // Buscamos el ultimo item añadido
    const item = screen.getByText(/New item 2/i)
    expect(item).toBeDefined()
    // screen.debug();

    // Buscamos dentro de la lista el boton de eliminar del ultimo item
    const deleteButton = list.querySelector('button')
    expect(deleteButton).toBeDefined()

    // Simulamos el evento de eliminar el ultimo item
    await user.click(deleteButton!)
    // screen.debug();

    // Validamos que se elimino el ultimo item
    expect(list.childNodes.length).toBe(1)
	});
});
