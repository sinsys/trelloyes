import React from 'react';
import './List.css';

export default function List(props){
	console.log(props);
	return (
		<section className="List">
			<header className="List-header">
				<h2>{props.header}</h2>
				<p>I'm a list</p>
			</header>
		</section>
	)
}
