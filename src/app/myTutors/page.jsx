import Error from "@/Component/Eror";
import { cookies } from "next/headers";

const MyTutorsPage = async () => {
  const cookieStore = await cookies(); 
  const email = cookieStore.get("email")?.value;

  if (!email) {
    return <Error></Error>
  }

  const myTutors = await getMyTutorsByEmail(email) || [];

  return (
    <div>
      {myTutors.length === 0 ? (
        <p>No tutors found</p>
      ) : (
        myTutors.map((tutor) => (
          <div key={tutor._id}>
            <h3>{tutor.courseTitle}</h3>
            <p>{tutor.tutorName}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyTutorsPage;