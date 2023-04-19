import React from 'react';
import styles from './DogCard.module.css';

const DogCard = ({ dog }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 my-6">
      <img src={dog.image} alt={dog.name} className={`${styles.dogImage} mb-6`} />
      <h2 className="text-2xl font-bold mb-2">{dog.name}</h2>
      <p className="mb-4">{dog.description}</p>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-4 md:pr-2">
          <h3 className="font-semibold mb-2">Mom</h3>
          <img src={dog.mom.image} alt={dog.mom.name} className={`${styles.parentImage} mb-2`} />
          <p>{dog.mom.description}</p>
        </div>
        <div className="w-full md:w-1/2 mb-4 md:pl-2">
          <h3 className="font-semibold mb-2">Dad</h3>
          <img src={dog.dad.image} alt={dog.dad.name} className={`${styles.parentImage} mb-2`} />
          <p>{dog.dad.description}</p>
        </div>
      </div>
      <p className="text-sm">Born on: {dog.bornOn}</p>
    </div>
  );
};

export default DogCard;


