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


// GET TUTORS DETAILS 
export const getDetailsById = async (tutorId) => {
  const res = await fetch(`http://localhost:8000/courses/${tutorId}`, {
    cache: "no-store",
  });

//   if (!res.ok) {
//     throw new Error("Failed to fetch tutor details");
//   }

  return await res.json();
};