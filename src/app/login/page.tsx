"use client";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Data, User } from "../admin/adminOverview/type";

export default function Login() {
  const [data, setData] = useState<Data>({} as Data);
  // const users = data.users;

  //   Modal Operation
  const [isOpen, setIsOpen] = useState(false);

  // State for form data and password visibility
  const [formData, setFormData] = useState<{email: string, password: string}>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Assuming the file is at /public/data.json
        const parsedData: Data = await response.json();
        setData(parsedData);
      } catch (error) {}
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-4 text-center">
        <h2 className="text-lg font-medium text-gray-900">Loading...</h2>
      </div>
    );
  }

  const foundUser: User | undefined  = data.users &&  data.users.find((user: User) => {
    if (
      user.details.email === formData.email &&
      user.password === formData.password
    ) return user;
    else {}
  });

  // Handle form submission
  const handleSubmit = async (userData: any) => {
    userData.preventDefault();
  };

  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Digitosys Login</title>
      </Head>

      <div className="bg-gray-100 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-sans font-bold mb-6 text-center">
          Welcome to{" "}
          <span className="font-extrabold font-serif text-[#dc5777]">
            Digitosys
          </span>
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-sans font-bold mb-2"
            >
              Email
              <button
                onClick={handleModalOpen}
                className="text-sm font-sans ml-4 font-medium text-[#23a888]"
              >
                See Credentials
              </button>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(userData) =>
                setFormData({ ...formData, email: userData.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Password field with toggle button */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-sans font-bold mb-2"
            >
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={(userData) =>
                setFormData({ ...formData, password: userData.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              className="text-gray-400 mt-2 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
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
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
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
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Forgot password link */}
          <div className="mb-6">
            <Link
              href="/forgot-password"
              className="text-sm font-sans font-medium text-blue-600 hover:text-blue-800"
            >
              Forgot password?
            </Link>
            <button
              onClick={handleModalOpen}
              className="text-sm font-sans ml-4 font-medium text-[#23a888]"
            >
              See Credentials
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="bg-[#dc5777] text-white px-4 py-2 rounded font-sans font-bold hover:bg-[#7a232c] focus:outline-none focus:shadow-outline"
          >
           
             <Link href="/customer">Log In</Link>

            
            
           
          </button>

          {/* Social login buttons */}
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <button className="bg-white text-[#dc5777] border border-[#dc5777] rounded-full px-4 py-2 mr-2 hover:bg-[#7a232c] hover:text-white focus:outline-none focus:shadow-outline">
                <span className="ml-2">Continue with Facebook</span>
              </button>
              <button className="bg-white text-[#23a888] border border-[#23a888] rounded-full px-4 py-2 hover:bg-[#23a888] hover:text-white focus:outline-none focus:shadow-outline">
                <span className="ml-2">Continue with Discord</span>
              </button>
            </div>
          </div>

          {/* New user registration link */}
          <div className="text-center mt-6">
            <Link
              className="text-sm font-sans font-medium text-gray-700 hover:text-gray-900"
              href="/register"
            >
              Do not have an account? Register
            </Link>
          </div>
        </form>
      </div>
      {isOpen && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-xl overflow-y-auto"
          style={{ width: "50vw", height: "50vh" }}
        >
          <div className="bg-slate-500 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl text-[#dc5777] font-bold mb-6 text-center">
              Login Credentials
            </h2>

            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Customer</h3>
                <p className="text-gray-700">
                  Email: customer@example.com
                  <br />
                  Password: customer_password
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Admin</h3>
                <p className="text-gray-700">
                  Email: admin@example.com
                  <br />
                  Password: admin_password
                </p>
              </div>
            </div>
          </div>

          <button
            className="absolute top-0 right-0 m-4 text-red-700 hover:text-gray-700 text-2xl focus:outline-none focus:text-gray-700"
            onClick={handleModalClose}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
