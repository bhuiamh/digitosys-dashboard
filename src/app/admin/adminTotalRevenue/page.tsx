import Head from 'next/head';

export default function adminTotalRevenue() {
  return (
    <div className="flex items-center justify-center">
      <Head>
        <title>Page Coming Soon</title>
      </Head>

      <div className="py-8 px-4 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#23a888]">
          Page Coming Soon!
        </h2>

        <div className="flex flex-col items-center justify-center text-center">
          <h1
            className="text-8xl font-extrabold mx-auto mb-4 text-[#dc5777]"
            >x
          </h1>

          <h3 className="text-xl font-semibold text-[#23a888]">
            Stay tuned for exciting updates!
          </h3>

          <button
            className="mt-4 px-4 py-2 bg-[#23a888] hover:bg-[#0c352b] text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#1e9c7e"
          >
            Get Notified
          </button>
        </div>
      </div>
    </div>
  );
}
