export const About = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img
              src="/about-image.jpg" // Replace with your actual image path
              alt="About Us"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
  
          {/* Right Column - Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are passionate about building meaningful digital experiences. Our team
              collaborates closely to deliver high-quality products that solve real-world
              problems and bring value to our users.
            </p>
          </div>
        </div>
      </div>
    );
  };
  