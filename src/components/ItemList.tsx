import {Item} from "../interface/todo";

interface ItemListProps {
	item: Item;
	handleDelete: () => void;
}

export const ItemList = ({item, handleDelete}: ItemListProps) => {
	return (
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
						onClick={handleDelete}
					>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
};
