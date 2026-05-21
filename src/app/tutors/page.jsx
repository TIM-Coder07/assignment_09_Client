"use client";

import { useEffect, useState } from "react";
import AllTutorsCard from "@/Component/Cards/AllTutorsCard";
import { Filter } from "@/Component/ExtraFetures/Filter";
import { SearchInputField } from "@/Component/ExtraFetures/SearchInputField";

const TutorsPage = () => {
  const [tutorsData, setTutorsData] = useState([]);
  const [search, setSearch] = useState("");
  console.log("search", search);

  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const [filter, setFilter] = useState({
    startDate: "",
    endDate: '',
  });

  const fetchTutors = async () => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (filter.startDate) params.append("startDate", filter.startDate);
    if (filter.endDate) params.append("endDate", filter.endDate);

    const res = await fetch(
      `http://localhost:8000/courses?${params.toString()}`,
      { cache: "no-store" },
    );

    const data = await res.json();
    setTutorsData(data);
  };

  useEffect(() => {
    fetchTutors();
  }, [ debouncedSearch, filter ]);

  return (
    <>
      {/* Search + Filter */}
      <div className="w-full flex justify-center px-4 pt-6">
        <div className="w-full flex items-center justify-center max-w-2xl gap-3">
          <SearchInputField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Filter value={filter} onChange={setFilter} />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorsData.map((tutor) => (
            <AllTutorsCard key={tutor._id} course={tutor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TutorsPage;
