import { Suspense } from 'react';
import Button from './components/Server/Button';
import { Usuario } from './db/usuarios';
import ShowOneUser from './components/Client/ShowOneUser';
const getUsers = async () => {
	const res = await fetch('http://localhost:3000/api/usuario');
	const users: Usuario[] = await res.json();
	return users;
};
export default async function Home() {
	const users = await getUsers();
	return (
		<main
			className={` flex flex-col items-center justify-center min-h-screen py-2 bg-white `}>
			<h1 className="text-6xl font-bold text-black">
				probando react server components
			</h1>
			<div className=" w-1/2 h-4/6 text-black">
				{'esto se renderiza en el servidor'}
				{<Button />}
			</div>
			<div>
				<Suspense
					fallback={<div className="text-black">loading...</div>}>
					{
						<section className="w-full h-full flex flex-col items-center justify-center text-black">
							{<ShowOneUser users={users} index={0} />}
						</section>
					}
				</Suspense>
			</div>
		</main>
	);
}
