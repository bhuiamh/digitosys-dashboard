"use client";
import Head from "next/head";
import Link from "next/link";
export default function Dashboard() {
  return (
    <main>
      <div className="flex items-center justify-center mt-3">
        <Head>
          <title>Please Login First</title>
        </Head>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#23a888]">
            Please Login First
          </h2>

          <div className="flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-20 h-20 mx-auto mb-4 text-[#dc5777]"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="text-lg font-semibold text-gray-600">
              You need to be logged in to access this content.
            </p>

            <Link
              href="/login"
              className="mt-4 px-4 py-2 bg-[#23a888] hover:bg-[#0c352b] text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23a888]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
