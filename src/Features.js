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
      name: 'Nene Emu | 菊102 / ｷｸﾄｳｼﾞ',
      href: 'https://x.com/kiku_102/status/1724361528822943832?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1174570076238790786/F-3d6WpbsAAUZqg.jpg?ex=656812a0&is=65559da0&hm=03ce05b0fb275a518cd359f7a01e0a56a10fa99a1cd91a30676c0ce00f90bba3&=&width=1215&height=889',
    },
    {
      id: 2,
      name: 'Kohane | こぱとと',
      href: 'https://x.com/kopaust/status/1717858690370269375?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1167774361831354478/F9blY1makAAP3Ix.jpg?ex=654f59a0&is=653ce4a0&hm=20ff34764c453bdadeb70c2b5ec75894c5fbd444945b490215c383db9e7187cd&=&width=547&height=889',
    },
    {
      id: 3,
      name: 'Airi | ネココ',
      href: 'https://x.com/nekoko_pjsk/status/1724689972513685926?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1174571178829037609/F-9UY0vaIAADB_9.jpg?ex=656813a7&is=65559ea7&hm=e8f7473dfea84da82b7fd08897063f8312eab28b6335f8b4d2b15f19fd05afc0&=&width=943&height=889',
    },
    {
      id: 4,
      name: 'Minori | 未確認生命体K',
      href: 'https://x.com/keseranpasaraa/status/1724796524239180117?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1174572003152367639/F--1S2yaQAAFmcL.jpg?ex=6568146c&is=65559f6c&hm=a4f92e8e80ca112523ce992cdb8431b90771a8d16850b9a4d0d20835dea9f2db&=&width=753&height=889',
    },
    {
      id: 5,
      name: 'Saki Shiho Emu | 菊102 / ｷｸﾄｳｼﾞ',
      href: 'https://x.com/kiku_102/status/1717838547062071406?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1167776177914658856/F9ZUSWza4AAD_Fj.jpg?ex=654f5b51&is=653ce651&hm=692a2943883eb4b4081720a5e648a94c6ed069345ce0eb03c45b3984e1b6d736&=&width=1440&height=889',
    },
    {
      id: 6,
      name: 'Honami | くへん🍓/10디페Y1',
      href: 'https://x.com/k_heng1223/status/1717557721254564220?s=20',
      imageSrc: 'https://cdn.discordapp.com/attachments/1078251159757803610/1167779446737092698/F9X9eRUbwAA7Xpu.jpg?ex=654f5e5c&is=653ce95c&hm=be09161c5b6677c2f96565c8c2be559e4c19244073fe1ba351729da2015c9266&',
    },
    {
      id: 7,
      name: 'Mafuyu | あおせ',
      href: 'https://x.com/aose_pp/status/1724021685354188993?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1174576152657023016/F-z0lVibsAAAMIJ.jpg?ex=65681849&is=6555a349&hm=744c116b4a1824daddd2d4a6201594613f25d97b88b4bdeed17ead96cbe7d0d6&=&width=604&height=889',
    },
    {
      id: 8,
      name: 'Ena | チャス',
      href: 'https://x.com/chasu_ice/status/1722195357189452200?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1174573769096962048/F-Z3jNXawAAT1uO.jpg?ex=65681611&is=6555a111&hm=b28e50d493c8c2d12572e09a27b78318512a2918ddf4aa1f17dfd7875805eb7a&=&width=889&height=889',
    },
    {
      id: 9,
      name: 'Kanade | Yume',
      href: 'https://x.com/yumeyume_030/status/1723634428688425287?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1174575560320634880/F-uUYEBboAAu5uh.jpg?ex=656817bc&is=6555a2bc&hm=800b92585d5aebb2b6ad54ad39f8c22d6669a484306115baaec61ab7f577b437&=&width=724&height=889',
    },
    {
      id: 10,
      name: 'Kanade | ririne9999_rine',
      href: 'https://x.com/ririne9999_rine/status/1721140054310134159?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1171028568613072998/F-K3u_ya4AAujWE.jpg?ex=655b3057&is=6548bb57&hm=559644b2370d035c971eab936dc62b02140667b4ccb4538597ca12fff662724d&=&width=708&height=889',
    },
    {
      id: 11,
      name: 'Emu | UWØN',
      href: 'https://x.com/UWON0303/status/1718537035957645356?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1171029415191384084/F9l39DNbIAAUrpa.jpg?ex=655b3121&is=6548bc21&hm=c4c5f9737b596046246794020d5039688a40730ac909e554b6e4b858b4d33a00&=&width=615&height=889',
    },
    {
      id: 12,
      name: 'Nene | 雪鱼🐟',
      href: 'https://x.com/ukiNa77/status/1718336544430493858?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1171030219751174154/F9jB9rIaUAAmA8H.jpg?ex=655b31e1&is=6548bce1&hm=a28cff92deb060f896d4e5a0f70bc392215f5d69d0561a0f1e236eb9caf58ebc&=&width=889&height=889',
    },
  ]
  export default function Example() {
    return (
      <div className="bg-cover bg-center bg-image-url-1" style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Fan Art</h2>
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
