import React, { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import {storage} from '../config/firebase';
import '../styles/Gallery.css';
import 'remixicon/fonts/remixicon.css'; // Import Remixicon CSS


function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // State for the modal image

  useEffect(() => {
    const fetchImages = async () => {
      
      const imagesRef = ref(storage, 'gs://devershika-7da8a.appspot.com/imagesClassed');

      try {
        const imageList = await listAll(imagesRef);
        if (imageList.items.length === 0) {
          console.warn("No images found in Firebase Storage.");
          setLoading(false);
          return;
        }

        const imagePromises = imageList.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return {
            name: itemRef.name,
            url: url
          };
        });

        let fetchedImages = await Promise.all(imagePromises);

        // Sorting logic based on your requirements
        fetchedImages = fetchedImages.sort((a, b) => {
          const isStarredA = a.name.endsWith('-starred');
          const isStarA = a.name.endsWith('-star');
          const isStarredB = b.name.endsWith('-starred');
          const isStarB = b.name.endsWith('-star');

          if (isStarredA && !isStarredB) return -1;
          if (!isStarredA && isStarredB) return 1;

          if (isStarA && !isStarB) return -1;
          if (!isStarA && isStarB) return 1;

          const numA = parseInt(a.name.match(/\d+/), 10) || 0;
          const numB = parseInt(b.name.match(/\d+/), 10) || 0;
          return numB - numA; // Descending order
        });

        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images from Firebase Storage:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the selected image for modal
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close-btn')) {
      setSelectedImage(null); // Close modal
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className='gallery'>
      <div className="gallery-title"><h1>Gallery</h1></div>
      <div className="gallery-grid">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image.url} 
                alt={image.name} 
                loading="lazy" 
                onClick={() => openImageModal(image.url)} // Open modal on click
                onError={(e) => {
                  console.error(`Error loading image ${image.name}`);
                  e.target.style.display = 'none'; 
                }} 
              />
            </div>
          ))
        ) : (
          <div className="no-images">No images available</div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          {/* Remixicon close button */}
          
          <div className="modal-image-container">
            <img className="modal-content" src={selectedImage} alt="Zoomed" />
            
          </div>
          <i className="ri-close-line close-btn" onClick={closeModal}></i>
        </div>
      )}
    </div>
  );
}

export default Gallery;
