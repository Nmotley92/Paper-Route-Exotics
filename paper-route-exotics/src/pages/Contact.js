const Contact = () => {
    return (
      <div id="contactUs" className="bg-opacity-95 bg-gray-900 text-white py-10 rounded-lg shadow-lg flex flex-col items-center justify-center m-3">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Our Breeders</h2>
          <p className="text-lg mb-4">For more information on our breeding program and available puppies, contact our two main breeders:</p>
          <div className="flex justify-center">
            <img src={`${process.env.PUBLIC_URL}/images/business card.png`} alt="Business Card" className="mb-4" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  