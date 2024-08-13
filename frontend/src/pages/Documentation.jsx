import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import data from "../data.json";
import NavBar from "../components/NavBar";

export default function Documentation() {
  // State to hold search items
  const [searchItems, setSearchItems] = useState([]);

  // Fetch search items from a JSON file (for now, using hardcoded data)
  useEffect(() => {
    const data = [
      "Overview",
      "Getting Started",
      "Installation",
      "Configuration",
      "Deployment",
      "API Reference",
      "Authentication",
      "Authorization",
      "Error Handling",
      "Best Practices",
      "FAQ",
      "Troubleshooting",
      "Overview",
      "Getting Started",
      "Installation",
      "Configuration",
      "Deployment",
      "API Reference",
      "Authentication",
      "Authorization",
      "Error Handling",
      "Best Practices",
      "FAQ",
      "Troubleshooting",
      "Overview",
      "Getting Started",
      "Installation",
      "Configuration",
      "Deployment",
      "API Reference",
      "Authentication",
      "Authorization",
      "Error Handling",
      "Best Practices",
      "FAQ",
      "Troubleshooting",
      "Overview",
      "Getting Started",
      "Installation",
      "Configuration",
      "Deployment",
      "API Reference",
      "Authentication",
      "Authorization",
      "Error Handling",
      "Best Practices",
      "FAQ",
      "Troubleshooting",
    ];
    setSearchItems(data);
  }, []);

  return (
    <div className="bg-customBlack h-full py-2">
      <div className="px-14">
        <NavBar />
      </div>
      <div className="flex w-full h-full">
        {/* Left side scrollable search section */}
        <div className="relative p-4 border-r-[0.08px] border-t-[0.08px] border-gray-300 rounded-tr-2xl w-1/5 h-screen overflow-hidden">
          <div className="relative">
            <input
              className="appearance-none bg-transparent border-2 border-gray-400 rounded-md w-full py-2 pl-4 pr-10 text-white leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-400 mb-4"
              id="search"
              type="text"
              placeholder="Search..."
            />
            <CiSearch className="absolute top-3 right-3 text-white" />
          </div>
          {/* Render search items */}
          <div className="h-full overflow-y-auto">
            {searchItems.map((item, index) => (
              <div key={index} className="p-2 hover:bg-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right side content section */}
        <div className="w-4/5 h-full bg-customBlack2 ml-4 mr-12 rounded-xl">
          <div className="py-12 px-24">
            <h2 className="mb-8 text-3xl">Overview</h2>
            <div className="flex flex-col gap-8 text-md leading-7">
              <p>{data.documentation}</p>
              <p>{data.documentation}</p>
              <p>{data.documentation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
