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
      name: 'Raiden shogun jk | Asiri Senpai',
      href: 'https://twitter.com/asirisenpai/status/1717376469704572953?s=19',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1167773659692277891/F9VYqtHaYAA9A97.jpg?ex=654f58f8&is=653ce3f8&hm=6af7def7972a969dc7d56af081101f78ec70f80de10ca1add09fbf5eac6a5611&=&width=711&height=889',
    },
    {
      id: 2,
      name: 'Kohane | こぱとと',
      href: 'https://x.com/kopaust/status/1717858690370269375?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1167774361831354478/F9blY1makAAP3Ix.jpg?ex=654f59a0&is=653ce4a0&hm=20ff34764c453bdadeb70c2b5ec75894c5fbd444945b490215c383db9e7187cd&=&width=547&height=889',
    },
    {
      id: 3,
      name: 'Furina | Asiri Senpai',
      href: 'https://x.com/asirisenpai/status/1702571231860682816?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1167775100070805675/F6C_YPHbkAAI3rm.jpg?ex=654f5a50&is=653ce550&hm=45640298670141c2683321be053dca3b91b4993786f2b9f0cd7b9faf6e41470d&=&width=711&height=889',
    },
    {
      id: 4,
      name: 'Raiden Shogun | Asiri Senpai',
      href: 'https://x.com/asirisenpai/status/1716071860302164371?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1167775684945526795/F9C2DgRaoAA1AS3.jpg?ex=654f5adb&is=653ce5db&hm=8c82b08159f2e6009f669bffc6387d556d20ea22705f0c3680d8355946228390&=&width=711&height=889',
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
      name: 'Kagamine Rin | 謝謝いぬ',
      href: 'https://x.com/inu_totemo/status/1718074509989998660?s=20',
      imageSrc: 'https://cdn.discordapp.com/attachments/1078251159757803610/1167780319018094652/F9fTqJJaYAAKKSf.jpg?ex=654f5f2c&is=653cea2c&hm=d0ebbf798d0f09f1223cfb2b41c266e6541dbb0b387779aa5dff20435807fc20&',
    },
    {
      id: 8,
      name: 'Furina | Mookyuu9',
      href: 'https://x.com/Mookyuu9/status/1717194795482075450?s=20',
      imageSrc: 'https://cdn.discordapp.com/attachments/1078251159757803610/1167782466992492625/F9SzQz6bMAAg_fJ.jpg?ex=654f612c&is=653cec2c&hm=f52b4a87020385c485bbfa5c88e800c8f0407668eb264afe78d581c7ae1f3965&',
    },
    {
      id: 9,
      name: 'Furina | jura🫧',
      href: 'https://x.com/jura_oekaki3/status/1721102712035774514?s=20',
      imageSrc: 'https://media.discordapp.net/attachments/1078251159757803610/1171027144525217792/F-KVyxCbgAAZlDF.jpg?ex=655b2f03&is=6548ba03&hm=6f2ffeda5fae246c6266ac617c985d9de1e7b13e74a82fcacbf7993102e9489d&=&width=646&height=889',
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
      <div class="bg-gradient-to-r from-red-200 to-blue-500 w-full">

        <Navbar />

        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Fan Art</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
