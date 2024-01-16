import "./App.css";

function App() {
	return (
    <main className="flex flex-col gap-6 w-2/4 mx-auto">
      {/* Heading */}
			<div className="col-span-full">
				<h1 className="text-3xl font-bold text-center">Todo App</h1>
			</div>

      {/* Form */}
			<section>
				<form className="flex flex-col pb-4">
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
						<button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-xl focus:shadow-outline hover:bg-gray-800">
							Add
						</button>
					</div>
				</form>
			</section>

			{/* List */}
			<section className="mt-6">
				<h2 className="text-xl text-zinc-300 font-semibold">List:</h2>
				<ul className="shadow overflow-hidden">
					<li className="border-b border-gray-600">
						<div className="py-5">
							<div className="flex items-center justify-between">
								<h3 className="text-lg leading-6 font-medium">
									Esta es una tarea muy importante
								</h3>
							</div>
							<div className="mt-4 flex items-center justify-end">
								<button className="font-medium text-red-600 hover:text-red-500 border border-red-600 h-10 px-5 rounded-xl">
									Delete
								</button>
							</div>
						</div>
					</li>
					<li className="border-b border-gray-600">
						<div className="py-5">
							<div className="flex items-center justify-between">
								<h3 className="text-lg leading-6 font-medium">
									Esta es una tarea muy importante
								</h3>
							</div>
							<div className="mt-4 flex items-center justify-end">
								<button className="font-medium text-red-600 hover:text-red-500 border border-red-600 h-10 px-5 rounded-xl">
									Delete
								</button>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</main>
	);
}

export default App;
