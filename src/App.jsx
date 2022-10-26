import { useState } from "react";
import "./App.css";
import {
	CreateTodoButton,
	TodoCounter,
	TodoItem,
	TodoList,
	TodoSearch,
} from "./components/index";

function App() {
	const arr = [
		{ name: "Cebolla", completed: false },
		{ name: "Tomate", completed: false },
		{ name: "Lechuga", completed: false },
	];

	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{arr.map((el, i) => (
					<TodoItem key={i} name={el.name} />
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}

export default App;
