import {Item} from "../interface/todo";
import { ItemList } from './ItemList';

interface ListProps {
	items: Item[];
	handleDelete: (id: string) => () => void;
}

export const List = ({items, handleDelete}: ListProps) => {
	return (
		<ul className="shadow overflow-hidden">
			{items.map((item) => (
				<ItemList key={item.id} item={item} handleDelete={handleDelete(item.id)} />
			))}
		</ul>
	);
};
