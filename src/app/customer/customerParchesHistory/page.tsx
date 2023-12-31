export default function customerParchesHistory() {
  return (
    <div className="bg-white py-8 px-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#23a888]">
        Your Purchase History
      </h2>

      <div className="flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-20 h-20 mx-auto mb-4 text-[#dc5777]"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>

        <h3 className="text-xl font-semibold text-[#23a888]">
          You do not have any purchase history.
        </h3>

        <button className="mt-4 px-4 py-2 bg-[#23a888] hover:bg-[#0c352b] text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#1e9c7e">
          Start Shopping
        </button>
      </div>
    </div>
  );
}
