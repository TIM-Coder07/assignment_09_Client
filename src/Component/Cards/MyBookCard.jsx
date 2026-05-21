"use client";

import { useState } from "react";
import { handleBookingCancel } from "@/lib/dataFetcing";
import toast from "react-hot-toast";

const MyBookCard = ({ myBooks, user }) => {
  const [bookings, setBookings] = useState(myBooks);

  const onCancel = async (id) => {
    try {
      const result = await handleBookingCancel(id);

      if (result?.modifiedCount > 0) {
        toast.success("Booking cancelled successfully");

        // 🔥 UI update FIX
        setBookings((prev) =>
          prev.map((b) =>
            b._id === id
              ? { ...b, status: "cancelled" }
              : b
          )
        );
      } else {
        toast.error("Cancel failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          My Booked Sessions
        </h1>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Tutor</th>
                <th className="p-4">Student</th>
                <th className="p-4">Email</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings?.map((book) => (
                <tr key={book._id} className="border-t">
                  <td className="p-4">{book.tutorName}</td>

                  <td className="p-4">
                    {book.studentName || user.name}
                  </td>

                  <td className="p-4">{book.studentEmail}</td>

                  <td className="p-4">
                    {book.status || "pending"}
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => onCancel(book._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {bookings?.length === 0 && (
            <div className="text-center p-10 text-gray-500">
              No bookings found
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MyBookCard;