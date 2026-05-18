import { homeData } from "@/lib/dataFetcing";
import AvailableTutorsCard from "./Cards/AvailableTutorsCard";

const AvailableTutors = async () => {
  const letest = await homeData();
  //   console.log("letest", letest);

  return (
    <div>
      <h2 className="text-2xl font-bold underline my-4">Top-Ranked Courses:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {letest.map((tutors) => (
          <AvailableTutorsCard key={tutors._id} tutor={tutors} />
        ))}
      </div>
    </div>
  );
};

export default AvailableTutors;
