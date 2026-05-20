const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Title Skeleton */}
        <div className="h-8 w-64 bg-gray-300 animate-pulse rounded mb-6"></div>

        {/* Table Card */}
        <div className="bg-white shadow rounded-xl p-4">

          <table className="w-full">
            <thead>
              <tr>
                <th className="p-3">
                  <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
                </th>
                <th className="p-3">
                  <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
                </th>
                <th className="p-3">
                  <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
                </th>
                <th className="p-3">
                  <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item}>
                  <td className="p-3">
                    <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                  <td className="p-3">
                    <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                  <td className="p-3">
                    <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                  <td className="p-3">
                    <div className="h-8 w-20 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Loading;