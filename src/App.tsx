import {useState} from "react";
import "./App.css";
import { Item } from './interface/todo';


function App() {
	const [items, setItems] = useState<Item[]>([]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Utilizar el formdata para obtener el valor del input
		const form = event.currentTarget;
		const formData = new FormData(form);
		const todo = formData.get('todo') as string;

		// Crear un nuevo item
		const newItem: Item = {
			id: crypto.randomUUID(),
			timestamp: new Date(),
			text: todo,
		};

		// Agregar el item a la lista
		setItems([newItem, ...items]);

		// Limpiar el input
		const input = form.querySelector('input[name="todo"]');
		const isInput = input instanceof HTMLInputElement;
		if (isInput) {
			input.value = '';
		}

	};

	const handleDelete = (id: string) => {
		return () => {
			// Filtrar los items que no coincidan con el id
			const newItems = items.filter((item) => item.id !== id);

			// Actualizar la lista de items
			setItems(newItems);
		};
	};

	return (
		<main className="flex flex-col gap-6 w-2/4 mx-auto mt-6">

			{/* Heading */}
			<div className="col-span-full">
				<h1 className="text-3xl font-bold text-center">Todo App</h1>
			</div>

			{/* Form */}
			<section>
				<form onSubmit={handleSubmit} className="flex flex-col pb-4" aria-label='Añadir elementos a la lista'>
					<div>
						<label className="text-base" htmlFor="todo">
							Add a new todo
						</label>
						<input
							className="w-full h-12 px-4 mt-1 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
							type="text"
							id="todo"
							name="todo"
							placeholder="Create a new todo"
						/>
					</div>
					<div className="flex justify-end mt-2">
						<button
							type="submit"
							className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-xl focus:shadow-outline hover:bg-gray-800"
						>
							Add
						</button>
					</div>
				</form>
			</section>

			{/* List */}
			<section className="mt-6">
				<h2 className="text-2xl text-zinc-300 font-semibold">List:</h2>
				{items.length === 0 ? (
					<p>
						<strong>
							There are no items in the list, please add a new item.
						</strong>
					</p>
				) : (
					<ul className="shadow overflow-hidden">
						{items.map((item) => (
							<li key={item.id} className="border-b border-gray-600">
								<div className="py-5">
									<div className="flex items-center justify-between">
										<h3 className="text-base">{item.text}</h3>
										<span className="text-sm text-gray-500">
											{item.timestamp.toLocaleDateString()}
										</span>
									</div>
									<div className="mt-4 flex items-center justify-end">
										<button
											className="font-medium text-red-600 hover:text-red-500 border border-red-600 h-10 px-5 rounded-xl"
											onClick={handleDelete(item.id)}
										>
											Delete
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				)}
			</section>

		</main>
	);
}

export default App;
