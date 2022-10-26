import React from "react";

export const TodoItem = (props) => {
	return (
		<ul>
			<li>
				<span>Nombre: {props.name}</span>
			</li>
			<li>
				<span>Completado: {props.completed ? "Sí" : "No"}</span>
			</li>
		</ul>
	);
};
