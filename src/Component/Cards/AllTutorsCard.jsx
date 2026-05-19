"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Clock,
  DollarSign,
  MapPin,
  Users,
  CalendarDays,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const AllTutorsCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* IMAGE */}
      <div className="relative h-56 w-full">
        <Image
          src={course?.courseImage || "/placeholder.png"}
          alt={course?.courseTitle}
          fill
          className="object-cover"
        />

        <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {course?.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">
          {course?.courseTitle}
        </h2>

        {/* Tutor */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <GraduationCap className="w-4 h-4 text-blue-500" />
          {course?.tutorName}
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {course?.description}
        </p>

        {/* INFO */}
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="flex items-center gap-2 col-span-2">
            <Clock className="w-4 h-4 text-blue-500" />
            {course?.classSchedule}
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-500" />৳
            {course?.courseFee}
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-pink-500" />
            {course?.availableSeats} Seats
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <CalendarDays className="w-4 h-4 text-red-500" />
            Starts: {course?.startDate}
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            {course?.location}
          </div>

          <div className="col-span-2 text-sm text-gray-700">
            💻 {course?.teachingMode}
          </div>
        </div>

        <Link
          href={`/tutors/${course?._id}`}
          className="block w-full mt-3 bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-semibold text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllTutorsCard;
