import React from "react";

export default function About() {
	return (
		<div>
			<div className='text-2xl font-bold'>Github Finder</div>
			<p>
				A React app to search Github profiles and see profile details. This project is part
				of the React Front to Back couse by Brad Traversy.
			</p>
			<p className='text-xs text-gray-400'>
				Version <span className='text-white'>1.0.0</span>
			</p>
		</div>
	);
}
