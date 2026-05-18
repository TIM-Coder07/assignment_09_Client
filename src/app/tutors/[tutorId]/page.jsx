import DetailsCard from "@/Component/Cards/DetailsCard";
import { getDetailsById } from "@/lib/dataFetcing";

const DetailsPage = async ({ params }) => {
//   console.log("PARAMS:", params);
const {tutorId} = await params

  const tutorDetails = await getDetailsById(tutorId);

  if (!tutorDetails) {
    return <h1>Tutor Not Found</h1>;
  }

  return (
    <div className="mt-6">
      <DetailsCard tutorDetails={tutorDetails}></DetailsCard>
    </div>
  );
};

export default DetailsPage;