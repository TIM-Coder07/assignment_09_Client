import MyBookCard from "@/Component/Cards/MyBookCard";
import Error from "@/Component/Eror";
import { auth } from "@/lib/auth";
import { getMyTutorsByEmail, handleBookingCancel } from "@/lib/dataFetcing";
import { headers } from "next/headers";

const MyBooked = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <Error />;
  }

  const user = session.user;
  const myBooks = await getMyTutorsByEmail(user.email);

  return (
    <div>
        <MyBookCard user={user} myBooks= {myBooks}></MyBookCard>
    </div>
  );
};

export default MyBooked;