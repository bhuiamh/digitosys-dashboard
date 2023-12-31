export default function Admin() {
  return (
    <div className="bg-white py-8 px-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#23a888]">
        Select an Item
      </h2>

      <div className="flex flex-col items-center justify-center text-center">
        <svg
          className="w-20 h-20 mx-auto mb-4 text-[#dc5777] rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 14l5 5l-5 5"
          />
        </svg>

        <h3 className="text-xl font-semibold text-[#23a888]">
          Select an item to see details.
        </h3>
      </div>
    </div>
  );
}
