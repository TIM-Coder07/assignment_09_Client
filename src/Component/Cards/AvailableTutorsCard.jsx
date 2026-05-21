import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBookOpen,
  FaClock,
  FaMoneyBillWave,
  FaUniversity,
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaLaptopHouse,
} from "react-icons/fa";

const AvailableTutorsCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="w-full overflow-hidden">
        <Image
          src={course.tutorImage || "/default-user.png"}
          alt={course.tutorName || "Tutor Image"}
          width={500}
          height={300}
          className="w-full h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] sm:text-xs px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>
      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5 space-y-3 flex flex-col flex-1">
        {/* Title */}
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-snug line-clamp-2">
          {course.courseTitle}
        </h2>

        {/* Tutor */}
        <p className="text-xs sm:text-sm text-gray-500">
          Instructor:
          <span className="font-semibold text-black">{course.tutorName}</span>
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {course.description}
        </p>

        {/* Course Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm pt-2">
          <div className="flex items-center gap-2 text-gray-700">
            <FaClock className="text-blue-500 shrink-0" />
            {course.courseDuration}
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaBookOpen className="text-green-500 shrink-0" />
            {course.totalClasses} Classes
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaMoneyBillWave className="text-yellow-500 shrink-0" />৳
            {course.courseFee}
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaUsers className="text-pink-500 shrink-0" />
            {course.availableSeats} Seats
          </div>

          <div className="flex items-center gap-2 text-gray-700 sm:col-span-2">
            <FaCalendarAlt className="text-red-500 shrink-0" />
            Starts: {course.startDate}
          </div>

          <div className="flex items-center gap-2 text-gray-700 sm:col-span-2">
            <FaUniversity className="text-indigo-500 shrink-0" />
            {course.institution}
          </div>

          <div className="flex items-center gap-2 text-gray-700 sm:col-span-2">
            <FaMapMarkerAlt className="text-orange-500 shrink-0" />
            {course.location}
          </div>

          <div className="flex items-center gap-2 text-gray-700 sm:col-span-2">
            <FaLaptopHouse className="text-cyan-500 shrink-0" />
            {course.teachingMode}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-gray-100 rounded-lg p-2 text-xs sm:text-sm text-gray-700">
          <span className="font-semibold">Schedule:</span>
          {course.classSchedule}
        </div>

        {/* Button */}
        <div className="mt-auto pt-2">
          <Link href="/tutors">
            <button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition active:scale-[0.98]">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableTutorsCard;
