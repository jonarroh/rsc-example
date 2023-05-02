export interface Usuario {
	nombre: string;
	id: string;
	edad: number;
	color: string;
	favorito: string;
}

export const usuarios: Usuario[] = [
	{
		nombre: 'Usuario 1',
		id: crypto.randomUUID(),
		edad: 25,
		color: 'azul',
		favorito: 'películas'
	},
	{
		nombre: 'Usuario 2',
		id: crypto.randomUUID(),
		edad: 30,
		color: 'rojo',
		favorito: 'música'
	},
	{
		nombre: 'Usuario 3',
		id: crypto.randomUUID(),
		edad: 28,
		color: 'verde',
		favorito: 'libros'
	}
];
