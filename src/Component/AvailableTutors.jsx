import { homeData } from "@/lib/dataFetcing";
import AvailableTutorsCard from "./Cards/AvailableTutorsCard";

const AvailableTutors = async () => {
  const latest = await homeData();

  return (
    <section className="space-y-6 px-4 sm:px-6 lg:px-0">

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center sm:text-left">
        Top-Ranked Courses
      </h2>

      {/* Grid */}
      {latest?.length > 0 ? (
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-3 
          gap-4 sm:gap-5 lg:gap-6
        ">
          {latest.map((tutor) => (
            <AvailableTutorsCard
              key={tutor._id}
              course={tutor}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          No courses available right now.
        </p>
      )}

    </section>
  );
};

export default AvailableTutors;