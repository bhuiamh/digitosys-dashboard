"use client";
import Link from 'next/link';
import {  useState } from 'react';
import Head from "next/head";

export default function userLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAdmin = false
    const isInstructor = false

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleLogOut = () => {
      // Implement your logout logic here
    };
  
    const userItem = (
      <>
        <Link onClick={toggleMenu} href="acquiredClass">
          My Acquired Classes
        </Link>
        <Link onClick={toggleMenu} href="enrolled">
          Enrolled Class
        </Link>
        <Link onClick={toggleMenu} href="paymentHistory">
          Payment History
        </Link>
        <Link onClick={toggleMenu} href="/">
          Home
        </Link>
        <Link onClick={toggleMenu} href="profile">
          My Profile
        </Link>
        <Link onClick={toggleMenu} href="changePassword">
          Change Password
        </Link>
        <Link onClick={handleLogOut} href="/">
          Logout
        </Link>
      </>
    );
  
    const instructorItem = (
      <>
        <Link onClick={toggleMenu} href="addItem">
          Add a Class
        </Link>
        <Link onClick={toggleMenu} href="/">
          Home
        </Link>
        <Link onClick={toggleMenu} href="profile">
          My Profile
        </Link>
        <Link onClick={toggleMenu} href="changePassword">
          Change Password
        </Link>
        <Link onClick={handleLogOut} href="/">
          Logout
        </Link>
      </>
    );
  
    const adminItem = (
      <>
        <Link onClick={toggleMenu} href="menageUser">
          Manage User
        </Link>
        <Link onClick={toggleMenu} href="menageClasses">
          Manage Class
        </Link>
        <Link onClick={toggleMenu} href="/">
          Home
        </Link>
        <Link onClick={toggleMenu} href="profile">
          My Profile
        </Link>
        <Link onClick={toggleMenu} href="changePassword">
          Change Password
        </Link>
        <Link onClick={handleLogOut} href="/">
          Logout
        </Link>
      </>
    );
  

  return (
    <section>
        <div className="min-h-screen pt-8">
      <Head>
        <title>Dashboard || TuneTutors</title>
      </Head>
      {/* Dashboard Menu */}
      <nav className="bg-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <div className="sm:hidden">
                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className="text-gray-500 text-xl hover:text-gray-700 focus:outline-none focus:text-gray-700"
                  aria-label="Toggle menu"
                  onClick={toggleMenu}
                >Menu
                  {/* <AiOutlineMenu /> */}
                </button>
              </div>
              <div className="hidden sm:flex sm:space-x-8">
                {isAdmin && adminItem}
                {isInstructor && instructorItem}
                {!isAdmin && !isInstructor && userItem}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mx-3">
            <div className="flex flex-col items-center mt-2">
              {isAdmin && adminItem}
              {isInstructor && instructorItem}
              {!isAdmin && !isInstructor && userItem}
            </div>
          </div>
        )}
      </nav>

      {/* Dashboard Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              {/* Use the Next.js outlet here */}
              <div> {children}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
       
    </section>
  )}

