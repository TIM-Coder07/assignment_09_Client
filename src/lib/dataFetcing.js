import toast from "react-hot-toast";

// POST ----------------
export const postData = async (data) => {
  const res = await fetch("http://localhost:8000/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

// GET (HOME)---------------->
export const homeData = async () => {
  const res = await fetch("http://localhost:8000/");
  const data = await res.json();
  return data;
};

//GET TUTORS
export const getTutors = async () => {
  const res = await fetch("http://localhost:8000/courses", {
    cache: "no-store",
  });

  return res.json();
};

// GET TUTORS DETAILS ---------->
export const getDetailsById = async (tutorId) => {
  const res = await fetch(`http://localhost:8000/courses/${tutorId}`, {
    cache: "no-store",
  });
  return res.json();
};

// HANDEL BOOK NOW BUTTON ------------->
export const handleBookNow = async (user, tutor) => {
  const bookingInfo = {
    studentName: user.displayName,
    studentEmail: user.email,
  };

  const res = await fetch(`http://localhost:8000/book-session/${tutor._id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingInfo),
  });

  const data = await res.json();

  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
};

// MY TUTORS ----------------->
// JWT
// ADD
export const getMyTutorsByEmail = async (email, token) => {
  console.log('TOKEN', token);
  const res = await fetch(`http://localhost:8000/my-tutors/${email}`, {
    cache: "no-store",
    headers: {
      authorization:  `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tutors");
  }

  return res.json();
};

// DELETE
export const cancelById = async (id) => {
  try {
    const res = await fetch(`http://localhost:8000/tutors/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// MY BOOK SESSION-------------------->
// GET
export const getMyBookByEmail = async (email) => {
  const res = await fetch(`http://localhost:8000/my-bookings/${email}`, {
    cache: "no-store",
  });

  return res.json();
};

// PATCH
export const handleBookingCancel = async (id) => {
  const res = await fetch(`http://localhost:8000/my-bookings/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};
