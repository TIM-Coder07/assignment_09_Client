"use client";

import { useEffect, useState } from "react";
import AllTutorsCard from "@/Component/Cards/AllTutorsCard";
import { Filter } from "@/Component/ExtraFetures/Filter";
import { SearchInputField } from "@/Component/ExtraFetures/SearchInputField";

const TutorsPage = () => {
  const [tutorsData, setTutorsData] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [filter, setFilter] = useState({
    startDate: "",
    endDate: "",
  });

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const fetchTutors = async () => {
    const params = new URLSearchParams();

    if (debouncedSearch) params.append("search", debouncedSearch);
    if (filter.startDate) params.append("startDate", filter.startDate);
    if (filter.endDate) params.append("endDate", filter.endDate);

    const res = await fetch(
      `http://localhost:8000/courses?${params.toString()}`,
      { cache: "no-store" }
    );

    const data = await res.json();
    setTutorsData(data);
  };

  useEffect(() => {
    fetchTutors();
  }, [debouncedSearch, filter]);

  return (
    <>
      {/* SEARCH + FILTER */}
      <div className="w-full flex justify-center px-4 pt-6">
        <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">
          <SearchInputField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Filter value={filter} onChange={setFilter} />
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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