"use client";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import { showToast } from "../../common/commonToaster";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"; // 1. Hooks import karein
import { logout } from "../../services/authService";
export default function Navbar() {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();

    router.refresh();
    router.push("/login");
    router.refresh();
    showToast.success("You have been Logged Out!")
  };
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
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href="/products"
          >
            Products
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {mounted && (
          <Image
            onClick={() => router.push("/products/search")}
            src={theme === "light" ? "/search.svg" : "/searchLight.svg"}
            alt="Search"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        )}

        <Link className={buttonVariants()} href="/signup">
          Sign up
        </Link>
        <Link className={buttonVariants({ variant: "outline" })} href="/login">
          Login
        </Link>
        <Link
          onClick={() => handleLogout}
          className={buttonVariants({ variant: "outline" })}
          href="/login"
        >
          Logout
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
