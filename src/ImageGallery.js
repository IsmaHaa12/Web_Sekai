import React, { useState, useEffect } from 'react';

const images = [
  'https://cdn.discordapp.com/attachments/1091296534370471997/1194166460562550794/GDXr6HPa8AA4ZnA.png?ex=65af5d2e&is=659ce82e&hm=01a2b4228cf7d4e5d8906467eda5ee73a0218cd6afd35c8b35d3cf25a6ea4e6a&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1194166462340927578/GDXr6HQbQAA7TaM.png?ex=65af5d2f&is=659ce82f&hm=3dea2109ba110fa9fe21507fc5eda51925905d1b0c0174b09a994615fbf7f6e0&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1194166464110927892/GDXr7YXagAE70Aw.png?ex=65af5d2f&is=659ce82f&hm=ec60cfd5411bbb618990dff04443956ec4341fbc5506b85c4348e9ee187a414e&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1194166465948037210/GDXr7YVbQAApLAT.png?ex=65af5d30&is=659ce830&hm=8cecec0eacf9fc3db1e9921f81f88652042108223398f029c3be550c64f08a37&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1194166467491532910/GDXr8mabcAA5bjl.png?ex=65af5d30&is=659ce830&hm=cd7720fbc14209d17856cc8e9c2000a48a2748b526b28ced5b244f2a65269caf&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1194166469026652200/GDXr8mbbkAAnsRO.png?ex=65af5d30&is=659ce830&hm=8e6334f19ff5fb7ff80f67103d948a966d3ec19da160bb976b8931fda89459c9&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1194166471190909058/GDXr97ubIAAQhmH.png?ex=65af5d31&is=659ce831&hm=0da789d679b465aed08e37f9b745872e7d791875bf8b5b455c431fabe50517ee&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1194166472788942858/GDXr97daoAAI0QG.png?ex=65af5d31&is=659ce831&hm=a47e7c74e67796142e15ea8a7350192e9314c74eb54fa0b0e962683d0a228d9b&',
  // Tambahkan URL gambar lain sesuai kebutuhan
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <img class="photo photo-container"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="gallery-image"
      />
      <button className="arrow-button" onClick={handleNext}>
        <img src="https://cdn.discordapp.com/attachments/1169655452435492926/1192456704688930876/K.png?ex=65a924d9&is=6596afd9&hm=7774a859e15f50be8c5be436f5a30ef4ddcaaea78c9830682b7966ebe29ad86f&" width={50} alt="Next" />
      </button>
    </div>
  );
};

export default ImageGallery;
