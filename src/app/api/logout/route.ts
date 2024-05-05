import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
        return new Response(JSON.stringify({ message: 'ok' }), {
            headers: {
                'Content-Type': 'application/json',
                'set-cookie': 'loggedIn = true; path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=-1',
            },
        })
}