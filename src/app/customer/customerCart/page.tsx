export default function CustomerCart() {
  return (
    <div className="bg-white py-8 px-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#23a888]">
        Your Cart
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
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
            clip-rule="evenodd"
          />
        </svg>

        <h3 className="text-xl font-semibold text-[#23a888]">
          You don't have any items in your cart yet.
        </h3>

        <button className="mt-4 px-4 py-2 bg-[#23a888] hover:bg-[#0c352b] text-white font-medium rounded-md hover:bg-#1e9c7e focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#1e9c7e">
          Start Shopping
        </button>
      </div>
    </div>
  );
}
