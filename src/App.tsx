import "./App.css";
import { Form } from './components/Form';
import { List } from './components/List';
import { Message } from './components/Message';
import { useItemsList } from './hooks/useItemsList';


function App() {
	
	const {items, removeItem, addItem } =useItemsList();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Utilizar el formdata para obtener el valor del input
		const form = event.currentTarget;
		const formData = new FormData(form);
		const todo = formData.get('todo') as string;

		addItem(todo);

		// Limpiar el input
		// Limpiar el input
		const input = form.querySelector('input[name="todo"]');
		const isInput = input instanceof HTMLInputElement;
		if (isInput) {
			input.value = '';
		}

	};

	const handleDelete = (id: string) => {
		return () => {
			removeItem(id);
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
				<Form handleSubmit={handleSubmit} />
			</section>

			{/* List */}
			<section className="mt-6">
				<h2 className="text-2xl text-zinc-300 font-semibold">List:</h2>
				{items.length === 0 ? (
					<Message />
				) : (
					<List items={items} handleDelete={handleDelete} />
				)}
			</section>

		</main>
	);
}

export default App;
