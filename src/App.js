import React, { useState } from 'react';
import style from './Gallery.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: 'Image 1',
      src: 'https://picsum.photos/id/237/400/300',
    },
    {
      id: 2,
      title: 'Image 2',
      src: 'https://picsum.photos/id/238/400/300',
    },
    {
      id: 3,
      title: 'Image 3',
      src: 'https://picsum.photos/id/239/400/300',
    },
    {
      id: 4,
      title: 'Image 4',
      src: 'https://picsum.photos/id/240/400/300',
    },
    {
      id: 5,
      title: 'Image 5',
      src: 'https://picsum.photos/id/241/400/300',
    },
    {
      id: 6,
      title: 'Image 6',
      src: 'https://picsum.photos/id/242/400/300',
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className={style.gallery}>
      <h2 className={style.title}>Gallery</h2>
      <div className={style.images}>
        {images.map((image) => (
          <div
            key={image.id}
            className={style.imageWrapper}
            onClick={() => handleImageClick(image)}
          >
            <img className={style.image} src={image.src} alt={image.title} />
            <div className={style.overlay}>
              <h3 className={style.imageTitle}>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={style.modal} onClick={handleModalClose}>
          <img className={style.modalImage} src={selectedImage.src} alt={selectedImage.title} />
          <div className={style.modalOverlay}>
            <h3 className={style.modalImageTitle}>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;


