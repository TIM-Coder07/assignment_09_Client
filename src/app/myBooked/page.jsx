import MyBookCard from "@/Component/Cards/MyBookCard";
import Error from "@/Component/Eror";
import { auth } from "@/lib/auth";
import { getMyBookByEmail } from "@/lib/dataFetcing";
import { headers } from "next/headers";

const MyBooked = async () => {
  const session = await auth.api.getSession({
  headers: await headers(),
});

  const getToken = await auth.api.getToken({
      headers: await headers(),
    });

  if (!session?.user) {
    return <Error message="Unauthorized access" />;
  }

  const user = session.user;
  console.log('User:', user);
  
  const token = getToken?.token;

  const myBooks = (await getMyBookByEmail(user.email, token)) || [];

  return (
    <div>
      <MyBookCard user={user} myBooks={myBooks} />
    </div>
  );
};

export default MyBooked;