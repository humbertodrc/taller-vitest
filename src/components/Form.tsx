
interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ handleSubmit }: FormProps) => {
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col pb-4"
			aria-label="Añadir elementos a la lista"
		>
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
	);
};
