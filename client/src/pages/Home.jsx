import React from "react";
function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0); // Track current slide index

  const images = [
    "https://media.istockphoto.com/id/1290864946/photo/e-learning-education-concept-learning-online.webp?s=1024x1024&w=is&k=20&c=jp1aegIi9CQLqGAOKPQbOHlEgsD_HtYgKoz4KCKRV18=",
    "https://media.istockphoto.com/id/486254954/photo/rear-view-of-elementary-school-children-with-raised-arms.webp?s=1024x1024&w=is&k=20&c=UOG4B8WjJ25v5iBmsIyrTJ7huj7H8PqNyx1-hd4IYnY=",
    "https://media.istockphoto.com/id/1366798987/photo/interior-of-a-traditional-school-classroom-with-wooden-floor-and-furniture.jpg?s=1024x1024&w=is&k=20&c=0bKDntRHtjtcn3tDaCoCqgt_d3zMrxoOdogA-RgWgs8="
  ];

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length); // Wrap around at the end
  };

  const handlePrev = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Wrap around at the beginning
  };
  const backgroundImage = "url('https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&w=800')";
  return (
 <div
      className="bg-slate-600 h-screen"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Primary School</h2>
        <p className="font-bold"> 
          Welcome to our primary school website. We are dedicated to providing a safe and nurturing environment
          for our students to learn and grow. Explore our website to learn more about our school, programs, and community.
        </p>
      </section>

      {/* Image slider */}
      <div className="mt-3 relative w-full overflow-hidden rounded-lg md:h-96 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute block w-full h-full top-0 left-0 transition duration-500 ease-in-out transform ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}

        <button type="button" className="absolute top-1/2 left-4 z-20 focus:outline-none" onClick={handlePrev}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6l6-6"/>
          </svg>
        </button>
        <button type="button" className="absolute top-1/2 right-4 z-20 focus:outline-none" onClick={handleNext}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <section>
        
      </section>
    </div>
  );
}

export default Home;
