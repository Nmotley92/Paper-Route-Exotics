import React from 'react';
import DogCard from './components/DogCard';

const dogs = [
    {
      id: 1,
      name: 'Buddy',
      image: '/images/example_puppy.jpg',
      description: 'Buddy is a friendly and energetic dog who loves to play and cuddle.',
      mom: {
        name: 'Luna',
        image: '/images/mom_example.jpg',
        description: 'Luna is a calm and gentle dog with a sweet temperament.',
      },
      dad: {
        name: 'Max',
        image: '/images/example_dad.webp',
        description: 'Max is a strong and loyal dog who is always eager to please.',
      },
      bornOn: '2022-06-15',
    },
    {
        id: 1,
        name: 'Buddy',
        image: '/images/example_puppy.jpg',
        description: 'Buddy is a friendly and energetic dog who loves to play and cuddle.',
        mom: {
          name: 'Luna',
          image: '/images/mom_example.jpg',
          description: 'Luna is a calm and gentle dog with a sweet temperament.',
        },
        dad: {
          name: 'Max',
          image: '/images/example_dad.webp',
          description: 'Max is a strong and loyal dog who is always eager to please.',
        },
        bornOn: '2022-06-15',
      },
      {
        id: 1,
        name: 'Buddy',
        image: '/images/example_puppy.jpg',
        description: 'Buddy is a friendly and energetic dog who loves to play and cuddle.',
        mom: {
          name: 'Luna',
          image: '/images/mom_example.jpg',
          description: 'Luna is a calm and gentle dog with a sweet temperament.',
        },
        dad: {
          name: 'Max',
          image: '/images/example_dad.webp',
          description: 'Max is a strong and loyal dog who is always eager to please.',
        },
        bornOn: '2022-06-15',
      },
      {
        id: 1,
        name: 'Buddy',
        image: '/images/example_puppy.jpg',
        description: 'Buddy is a friendly and energetic dog who loves to play and cuddle.',
        mom: {
          name: 'Luna',
          image: '/images/mom_example.jpg',
          description: 'Luna is a calm and gentle dog with a sweet temperament.',
        },
        dad: {
          name: 'Max',
          image: '/images/example_dad.webp',
          description: 'Max is a strong and loyal dog who is always eager to please.',
        },
        bornOn: '2022-06-15',
      },
      {
        id: 1,
        name: 'Buddy',
        image: '/images/example_puppy.jpg',
        description: 'Buddy is a friendly and energetic dog who loves to play and cuddle.',
        mom: {
          name: 'Luna',
          image: '/images/mom_example.jpg',
          description: 'Luna is a calm and gentle dog with a sweet temperament.',
        },
        dad: {
          name: 'Max',
          image: '/images/example_dad.webp',
          description: 'Max is a strong and loyal dog who is always eager to please.',
        },
        bornOn: '2022-06-15',
      },
      {
        id: 1,
        name: 'Buddy',
        image: '/images/example_puppy.jpg',
        description: 'Buddy is a friendly and energetic dog who loves to play and cuddle.',
        mom: {
          name: 'Luna',
          image: '/images/mom_example.jpg',
          description: 'Luna is a calm and gentle dog with a sweet temperament.',
        },
        dad: {
          name: 'Max',
          image: '/images/example_dad.webp',
          description: 'Max is a strong and loyal dog who is always eager to please.',
        },
        bornOn: '2022-06-15',
      },
  ];

  const OurDogs = () => {
    return (
        <div id="ourDogs" className="bg-opacity-95 bg-gray-900 text-white py-10 rounded-lg shadow-lg flex flex-col items-center justify-center m-3">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Our Dogs</h1>
                <p className="text-lg mb-4">We have a wide variety of dogs available for adoption. Please contact us for more information.</p>
            </div>
            {/* <!-- create an empty container that will hold the dog cards later --> */}
            <div id="dogCards" className="container mx-auto flex flex-wrap items-center justify-center">
                {dogs.map((dog) => (
                    <div key={dog.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-6">
                        <DogCard dog={dog} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurDogs;




// Path: paper-route-exotics\src\pages\Contact.js