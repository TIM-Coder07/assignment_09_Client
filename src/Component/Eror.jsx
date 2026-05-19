"use client";

import Link from "next/link";


export default function Error() {
 

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-lg">
        
        <h1 className="text-2xl font-bold text-red-600">
          Something went wrong
        </h1>

        <p className="my-3 text-gray-600">
          Please login first
        </p>

        <Link 
        href={'/login'}
          className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}