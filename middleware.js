import {NextResponse} from "next/server";
export function middleware(request){
    console.log("middleare running")
    const token = request.cookies.get("token");

    const path= request.nextUrl.pathname;
    
    if(!token && path.startWith("/products")){
        return NextResponse.redirect(new URL ("/login", request.url));
    }
    return NextResponse.next();
}
export const config ={
    matcher: ["/productsf/:path*"]
}