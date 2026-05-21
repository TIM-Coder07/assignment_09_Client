import AllTutorsCard from "@/Component/Cards/AllTutorsCard";
import { SearchInputField } from "@/Component/ExtraFetures/SearchInputField";
import { getTutors } from "@/lib/dataFetcing";

const TutorsPAge = async () => {
  const tutorsData = await getTutors();
  return (
    <>
      {/* Search Section */}
      <div className="w-full flex justify-center px-4 pt-6">
        <div className="w-full max-w-2xl">
          <SearchInputField />
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorsData.map((tutor) => (
            <AllTutorsCard key={tutor._id} course={tutor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TutorsPAge;
