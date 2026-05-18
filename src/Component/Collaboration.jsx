import Marquee from "react-fast-marquee";

const Collaboration = () => {
  const images = [
    "https://edublink.co/images/lms/lms-06.png",
    "https://edublink.co/images/lms/lms-02.png",
    "https://edublink.co/images/lms/lms-03.png",
    "https://edublink.co/images/lms/lms-04.png",
    "https://edublink.co/images/lms/lms-01.png",
    "https://edublink.co/images/lms/lms-05.png",
  ];

  return (
    <section className="py-12 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Collaborations
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Trusted by leading platforms & institutions
        </p>
      </div>

      {/* Marquee */}
      <Marquee speed={45} pauseOnHover gradient={false}>
        {images.map((img, index) => (
          <div key={index} className="mx-6">
            
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <img
                src={img}
                alt="collaboration logo"
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>

          </div>
        ))}
      </Marquee>

    </section>
  );
};

export default Collaboration;