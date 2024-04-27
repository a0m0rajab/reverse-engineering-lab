import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const isLoggedIn = request.cookies.get('loggedIn')?.value || false;
    if(isLoggedIn !== 'true') {
        return new Response(JSON.stringify({ message: 'unauthorized' }), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    const data = [
        {name: 'Joe', surname:"Jack", sales: 2400, email: "joe@randomemail.com"},
        {name: 'John', surname:"Doe", sales: 4560, email: "john@randomemail.com"},
        {name: 'Jane', surname:"Doe", sales: 1390, email: "jame@randomemail.com"},
        {name: 'Janice', surname:"Doe", sales: 980, email: "janice@randomemail.com"},
    ];
    return new Response(JSON.stringify({ data }), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}