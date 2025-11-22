// import NotFoundImage from "../assets/images/img2.jpg"

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <div className="mt-10">
          <img
            src="src/assets/images/404.jpg"
            alt="Wellness Illustration"
            className="w-64 opacity-90"
          />
        </div>

        <div className="max-w-md">
          <h1 className="text-7xl font-bold text-green-600">404</h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            Page Not Found
          </h2>

          <p className="mt-3 text-gray-600">
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back to a healthy path.
          </p>

          <a
            href="/"
            className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-green-700 transition"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
}