import React from 'react';
import Image from "../images/homeImage.png"
const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-800 to-black text-white min-h-screen rounded-t-[50px]">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Tutankhamun Research School for Artificial Intelligence</h1>
        <p className="mt-4 text-lg font-light">
          Advancing AI technologies and applications to address real-world challenges.
        </p>
      </header>

      <div >
        <img className='relative top-0 left-[50%] translate-x-[-50%]' src={Image} alt="this is logo" />
      </div>

      <section className="px-6 lg:px-24 py-10">
        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
          <p className="text-lg font-light text-justify">
            To lead the transformation of scientific and applied research in artificial intelligence by empowering
            young researchers and fostering collaboration with global and local companies, aiming to achieve tangible
            technological and economic progress that effectively addresses real-world challenges.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2>
          <p className="text-lg font-light text-justify">
            To become a leading institution in preparing researchers capable of developing innovative solutions that
            translate scientific research into practical applications that meet market needs and enhance various
            industries.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-24 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Research Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Artificial Intelligence (AI)",
            "Natural Language Processing (NLP)",
            "Computer Vision and Image Processing",
            "Forensic Science",
            "Digital Agriculture",
            "Environmental Control",
            "Thermal Imaging",
            "Biomedical Informatics",
            "Generative Artificial Intelligence (GAI)",
            "Cloud and Fog Computing",
            "Renewable Energy",
            "Big Data",
            "Digital Transformation",
            "Graph Neural Network",
            "Food Science",
          ].map((area, index) => (
            <div
              key={index}
              className="bg-blue-800 bg-opacity-70 text-white p-4 rounded-lg shadow-lg text-center"
            >
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} Tutankhamun Research School for AI.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
