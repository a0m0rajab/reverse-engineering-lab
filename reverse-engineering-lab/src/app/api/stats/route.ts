import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    const stats = {
        revenue: 240407,
        subs: 1403,
        sales: 12006,
        active: 572
    };
    return new Response(JSON.stringify({ stats }), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}