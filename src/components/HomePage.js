import React from "react";
import { Link } from "react-router-dom";
import EducationImage from "./images/education.jpeg";
import HealthcareImage from "./images/health.jpeg";
import ConservationImage from "./images/environ.jpeg";

function HomePage() {
  const featuredCauses = [
    {
      id: 1,
      title: "Education",
      description:
        "Support educational initiatives to provide access to quality education for children and youth around the world.",
      imageUrl: EducationImage,
    },
    {
      id: 2,
      title: "Healthcare",
      description:
        "Improve healthcare services, provide medical supplies, and support medical research to ensure better health outcomes for all.",
      imageUrl: HealthcareImage,
    },
    {
      id: 3,
      title: "Environment Conservation",
      description:
        "Protect natural habitats, conserve biodiversity, and combat climate change to safeguard our planet for future generations.",
      imageUrl: ConservationImage,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:max-w-7xl">
      <div className="bg-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Join Us in Making a Difference
          </h1>
          <p className="mt-4 text-lg">
            Together, we can create positive change in the world by supporting
            causes that matter.
          </p>
          <Link
            to="/volunteer"
            className="mt-6 inline-block bg-white text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-800 hover:text-white"
          >
            Volunteer Now
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCauses.map((cause) => (
            <div
              key={cause.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={cause.imageUrl}
                alt={cause.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
                <p className="text-gray-700 mb-4">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
