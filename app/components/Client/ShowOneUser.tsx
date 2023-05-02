'use client';
import { Usuario } from '@/app/db/usuarios';
import { useEffect, useState } from 'react';
export default function ShowOneUser({
	users,
	index
}: {
	users: Usuario[];
	index: number;
}) {
	const [value, setValue] = useState<number>(index);
	useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<div key={users[value].id}>
			<>
				<div className="w-full h-full flex flex-col items-center justify-center text-black">
					<p>{users[value].nombre}</p>
				</div>
			</>
			<footer>
				<button
					onClick={() => {
						if (value > 0) {
							setValue(value - 1);
						}
					}}>
					prev
				</button>
				<button
					onClick={() => {
						if (value < users.length - 1) {
							setValue(value + 1);
						}
					}}>
					next
				</button>
			</footer>
		</div>
	);
}
