import {
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  DollarSign,
  Users,
  Code,
} from "lucide-react";

import { ModalForm } from "../ExtraFetures/ModalForm";

const DetailsCard = ({ tutorDetails, user }) => {
  if (!tutorDetails) return null;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition">

      {/* IMAGE */}
      <div className="relative h-44 w-full">
        <img
          src={tutorDetails.courseImage}
          alt={tutorDetails.courseTitle}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          {tutorDetails.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">

        {/* TITLE */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {tutorDetails.courseTitle}
          </h2>
          <p className="text-sm text-gray-500">
            {tutorDetails.tutorName}
          </p>
        </div>

        {/* INFO */}
        <div className="grid grid-cols-2 gap-3 text-sm">

          <p className="flex items-center gap-2 text-gray-600">
            <DollarSign size={16} /> ৳{tutorDetails.courseFee}
          </p>

          <p className="flex items-center gap-2 text-gray-600">
            <Clock size={16} /> {tutorDetails.courseDuration}
          </p>

          <p className="flex items-center gap-2 text-gray-600">
            <BookOpen size={16} /> {tutorDetails.totalClasses}
          </p>

          <p className="flex items-center gap-2 text-gray-600">
            <Users size={16} /> {tutorDetails.availableSeats}
          </p>

          <p className="flex items-center gap-2 text-gray-600 col-span-2">
            <Calendar size={16} /> {tutorDetails.classSchedule}
          </p>

          <p className="flex items-center gap-2 text-gray-600 col-span-2">
            <MapPin size={16} /> {tutorDetails.location}
          </p>

          <p className="flex items-center gap-2 text-gray-600 col-span-2">
            <Code size={16} /> {tutorDetails.teachingMode}
          </p>

        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {tutorDetails.description}
        </p>

        {/* BUTTON */}
        <div className="pt-2">
          <ModalForm user={user} tutorDetails={tutorDetails} />
        </div>

      </div>
    </div>
  );
};

export default DetailsCard;