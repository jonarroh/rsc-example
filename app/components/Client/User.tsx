import { Usuario } from '@/app/db/usuarios';

const getUsers = async () => {
	const res = await fetch('api/usuario');
	const users: Usuario[] = await res.json();
	return users;
};

export default async function User() {
	const users = await getUsers();

	return (
		<section className="w-full h-full flex flex-col items-center justify-center">
			{users.map(user => (
				<div key={user.id}>
					<p>{user.nombre}</p>
				</div>
			))}
		</section>
	);
}
