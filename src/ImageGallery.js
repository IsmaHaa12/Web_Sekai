import React, { useState } from 'react';

const images = [
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712207427965018/GCpRcDdaQAAYW-w.png?ex=65aa12cd&is=65979dcd&hm=3f79c58af0a45dfd38621f74db3750a7f0943d8a567b9520b454c7b24c4af940&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712209021808690/GCpRcDda8AAFYZo.png?ex=65aa12ce&is=65979dce&hm=0187cfe5f07205455c7496cc028aed5657bbc1bb6ba54eed59ad45d05a8e2461&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712203506298900/GCpRdNBa0AAzrLk.png?ex=65aa12cc&is=65979dcc&hm=ecbe6bb26d5397b1b8f1ffb40be85d724b5599cbf193240345fd3f45844df912&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712205255319572/GCpRdM_aYAAGddW.png?ex=65aa12cd&is=65979dcd&hm=40211ae909850bbf5bf7ece4803c9d33ce25faf51f76484138789392368ff2ec&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192710556088541275/GCpReT7a0AAfe7z.png?ex=65aa1144&is=65979c44&hm=1ffe918f27757fee419264b175bd384a4068dc9549ece1d5e4d399bbed9f67a6&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712201627246632/GCpReT_a0AAsv31.png?ex=65aa12cc&is=65979dcc&hm=cb1fb2da1bc4098c651cf4d150d768453878b2b82d65f407cc0fa52c5640e9c1&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712210552725515/GCpRf6dbgAAZp8s.png?ex=65aa12ce&is=65979dce&hm=59928626abbec88e4993e56e9689eed4409a714a29df1e20d1e9d795c0c11a0c&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712212503080961/GCpRf6ebcAA5KUN.png?ex=65aa12ce&is=65979dce&hm=7053e2f3248814d095575914a8ce68184b89db1918a15c60102c52cd134226b7&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712213803307008/GCpRhPIbwAEIp9I.png?ex=65aa12cf&is=65979dcf&hm=3dfc3dba9cebbe569c4a015017f551d3a0c649baa7a25c5110080cd1ea72df6c&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712215128711188/GCpRhPIbcAAMGJA.png?ex=65aa12cf&is=65979dcf&hm=7219276910cb4e58102f88c31cd8ff2ff3b1378a0eaa87be5ebaea1d24c7f9d6&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712456867414056/GCp8hjbbQAAB0NL.png?ex=65aa1309&is=65979e09&hm=ee29c63056e223ce1ec4f6e3b41be87d5ec2451e77a50413b919a5580d2a6168&',
  'https://cdn.discordapp.com/attachments/1091296534370471997/1192712458528370799/GCp8hjgacAATba6.png?ex=65aa1309&is=65979e09&hm=2c659196e03a3098194e6776c429d2656b39a4880e0f69c0ca3bb6e382d14d33&',
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
