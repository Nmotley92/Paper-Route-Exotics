

const Home = () => {
    return (
        <div id="banner" className="h-screen w-screen bg-cover bg-center">
        <div className="bg-opacity-95 bg-gray-900 text-white py-10 rounded-lg shadow-lg flex flex-col items-center justify-center m-3">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left m-5 p-5">
              <h1 className="text-5xl font-bold mb-4">Paper Route Exotics</h1>
              <p className="text-xl mb-4">
                Welcome to Paper Route Exotics! Our mission is to produce the finest exotic bullies available
                anywhere, with a focus on exceptional health, temperament, and breed standard conformation. Our
                commitment to excellence is evident in every litter we produce, and we're proud to offer puppies with
                unique features and impressive pedigrees. Whether you're looking for a loyal companion, a top-quality
                show dog, or a future breeding prospect, we're here to help you find the perfect bully for your family.
                Contact us today to learn more about our breeding program and available puppies!.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/bannerpicpaper.jpg"
                alt="Paper Route Bullies Logo"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
    };

export default Home;

// Path: paper-route-exotics\src\pages\OurDogs.js