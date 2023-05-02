'use client';

import { useState } from 'react';

function Button() {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleClick = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			<section className="w-full h-full flex flex-col items-center justify-center">
				{isVisible && (
					<p className="text-red-500">hola salgo del cliente</p>
				)}
				<div className="block">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={handleClick}>
						Click me
					</button>
				</div>
			</section>
		</>
	);
}

export default Button;
