import React from "react";
import { Link } from "react-router-dom";
import Fawzi from "../images/د محمد فوزي.jpg"
import Yassin from "../images/د محمود يس.jpg"
import Elmsery from "../images/د محمد المسيري.jpg"
import Younan from "../images/Younan.jpg"
const membersData = [
  {
    id: 1,
    name: "Prof. Mahmoud Y. Shams",
    title: "Joint Chair",
    role: "Joint Chair",
    image: Yassin, 
    description: "Professor in AI and advanced technology solutions development.",
  },
  {
    id: 2,
    name: "Prof. Wael M. Elmessery",
    title: "Joint Chair",
    role: "Joint Chair",
    image: Elmsery, 
    description: "Professor in AI, with expertise in machine learning and computer vision.",
  },
  {
    id: 3,
    name: "Dr. Mohamed Fawzi Abdelshafie Abuhussein",
    title: "Vice Chair",
    role: "Vice Chair",
    image: Fawzi, 
    description: "Doctor in AI, specializing in innovative solutions for technical challenges.",
  },
  {
    id: 4,
    name: "Dr. Mohamed Fawzi Abdelshafie Abuhussein",
    title: "Founder",
    role: "Founder",
    image: Fawzi, 
    description: "Founder of the AI research initiative, developer of advanced technological solutions.",
  },
  {
    id: 5,
    name: "Younan Iskander Sorial Iskander",
    title: "Member",
    role: "Member",
    image: Younan, 
    description: "Researcher In AI Field",
  },
];

function Members() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-6 md:py-8 bg-gradient-to-r from-blue-600 to-gray-800 dark:from-gray-900 dark:to-gray-800 rounded-t-[50px]">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-8">Team Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {membersData.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-xl rounded-lg p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-700 dark:text-white"
          >
            <Link to={member.profileLink}>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-blue-500 dark:border-blue-400"
              />
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{member.name}</h2>
              <p className="text-md text-gray-600 mb-2 dark:text-gray-300">{member.title} - {member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Members;
