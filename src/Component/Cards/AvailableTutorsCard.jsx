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
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition-all duration-300 flex flex-col h-full">

      {/* Image */}
      <div className="relative w-full">
        <Image
          src={course.courseImage || "/default-course.jpg"}
          alt={course.courseTitle || "Course Image"}
          width={600}
          height={400}
          className="w-full h-44 sm:h-52 md:h-60 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full shadow">
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-3 sm:space-y-4">

        {/* Title */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-snug line-clamp-2">
          {course.courseTitle}
        </h2>

        {/* Tutor */}
        <p className="text-xs sm:text-sm text-gray-500">
          Instructor:{" "}
          <span className="font-semibold text-gray-800">
            {course.tutorName}
          </span>
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
          {course.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">

          <div className="flex items-center gap-2 text-gray-700">
            <FaClock className="text-blue-500 shrink-0" />
            <span className="break-words">{course.courseDuration || "N/A"}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaBookOpen className="text-green-500 shrink-0" />
            <span>{course.totalClasses || 0} Classes</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaMoneyBillWave className="text-yellow-500 shrink-0" />
            <span>৳ {course.courseFee}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaUsers className="text-pink-500 shrink-0" />
            <span>{course.availableSeats} Seats</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 sm:col-span-2">
            <FaCalendarAlt className="text-red-500 shrink-0" />
            <span className="break-words">
              Starts: {course.startDate}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 sm:col-span-2">
            <FaUniversity className="text-indigo-500 shrink-0" />
            <span className="break-words">
              {course.institution || "Unknown Institution"}
            </span>
          </div>

          <div className="flex items-start gap-2 text-gray-700 sm:col-span-2">
            <FaMapMarkerAlt className="text-orange-500 shrink-0 mt-0.5" />
            <span className="break-words">
              {course.location}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 sm:col-span-2">
            <FaLaptopHouse className="text-cyan-500 shrink-0" />
            <span>{course.teachingMode}</span>
          </div>

        </div>

        {/* Schedule */}
        <div className="bg-gray-100 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-700">
          <span className="font-semibold">Schedule:</span>{" "}
          <span className="break-words">{course.classSchedule}</span>
        </div>

        {/* Button */}
        <div className="mt-auto pt-2">
          <Link href="/tutors">
            <button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm transition active:scale-[0.98]">
              Enroll Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AvailableTutorsCard;