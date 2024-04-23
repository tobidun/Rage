import React from "react";

function CausesPage() {
  const causes = [
    {
      id: 1,
      title: "Education",
      description:
        "Support educational initiatives to provide access to quality education for children and youth around the world.",
    },
    {
      id: 2,
      title: "Healthcare",
      description:
        "Improve healthcare services, provide medical supplies, and support medical research to ensure better health outcomes for all.",
    },
    {
      id: 3,
      title: "Environmental Conservation",
      description:
        "Protect natural habitats, conserve biodiversity, and combat climate change to safeguard our planet for future generations.",
    },
    {
      id: 4,
      title: "Social Justice",
      description:
        "Promote equality, human rights, and social inclusion to create a more just and equitable society for all.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Causes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {causes.map((cause) => (
          <div key={cause.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{cause.title}</h2>
            <p className="text-gray-700">{cause.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CausesPage;
