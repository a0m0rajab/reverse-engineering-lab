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
        {type:"refund", status:"declined", date:"14-04-2024",name: 'Ahmad', surname:"Jack", sales: 2400, email: "joe@randomemail.com"},
        {type:"Sale", status:"approved", date:"14-04-2024",name: 'Mohammad', surname:"Doe", sales: 4560, email: "john@randomemail.com"},
        {type:"Subscirption", status:"approved", date:"14-04-2024",name: 'Abdullah', surname:"Doe", sales: 1390, email: "jame@randomemail.com"},
        {type:"refund", status:"approved", date:"14-04-2024",name: 'Abdurrahman', surname:"Doe", sales: 980, email: "janice@randomemail.com"},
    ];
    return new Response(JSON.stringify({ data }), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}