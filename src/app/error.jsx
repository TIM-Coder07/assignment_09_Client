'use client'
const Error = ({ message = "Unable to load data" }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-12 text-center max-w-lg w-full">

        {/* Icon */}
        <div className="text-6xl mb-4">🚫</div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800">
          Oops!
        </h1>

        {/* Message */}
        <p className="text-gray-500 mt-2">
          {message}
        </p>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-3">
          
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Go Back
          </button>

          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Retry
          </button>

        </div>
      </div>
    </div>
  );
};

export default Error;