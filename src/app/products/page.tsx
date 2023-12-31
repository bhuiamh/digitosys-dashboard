export default function Products() {
  return (
    <div className="bg-white py-8 px-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#23a888]">
        Products Coming Soon!
      </h2>

      <div className="flex flex-col items-center justify-center text-center">
        <svg
          className="w-200 h-20 mx-auto mb-4 text-[#dc5777]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h3 className="text-xl font-semibold text-[#23a888]">
          Stay tuned for exciting new products!
        </h3>

        <button className="mt-4 px-4 py-2 bg-[#23a888] hover:bg-[#0c352b] text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#1e9c7e">
          Get Notified
        </button>
      </div>
    </div>
  );
}
