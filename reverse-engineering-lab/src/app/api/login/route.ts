import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
    const body = await request.headers.get('body') || "";
    const parsed = JSON.parse(body) as { email: string };
    if (parsed?.email === 'admin@email.com') {
        return new Response(JSON.stringify({ message: 'ok' }), {
            headers: {
                'Content-Type': 'application/json',
                'set-cookie': 'loggedIn=true; path=/; HttpOnly; SameSite=Lax; Secure',
            },
        })
    }
    return new Response(JSON.stringify({ message: 'incorrect' }), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}