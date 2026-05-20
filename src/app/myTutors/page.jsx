import Error from "@/Component/Eror";
import { auth } from "@/lib/auth";
import { getMyTutorsByEmail } from "@/lib/dataFetcing";
import { headers } from "next/headers";
import Image from "next/image";

const MyTutorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <Error />;
  }

  const user = session.user;
  const tutors = await getMyTutorsByEmail(user.email);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          My Tutors
        </h1>

        {tutors.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border">
            <p className="text-gray-500 text-lg">No tutors found 😢</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutors.map((tutor) => (
              <div
                key={tutor._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border"
              >
                <div className="flex gap-4 p-5">
                  {/* Image */}
                  <div className="shrink-0">
                    <Image
                      src={tutor?.courseImage}
                      alt={tutor.courseTitle}
                      height={90}
                      width={90}
                      className="rounded-xl object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {tutor.courseTitle}
                    </h2>

                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Tutor:</span>{" "}
                      {tutor.tutorName}
                    </p>

                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Schedule:</span>{" "}
                      {tutor.classSchedule}
                    </p>

                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Category:</span>{" "}
                      {tutor.category}
                    </p>

                    <div className="pt-2 text-xs text-gray-400">
                      {user.email}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center px-5 py-4 bg-gray-50 border-t">
                  <span className="text-xs text-gray-500">
                    Student: {user.name}
                  </span>

                  <button className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTutorsPage;