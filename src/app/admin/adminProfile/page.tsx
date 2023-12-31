"use client";

import Image from "next/image";

export default function AdminProfile() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="text-center text-[#dc5777] text-2xl font-bold mb-6">
        User Information
      </div>

      <div className="flex items-center mb-4">
        <div className="w-36 h-36 rounded mr-4">
          <Image height={100} width={100}
            src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
            alt=""
          />{" "}
        </div>
        <div>
          <h1 className="text-xl font-bold">Customer Name</h1>
          <p className="text-gray-600">customer@customer.com</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="pt-8">
          <p className="font-semibold">Phone Number:</p>
          <p>+1121212456</p>
        </div>
        <div>
          <p className="font-semibold">Date of Birth:</p>
          <p>6 January, 2023</p>
        </div>
        <div>
          <p className="font-semibold">Gender:</p>
          <p>Male</p>
        </div>
        <div>
          <p className="font-semibold">Address:</p>
          <p>Road#10, Mirpur#1, Dhaka-1216</p>
        </div>
      </div>

      <button className="mb-4 bg-[#dc5777] hover:bg-[#6b192d] text-white px-4 py-2 rounded">
        Edit
      </button>
      <button className="bg-[#23a888] hover:bg-[#125243] ml-4 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
}
