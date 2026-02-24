import {NextResponse} from "next/server";
export function proxy(request){
    console.log("middleare running")
    const token = request.cookies.get("token")?.value;

    const path= request.nextUrl.pathname;
    
    if( path.startsWith("/products") && !token){
        return NextResponse.redirect(new URL ("/login", request.url));
      
    }
    return NextResponse.next();
}
export const config = {
	matcher: ["/((?!_next|favicon.ico).*)"],
};