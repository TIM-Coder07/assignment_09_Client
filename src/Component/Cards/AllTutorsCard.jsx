import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaBook,
  FaClock,
  FaMoneyBill,
  FaUniversity,
  FaMapMarkerAlt,
} from "react-icons/fa";

const AllTutorsCard = ({ tutor }) => {
  console.log("tutor", tutor)
   if (!tutor) return null;
//   console.log("tutor", tutor);
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition border">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={tutor.photo}
          alt={tutor.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">{tutor.name}</h2>

        {/* Email */}
        <p className="flex items-center gap-2 text-sm text-gray-600">
          <FaEnvelope /> {tutor.email}
        </p>

        {/* Subject */}
        <p className="flex items-center gap-2 text-sm">
          <FaBook /> <span className="font-medium">Subject:</span>{" "}
          {tutor.subject}
        </p>

        {/* Availability */}
        <p className="flex items-center gap-2 text-sm">
          <FaClock /> {tutor.availability}
        </p>

        {/* Fee */}
        <p className="flex items-center gap-2 text-sm">
          <FaMoneyBill /> ${tutor.fee}/hour
        </p>

        {/* Institution */}
        <p className="flex items-center gap-2 text-sm">
          <FaUniversity /> {tutor.institution}
        </p>

        {/* Location */}
        <p className="flex items-center gap-2 text-sm">
          <FaMapMarkerAlt /> {tutor.location}
        </p>

        {/* Mode Badge */}
        <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
          {tutor.mode}
        </span>

        {/* Button */}
        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          <Link href={`/tutors/${tutor._id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default AllTutorsCard;
