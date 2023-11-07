/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Navbar from './Navbar';
const products = [
    {
      id: 1,
      name: 'Shiho',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res004_no028_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res004_no028_rip/card_normal.png',
    },
    {
      id: 2,
      name: 'After Training Shiho',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res004_no028_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res004_no028_rip/card_after_training.png',
    },
    {
      id: 3,
      name: 'Honami',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res003_no031_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res003_no031_rip/card_normal.png',
    },
    {
      id: 4,
      name: 'After Training Honami',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res003_no031_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res003_no031_rip/card_after_training.png',
    },
    {
      id: 5,
      name: 'Ichika',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res001_no029_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res001_no029_rip/card_normal.png',
    },
    {
      id: 6,
      name: 'After Training Ichika',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res001_no029_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res001_no029_rip/card_after_training.png',
    },
    {
      id: 7,
      name: 'Saki',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res002_no029_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res002_no029_rip/card_normal.png',
    },
    {
      id: 8,
      name: 'After Training Saki',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res002_no029_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res002_no029_rip/card_after_training.png',
    },
    {
      id: 9,
      name: 'Minori',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res005_no005_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res005_no005_rip/card_normal.png',
    },
    {
      id: 10,
      name: 'After Training Minori',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res005_no005_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res005_no005_rip/card_after_training.png',
    },
    {
      id: 11,
      name: 'Haruka',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res006_no010_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res006_no010_rip/card_normal.png',
    },
    {
      id: 12,
      name: 'After Training Haruka',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res006_no010_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res006_no010_rip/card_after_training.png',
    },
    {
      id:13,
      name: 'Airi',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res007_no012_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res007_no012_rip/card_normal.png',
    },
    {
      id: 14,
      name: 'After Training Airi',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res007_no012_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res007_no012_rip/card_after_training.png',
    },
    {
      id: 15,
      name: 'Shizuku',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res008_no025_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res008_no025_rip/card_normal.png',
    },
    {
      id: 16,
      name: 'After Training Shizuku',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res008_no025_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res008_no025_rip/card_after_training.png',
    },
    {
      id: 17,
      name: 'Kohane',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res009_no009_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res009_no009_rip/card_normal.png',
    },
    {
      id: 18,
      name: 'After Training Kohane',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res009_no009_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res009_no009_rip/card_after_training.png',
    },
    {
      id: 19,
      name: 'An',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res010_no014_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res010_no014_rip/card_normal.png',
    },
    {
      id: 20,
      name: 'After Training An',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res010_no014_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res010_no014_rip/card_after_training.png',
    },
    {
      id: 21,
      name: 'Akito',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res011_no027_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res011_no027_rip/card_normal.png',
    },
    {
      id: 22,
      name: 'After Training Akito',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res011_no027_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res011_no027_rip/card_after_training.png',
    },
    {
      id: 23,
      name: 'Toya',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res012_no012_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res012_no012_rip/card_normal.png',
    },
    {
      id: 24,
      name: 'After Training Toya',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res012_no012_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res012_no012_rip/card_after_training.png',
    },
    {
      id: 25,
      name: 'Tsukasa',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res013_no016_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res013_no016_rip/card_normal.png',
    },
    {
      id: 26,
      name: 'After Training Tsukasa',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res013_no016_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res013_no016_rip/card_after_training.png',
    },
    {
      id: 27,
      name: 'Emu',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res014_no014_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res014_no014_rip/card_normal.png',
    },
    {
      id: 28,
      name: 'After Training Emu',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res014_no014_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res014_no014_rip/card_after_training.png',
    },{
      id: 29,
      name: 'Nene',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res015_no022_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res015_no022_rip/card_normal.png',
    },
    {
      id: 30,
      name: 'After Training Nene',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res015_no022_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res015_no022_rip/card_after_training.png',
    },
    {
      id: 31,
      name: 'Rui',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res016_no016_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res016_no016_rip/card_normal.png',
    },
    {
      id: 32,
      name: 'After Training Rui',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res016_no016_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res016_no016_rip/card_after_training.png',
    },{
      id: 33,
      name: 'Kanade',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res017_no006_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res017_no006_rip/card_normal.png',
    },
    {
      id: 34,
      name: 'After Training Kanade',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res017_no006_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res017_no006_rip/card_after_training.png',
    },
    {
      id: 35,
      name: 'Mafuyu',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res018_no025_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res018_no025_rip/card_normal.png',
    },
    {
      id: 36,
      name: 'After Training Mafuyu',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res018_no025_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res018_no025_rip/card_after_training.png',
    },
    {
      id: 37,
      name: 'Ena',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res019_no023_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res019_no023_rip/card_normal.png',
    },
    {
      id: 38,
      name: 'After Training Ena',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res019_no023_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res019_no023_rip/card_after_training.png',
    },
    {
      id: 39,
      name: 'Mizuki',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res020_no024_rip/card_normal.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res020_no024_rip/card_normal.png',
    },
    {
      id: 40,
      name: 'After Training Mizuki',
      href: 'https://storage.sekai.best/sekai-assets/character/member/res020_no024_rip/card_after_training.png',
      imageSrc: 'https://storage.sekai.best/sekai-assets/character/member/res020_no024_rip/card_after_training.png',
    },
  ]

  export default function Example() {
    return (
      <div className="bg-cover bg-center bg-image-url-1" style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Artwork Original by SEGA</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-md p-4 text-center">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg text-gray-700 font-semibold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

