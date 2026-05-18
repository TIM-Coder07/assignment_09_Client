import AllTutorsCard from "@/Component/Cards/AllTutorsCard";
import { getTutors } from "@/lib/dataFetcing";

const TutorsPAge = async() => {
    const tutorsData = await getTutors()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tutorsData.map((tutor) => (
        <AllTutorsCard key={tutor._id} tutor={tutor} />
      ))}
    </div>
    );
};

export default TutorsPAge;