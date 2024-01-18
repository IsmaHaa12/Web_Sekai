import React, { useState, useEffect } from 'react';
import DataGambar from './DataGambar.json'

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = DataGambar;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Menentukan waktu perpindahan otomatis (dalam milidetik), contoh: 3000ms atau 3 detik
    const interval = setInterval(() => {
      handleNext();
    }, 9000);

    // Membersihkan interval saat komponen tidak lagi digunakan atau unmount
    return () => clearInterval(interval);
  }, [currentIndex])

  return (
    <div className="image-gallery">
      <button className="arrow-button" onClick={handlePrev}>
        <img src="https://cdn.discordapp.com/attachments/1169655452435492926/1192456803523498045/K.png?ex=65a924f0&is=6596aff0&hm=f8010736e64e34f0bca765d4285ef0d5ad3698507c68557b679ed8b5f3ddf475&" width={50} alt="Previous" />
      </button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="gallery-image"
        style={{ maxWidth: '807px', width: '100%', height: 'auto', border:"4px solid #1f1e33" }}
      />
      <button className="arrow-button" onClick={handleNext}>
        <img src="https://cdn.discordapp.com/attachments/1169655452435492926/1192456704688930876/K.png?ex=65a924d9&is=6596afd9&hm=7774a859e15f50be8c5be436f5a30ef4ddcaaea78c9830682b7966ebe29ad86f&" width={50} alt="Next" />
      </button>
    </div>
  );
};

export default ImageGallery;
