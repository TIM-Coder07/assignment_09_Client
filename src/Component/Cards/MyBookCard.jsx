"use client";

import { useState } from "react";
import { handleBookingCancel } from "@/lib/dataFetcing";
import toast from "react-hot-toast";

import { CancelBooking } from "../ExtraFetures/CancelBooking";

const MyBookCard = ({ myBooks = [], user }) => {
  const [bookings, setBookings] = useState(myBooks);

  const onCancel = async (id) => {
    try {
      const result = await handleBookingCancel(id);

      if (result?.success && result?.modifiedCount > 0) {
        toast.success("Booking cancelled successfully");

        setBookings((prev) =>
          prev.map((b) =>
            b._id === id
              ? { ...b, status: "cancelled" }
              : b
          )
        );
      } else {
        toast.error(result?.message || "Cancel failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  if (!bookings.length) {
    return (
      <div className="text-center p-10 text-gray-500">
        No bookings found
      </div>
    );
  }

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
              {bookings.map((book) => (
                <tr key={book._id} className="border-t">
                  <td className="p-4">
                    {book.tutor?.name ||
                      book.tutorName ||
                      "Unknown Tutor"}
                  </td>

                  <td className="p-4">
                    {book.studentName || user?.name}
                  </td>

                  <td className="p-4">
                    {book.studentEmail}
                  </td>

                  <td className="p-4 capitalize">
                    {book.status || "pending"}
                  </td>

                  <td className="p-4 text-center">
                    <CancelBooking
                      book={book}
                      onCancel={onCancel}
                    />
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

export default MyBookCard;
