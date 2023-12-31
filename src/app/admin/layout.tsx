"use client";
import Link from "next/link";
import { useState } from "react";

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {};

  const adminItem = (
    <>
      <Link onClick={toggleMenu} href="../admin/adminOverview">
        Overview
      </Link>
      <Link onClick={toggleMenu} href="../admin/adminManageUser">
        Manage User
      </Link>
      <Link onClick={toggleMenu} href="../admin/adminTotalRevenue">
        Total Revenue
      </Link>
      <Link onClick={toggleMenu} href="/">
        Home
      </Link>
      <Link onClick={toggleMenu} href="../admin/adminProfile">
        My Profile
      </Link>
      <Link onClick={toggleMenu} href="../admin/changePassword">
        Change Password
      </Link>
      <Link onClick={handleLogOut} href="/">
        Logout
      </Link>
    </>
  );
  return (
    <section>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Dashboard Menu */}
        <nav className="bg-white shadow-2xl md:w-1/4 lg:w-1/4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="sm:hidden">
                  {/* Mobile Menu Button */}
                  <button
                    type="button"
                    className="text-gray-500 text-xl hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="hidden md:flex flex-col justify-center font-semibold text-[#23a888] md:space-y-4 mt-8">
                  {adminItem}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden mx-3">
              <div className="flex flex-col items-center mt-2">{adminItem}</div>
            </div>
          )}
        </nav>

        {/* Dashboard Content */}
        <main className="py-10 flex-1">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                {/* Outlet here */}
                <div>{children}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
