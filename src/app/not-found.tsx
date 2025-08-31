import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f4f6)]"></div>

      <h1 className="text-9xl font-extrabold text-gray-800 relative">404</h1>
      <h2 className=" font-semibold text-gray-700 mt-4 relative">Page Not Found</h2>
      <p className=" text-gray-500 mt-2 relative">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      {/* Navigation Buttons */}
      <div className="mt-6 space-x-4 relative">
        <Link href="/">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
            Go Back Home
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105">
            Contact Support
          </button>
        </Link>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 text-gray-400 ">
        <p>&copy; {new Date().getFullYear()} CodencoIT. All rights reserved.</p>
      </div>
    </div>
  );
}