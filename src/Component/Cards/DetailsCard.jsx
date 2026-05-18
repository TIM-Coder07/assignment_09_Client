import {
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  DollarSign,
  User,
} from "lucide-react";
import { ModalForm } from "../ExtraFetures/ModalForm";

const DetailsCard = ({ tutorDetails }) => {
  if (!tutorDetails) return null;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Image */}
        <div className="h-72 md:h-full">
          <img
            src={tutorDetails.photo}
            alt={tutorDetails.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-6 flex flex-col justify-center gap-4">

          {/* Name */}
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <User size={22} />
            {tutorDetails.name}
          </h1>

          {/* Subject */}
          <p className="flex items-center gap-2 text-gray-600">
            <BookOpen size={18} />
            {tutorDetails.subject}
          </p>

          {/* Fee */}
          <p className="flex items-center gap-2 text-gray-600">
            <DollarSign size={18} />
            Fee: {tutorDetails.fee} / hour
          </p>

          {/* Availability */}
          <p className="flex items-center gap-2 text-gray-600">
            <Clock size={18} />
            {tutorDetails.availability}
          </p>

          {/* Location */}
          <p className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} />
            {tutorDetails.location}
          </p>

          {/* Start Date */}
          <p className="flex items-center gap-2 text-gray-600">
            <Calendar size={18} />
            Start Date: {tutorDetails.startDate}
          </p>

          {/* Mode badge */}
          <div>
            <span className="inline-block px-4 py-1 text-sm rounded-full bg-black text-white">
              {tutorDetails.mode}
            </span>
          </div>

          <div className="w-full">
            <ModalForm></ModalForm>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsCard;