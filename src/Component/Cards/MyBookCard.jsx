"use client";
import { handleBookingCancel } from "@/lib/dataFetcing";
import toast from "react-hot-toast";

const MyBookCard = ({ myBooks, user }) => {
  const onCancel = async (id) => {
    const result = await handleBookingCancel(id);

    if (result?.modifiedCount > 0) {
      console.log("Cancelled successfully");
    } else {
      console.log("Cancel failed");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            My Booked Sessions
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all your booked tutor sessions in one place
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              {/* Table Head */}
              <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                <tr>
                  <th className="p-4">Tutor</th>
                  <th className="p-4">Student</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100">
                {myBooks?.map((book) => (
                  <tr key={book._id} className="hover:bg-gray-50 transition">
                    {/* Tutor */}
                    <td className="p-4 font-medium text-gray-800">
                      {book.tutorName}
                    </td>

                    {/* Student */}
                    <td className="p-4 text-gray-600">
                      {book.studentName || user.name}
                    </td>

                    {/* Email */}
                    <td className="p-4 text-gray-600">{book.studentEmail}</td>

                    {/* Status */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          book.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : book.status === "cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {book.status || "pending"}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="p-4 text-center">
                      <button
                        onClick={onCancel}
                        className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg
                        hover:bg-red-600 transition duration-200 shadow-sm"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {myBooks?.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No bookings found 😕
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookCard;
