import DetailsCard from "@/Component/Cards/DetailsCard";
import { getDetailsById } from "@/lib/dataFetcing";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DetailsPage = async ({ params }) => {
  const { tutorId } = await params;
  console.log("tutorId", tutorId);
  

  const tutorDetails = await getDetailsById(tutorId);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="mt-6">
      <DetailsCard
        tutorDetails={tutorDetails}
        user={session?.user}
      />
    </div>
  );
};

export default DetailsPage;