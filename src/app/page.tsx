import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <Head>
          <title>Digitosys</title>
        </Head>
        <h1 className="text-4xl font-sans font-bold text-center mb-4 text-[#dc5777]">
          Welcome to <span className='font-extrabold font-serif text-[#dc5777]'>Digitosys</span> Dashboard
        </h1>
        <p className="text-center  text-gray-700">
          Your gateway to a world of digital possibilities.
        </p>
        <div className="mt-4 flex justify-center">
          <Link href="/login">
            <button className="bg-[#23a888] text-white px-4 py-2 rounded-md hover:bg-23a888 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#092b23]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
