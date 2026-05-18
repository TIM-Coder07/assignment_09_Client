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