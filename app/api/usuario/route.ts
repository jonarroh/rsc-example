import { NextResponse } from 'next/server';
import { usuarios } from '../../db/usuarios';
export async function GET(request: Request) {
	return NextResponse.json(usuarios);
}
