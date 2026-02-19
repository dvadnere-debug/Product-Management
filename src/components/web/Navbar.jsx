import Link from "next/link"
import { buttonVariants } from "../ui/button"
export function Navbar() {
  return (
    <nav className="w-full py-5 flex items-center justify-between">
        <div className="flex items-center gap-8 ">
            <Link href="/" className="text-3xl font-bold">Next<span className="text-blue-500">Pro</span></Link>
        


        <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/Products">Products</Link>

        </div></div>


        <div className="flex items-center gap-2">
            <Link className={buttonVariants()} href="/auth/sign-up">Sign up</Link>
             <Link className={buttonVariants({variant:})} href="/auth/login">Login</Link>
        </div>
    </nav>
  )
}

export default Navbar