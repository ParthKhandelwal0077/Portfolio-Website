import React, { useEffect, useRef, useState } from 'react';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../config/firebase'; 
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

function Latest() {
  const [latestImages, setLatestImages] = useState([]);
  const cardRefs = useRef([]);  // Array of card elements
  const currentCard = useRef(null); // Reference to the currently active card

  // Fetching images from Firebase
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, 'gs://devershika-7da8a.appspot.com/imagesClassed'); 
        const result = await listAll(storageRef);
        const imageRefs = result.items.map(item => {
          const name = item.name;
          const match = name.match(/File_(\d+)(?:-.*)?\.[a-zA-Z]+/);
          const index = match ? parseInt(match[1]) : 0; 
          return { name, index, ref: item };
        });
        // Sorting and getting latest images
        const sortedImages = imageRefs.sort((a, b) => b.index - a.index);
        const latestFourImages = sortedImages.slice(0, 4);
        const imageUrls = await Promise.all(
          latestFourImages.map(item => getDownloadURL(item.ref))
        );

        setLatestImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
      
    };

    fetchImages();
  }, []);
  

  useEffect(()=>{
    const cards = cardRefs.current;
     if (cards.length > 0) {
      // Set initial current card if not already set
      currentCard.current = cards.find(card => card.classList.contains('card--current')) || cards[0];
    }
  })

  const handleClick = () => {
    
    const cards = cardRefs.current;
   
      // Reset classes for all cards
      cards.forEach(c => c.classList.remove('latestcard--current', 'latestcard--out', 'latestcard--next'));

      // Add 'out' class to the current card (top one)
      currentCard.current.classList.add('latestcard--out');

      // Set the clicked card as the new current card
     
      currentCard.current = currentCard.current.nextElementSibling?currentCard.current.nextElementSibling:cardRefs.current[0];
      currentCard.current.classList.add('latestcard--current');

      // Assign the next card
     
      const nextCard = currentCard.current.nextElementSibling?currentCard.current.nextElementSibling:cardRefs.current[0];
    

      nextCard.classList.add('latestcard--next');

  };

  return (
    <div className="latest">
      <h2>Latest</h2>
      <div className="latestcards">
        {latestImages.map((url, index) => (
          <div 
            key={index} 
            className={`latestcard ${index === 0 ? 'latestcard--current' : ''} ${index === 1 ? 'latestcard--next' : ''} ${index === latestImages.length - 1 ? 'latestcard--out' : ''}`} 
            ref={el => cardRefs.current[index] = el} 
            onClick={() => handleClick()} // Use onClick for better React handling
          >
            <img src={url} alt={`latest ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className='ReadMore__button'><Link to="/gallery">View More</Link></div>
    </div>
  );
}

export default Latest;
