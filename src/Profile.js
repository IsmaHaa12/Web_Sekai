import React from 'react';

function ProfilePage() {
  const customFont = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const boldText = {
    fontWeight: "bold",
  };

  return (
    <div className="bg-cover bg-image-url-1 min-h-screen flex items-center justify-center" >
      <div className="w-1/3 p-4 bg-cover bg-image-url-2 rounded-lg shadow-lg">
        <div style={customFont}>
          <img
            src="https://media.discordapp.net/attachments/1091296534370471997/1164390210080088114/K_1.png?ex=654309e3&is=653094e3&hm=5a3d33ebf1d16a4a78a189f598e3ec36b4cd5a8b66e792140f844c034e457335&=&width=741&height=741"
            alt="Profil Foto"
            className="w-48 h-48 mx-auto rounded-full mb-4"
          />
          <h1 style={{ ...customFont, ...boldText, fontSize: "1.5rem", color: "#333" }}>Isma Habiburrohman</h1>
          <p style={{ ...customFont, ...boldText, fontSize: "1rem", color: "#333" }}>Mahasiswa Universitas Muhammadiyah Purwokerto</p>
        </div>
        <div className="mt-4">
          <h2 style={{ ...customFont, ...boldText, fontSize: "1.25rem", color: "#333" }}>Kontak</h2>
          <ul style={{ ...customFont, ...boldText, fontSize: "1rem", color: "#333" }} className="list-disc pl-6">
            <p>Email: isma.haa.012@gmail.com</p>
            <p>Telepon: 081229211071</p>
            <p>Alamat: Pasir kec.Ayah kab.Kebumen</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;