import React from 'react';

function ProfilePage() {
  const customFont = {
    fontFamily: "", // Ganti dengan font yang Anda inginkan
    textAlign: "center", // Mengatur teks ke tengah
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-2/3 p-4 bg-gray-300 rounded-lg shadow-lg">
        <div style={customFont}>
          <img
            src="https://media.discordapp.net/attachments/1091296534370471997/1164390210080088114/K_1.png?ex=654309e3&is=653094e3&hm=5a3d33ebf1d16a4a78a189f598e3ec36b4cd5a8b66e792140f844c034e457335&=&width=741&height=741"
            alt="Profil Foto"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h1 style={{ ...customFont, fontSize: "1.5rem", color: "#333" }}>Isma Habiburrohman</h1>
          <p style={{ ...customFont, fontSize: "1rem", color: "#666" }}>Mahasiswa Universitas Muhammadiyah Purwokerto</p>
        </div>
        <div className="mt-4">
          <h2 style={{ ...customFont, fontSize: "1.25rem", color: "#333" }}>Tentang Saya</h2>
          <p style={{ ...customFont, fontSize: "1rem", color: "#666" }}>Saya adalah manusia yang sedang mengejar apa yang sedang saya tuju.</p>
        </div>
        <div className="mt-4">
          <h2 style={{ ...customFont, fontSize: "1.25rem", color: "#333" }}>Kontak</h2>
          <ul style={{ ...customFont, fontSize: "1rem", color: "#666" }} className="list-disc pl-6">
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
