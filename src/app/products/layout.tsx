"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section>
      <div className="navbar bg-black bg-opacity-5 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-80"
            >
              <li>
                <Link
                  className={`${
                    pathname != "/" ? "text-[#dc5777]" : "text-[#23a888]"
                  } text-xl font-bold text-[#dc5777] font-sans hover:text-[#dc5777]`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname != "/products"
                      ? "text-[#dc5777]"
                      : "text-[#23a888]"
                  } text-xl font-bold text-[#dc5777] font-sans hover:text-[#dc5777]`}
                  href="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname != "/dashboard"
                      ? "text-[#dc5777]"
                      : "text-[#23a888]"
                  } text-xl font-bold text-[#dc5777] font-sans hover:text-[#dc5777]`}
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <Image src="/icon.png" height={50} width={50} alt="My Icon" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={`${
                  pathname != "/" ? "text-[#dc5777]" : "text-[#23a888]"
                } text-xl font-bold text-[#dc5777] font-sans hover:text-[#dc5777]`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname != "/products" ? "text-[#dc5777]" : "text-[#23a888]"
                } text-xl font-bold text-[#dc5777] font-sans hover:text-[#dc5777]`}
                href="/product"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname != "/dashboard" ? "text-[#dc5777]" : "text-[#23a888]"
                } text-xl font-bold text-[#dc5777] font-sans hover:text-[#dc5777]`}
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            className={`${
              pathname != "/login" ? "text-[#dc5777]" : "text-[#23a888]"
            } text-xl font-bold text-[#dc5777] font-sans hover:text-[#dc5777]`}
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
}
