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
  return result
};

// GET (HOME)---------------->
export const homeData = async () => {
    const res = await fetch('http://localhost:8000/');
    const data = await res.json()
    return data
}

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

  const res = await fetch(
    `http://localhost:8000/book-session/${tutor._id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    }
  );

  const data = await res.json();

  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
};

