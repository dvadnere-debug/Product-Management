"use client";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const {theme}= useTheme()
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8 ">
        <Link href="/" className="text-3xl font-bold">
          Prod<span className="text-blue-500">Pro</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/Products">Products</Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {theme==="light"?<Image src="/search.svg" alt="Search" width={32} height={32} />:<Image src="/searchLight.svg" alt="Search" width={32} height={32}/>}

        <Link className={buttonVariants()} href="/sign-up">
          Sign up
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/login"
        >
          Login
        </Link>
        <ThemeToggle/>
      </div>
    </nav>
  );
}


