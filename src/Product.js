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
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849683941019688/card_normal.png?ex=65ae3629&is=659bc129&hm=7a5f955e17e7fdbc0e10fa3ff620ee301b3f72a4365be88568e86d8e5e56645e&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849683941019688/card_normal.png?ex=65ae3629&is=659bc129&hm=7a5f955e17e7fdbc0e10fa3ff620ee301b3f72a4365be88568e86d8e5e56645e&',
    },
    {
      id: 2,
      name: 'After Training Shiho',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849684977000468/card_after_training.png?ex=65ae3629&is=659bc129&hm=14a26a253b1b4d8c640106b0e20581280d7bb9bf53efb7416f1fc5273bcb1b69&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849684977000468/card_after_training.png?ex=65ae3629&is=659bc129&hm=14a26a253b1b4d8c640106b0e20581280d7bb9bf53efb7416f1fc5273bcb1b69&',
    },
    {
      id: 3,
      name: 'Honami',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849685757136926/card_normal.png?ex=65ae3629&is=659bc129&hm=0d51100d64b721dbf529e1a630dc3a18b1c595e5e794c49f6b543fe63bd5ad3a&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849685757136926/card_normal.png?ex=65ae3629&is=659bc129&hm=0d51100d64b721dbf529e1a630dc3a18b1c595e5e794c49f6b543fe63bd5ad3a&',
    },
    {
      id: 4,
      name: 'After Training Honami',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849686596014141/card_after_training.png?ex=65ae3629&is=659bc129&hm=d5983e414e1de70f25c14419b4d713794dfc122f176755089f998d125cc3cc39&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849686596014141/card_after_training.png?ex=65ae3629&is=659bc129&hm=d5983e414e1de70f25c14419b4d713794dfc122f176755089f998d125cc3cc39&',
    },
    {
      id: 5,
      name: 'Ichika',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849687388725278/card_normal.png?ex=65ae362a&is=659bc12a&hm=312db9f73b916998c52113f11e7888f7f49d104ead7b29d5e806c08b8b760169&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849687388725278/card_normal.png?ex=65ae362a&is=659bc12a&hm=312db9f73b916998c52113f11e7888f7f49d104ead7b29d5e806c08b8b760169&',
    },
    {
      id: 6,
      name: 'After Training Ichika',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849688324051045/card_after_training.png?ex=65ae362a&is=659bc12a&hm=431b3f9f7d239514826a267c1fa8380e71ac0b19dd64b209091962015f6100e2&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849688324051045/card_after_training.png?ex=65ae362a&is=659bc12a&hm=431b3f9f7d239514826a267c1fa8380e71ac0b19dd64b209091962015f6100e2&',
    },
    {
      id: 7,
      name: 'Saki',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849689116790804/card_normal.png?ex=65ae362a&is=659bc12a&hm=68fc5cf0b17a8fec3e201723863476fa51252d717bf4db3d1e4aaf07e411179a&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849689116790804/card_normal.png?ex=65ae362a&is=659bc12a&hm=68fc5cf0b17a8fec3e201723863476fa51252d717bf4db3d1e4aaf07e411179a&',
    },
    {
      id: 8,
      name: 'After Training Saki',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849689938858014/card_after_training.png?ex=65ae362a&is=659bc12a&hm=000ed57b3afd5e23737bb16bda2301cb1d093c7d69d747bd20731c6232f5e0f4&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849689938858014/card_after_training.png?ex=65ae362a&is=659bc12a&hm=000ed57b3afd5e23737bb16bda2301cb1d093c7d69d747bd20731c6232f5e0f4&',
    },
    {
      id: 9,
      name: 'Minori',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849690739986442/card_normal.png?ex=65ae362a&is=659bc12a&hm=9060f87fcfd2e3b7967168e616513c04e33b5893aa8fba2c59a1e34e86218c67&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849690739986442/card_normal.png?ex=65ae362a&is=659bc12a&hm=9060f87fcfd2e3b7967168e616513c04e33b5893aa8fba2c59a1e34e86218c67&',
    },
    {
      id: 10,
      name: 'After Training Minori',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849691708858448/card_after_training.png?ex=65ae362b&is=659bc12b&hm=a20284318532efd6b0ae84617fd38c77b9d13a52d815515aaa4fe9af2561a284&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193849691708858448/card_after_training.png?ex=65ae362b&is=659bc12b&hm=a20284318532efd6b0ae84617fd38c77b9d13a52d815515aaa4fe9af2561a284&',
    },
    {
      id: 11,
      name: 'Haruka',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856407733280818/card_normal.png?ex=65ae3c6c&is=659bc76c&hm=50f4dd2167bfc22590d395e1663d29fc48334421499800c2cb27b9becf4efb32&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856407733280818/card_normal.png?ex=65ae3c6c&is=659bc76c&hm=50f4dd2167bfc22590d395e1663d29fc48334421499800c2cb27b9becf4efb32&',
    },
    {
      id: 12,
      name: 'After Training Haruka',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856408676991026/card_after_training.png?ex=65ae3c6c&is=659bc76c&hm=9156f8ac2e7c52c468943642ebe33670df9a905c52720be7a7c6d4dfba0dedbc&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856408676991026/card_after_training.png?ex=65ae3c6c&is=659bc76c&hm=9156f8ac2e7c52c468943642ebe33670df9a905c52720be7a7c6d4dfba0dedbc&',
    },
    {
      id:13,
      name: 'Airi',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856409683628042/card_normal.png?ex=65ae3c6c&is=659bc76c&hm=cef5818bb535d889e6bce50270c074ff4059536d8f40ca913a1cc783d9a0948a&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856409683628042/card_normal.png?ex=65ae3c6c&is=659bc76c&hm=cef5818bb535d889e6bce50270c074ff4059536d8f40ca913a1cc783d9a0948a&',
    },
    {
      id: 14,
      name: 'After Training Airi',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856410467967067/card_after_training.png?ex=65ae3c6d&is=659bc76d&hm=3c20f88e924c7b666fd13b8509774873bfea4953d89142cc27620d245bd5e06c&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856410467967067/card_after_training.png?ex=65ae3c6d&is=659bc76d&hm=3c20f88e924c7b666fd13b8509774873bfea4953d89142cc27620d245bd5e06c&',
    },
    {
      id: 15,
      name: 'Shizuku',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856411277459567/card_normal.png?ex=65ae3c6d&is=659bc76d&hm=cb04bf42cba6658beb289083f2bba11471c9b4a7d5ba199ec88f1379d555a530&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856411277459567/card_normal.png?ex=65ae3c6d&is=659bc76d&hm=cb04bf42cba6658beb289083f2bba11471c9b4a7d5ba199ec88f1379d555a530&',
    },
    {
      id: 16,
      name: 'After Training Shizuku',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856412032438353/card_after_training.png?ex=65ae3c6d&is=659bc76d&hm=0cd9991e97f030e7f3b838413cd970be9683bbcdfe44eefa1cdf86be5bbe3013&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856412032438353/card_after_training.png?ex=65ae3c6d&is=659bc76d&hm=0cd9991e97f030e7f3b838413cd970be9683bbcdfe44eefa1cdf86be5bbe3013&',
    },
    {
      id: 17,
      name: 'Kohane',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856412867108955/card_normal.png?ex=65ae3c6d&is=659bc76d&hm=aac2f4ad143714ae02d4bb6dbc20b38ba6840a9f650b03f0e8ab16092cdb67be&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856412867108955/card_normal.png?ex=65ae3c6d&is=659bc76d&hm=aac2f4ad143714ae02d4bb6dbc20b38ba6840a9f650b03f0e8ab16092cdb67be&',
    },
    {
      id: 18,
      name: 'After Training Kohane',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856413886316571/card_after_training.png?ex=65ae3c6d&is=659bc76d&hm=43a94a6e899beed88c76b2521e75e4d5063c9cdba0547b82fe9953f7cfe43c54&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856413886316571/card_after_training.png?ex=65ae3c6d&is=659bc76d&hm=43a94a6e899beed88c76b2521e75e4d5063c9cdba0547b82fe9953f7cfe43c54&',
    },
    {
      id: 19,
      name: 'An',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856414658072638/card_normal.png?ex=65ae3c6e&is=659bc76e&hm=f71ba81de49236ed95d5d61958acaef5f841b3cbcaefad349cff2fb7fa936224&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856414658072638/card_normal.png?ex=65ae3c6e&is=659bc76e&hm=f71ba81de49236ed95d5d61958acaef5f841b3cbcaefad349cff2fb7fa936224&',
    },
    {
      id: 20,
      name: 'After Training An',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856415488548905/card_after_training.png?ex=65ae3c6e&is=659bc76e&hm=807c828e640fbcfccad484d22ed2319da1c5e1f692e41284cddbdd2a7734b5ab&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193856415488548905/card_after_training.png?ex=65ae3c6e&is=659bc76e&hm=807c828e640fbcfccad484d22ed2319da1c5e1f692e41284cddbdd2a7734b5ab&',
    },
    {
      id: 21,
      name: 'Akito',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863181630717992/card_normal.png?ex=65ae42bb&is=659bcdbb&hm=befdd965b48becd2db9a228577857c6e67bd619bd1bbe36c43ba338c0118d3ac&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863181630717992/card_normal.png?ex=65ae42bb&is=659bcdbb&hm=befdd965b48becd2db9a228577857c6e67bd619bd1bbe36c43ba338c0118d3ac&',
    },
    {
      id: 22,
      name: 'After Training Akito',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863182532497518/card_after_training.png?ex=65ae42bb&is=659bcdbb&hm=5551d9f257f7d787190cb200f5263fcbfb45edace52d1384a9c9fbc432c5c576&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863182532497518/card_after_training.png?ex=65ae42bb&is=659bcdbb&hm=5551d9f257f7d787190cb200f5263fcbfb45edace52d1384a9c9fbc432c5c576&',
    },
    {
      id: 23,
      name: 'Toya',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863183283273798/card_normal.png?ex=65ae42bb&is=659bcdbb&hm=4b3503c9f47c1f9e98e09594a8fd4a739cfa53ac18066e8156d4192fd368aeb0&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863183283273798/card_normal.png?ex=65ae42bb&is=659bcdbb&hm=4b3503c9f47c1f9e98e09594a8fd4a739cfa53ac18066e8156d4192fd368aeb0&',
    },
    {
      id: 24,
      name: 'After Training Toya',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863184189243442/card_after_training.png?ex=65ae42bc&is=659bcdbc&hm=8b2d68956ef88ea04bf7ff004b5db700c580b5ab7f7e88f7f0fa0e89a6ca0910&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863184189243442/card_after_training.png?ex=65ae42bc&is=659bcdbc&hm=8b2d68956ef88ea04bf7ff004b5db700c580b5ab7f7e88f7f0fa0e89a6ca0910&',
    },
    {
      id: 25,
      name: 'Tsukasa',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863185086812191/card_normal.png?ex=65ae42bc&is=659bcdbc&hm=53f3d3d62799a897954606e985ab8e702a573fbe0eddc475f25a09c61b03a1d5&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863185086812191/card_normal.png?ex=65ae42bc&is=659bcdbc&hm=53f3d3d62799a897954606e985ab8e702a573fbe0eddc475f25a09c61b03a1d5&',
    },
    {
      id: 26,
      name: 'After Training Tsukasa',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863186118623252/card_after_training.png?ex=65ae42bc&is=659bcdbc&hm=f7d9b90cd9cb80dcd5a7196e411fea6cc300732520fec63e5f46dc8dabaf1fbb&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863186118623252/card_after_training.png?ex=65ae42bc&is=659bcdbc&hm=f7d9b90cd9cb80dcd5a7196e411fea6cc300732520fec63e5f46dc8dabaf1fbb&',
    },
    {
      id: 27,
      name: 'Emu',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863187196547132/card_normal.png?ex=65ae42bc&is=659bcdbc&hm=3b90d1e2c44de20fb2a5141d4b48c3e79ad17293354084159ec58d62caf73ee4&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863187196547132/card_normal.png?ex=65ae42bc&is=659bcdbc&hm=3b90d1e2c44de20fb2a5141d4b48c3e79ad17293354084159ec58d62caf73ee4&',
    },
    {
      id: 28,
      name: 'After Training Emu',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863188282888223/card_after_training.png?ex=65ae42bc&is=659bcdbc&hm=06bfa6d03801da306b9130a06bab542aeb6c143384229f98664c27cd0adeefde&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863188282888223/card_after_training.png?ex=65ae42bc&is=659bcdbc&hm=06bfa6d03801da306b9130a06bab542aeb6c143384229f98664c27cd0adeefde&',
    },{
      id: 29,
      name: 'Nene',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863189079806032/card_normal.png?ex=65ae42bd&is=659bcdbd&hm=9d4396684ed67da1010ae74881bfbaa5eda60e14ca9b4fa549081de190aa498b&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863189079806032/card_normal.png?ex=65ae42bd&is=659bcdbd&hm=9d4396684ed67da1010ae74881bfbaa5eda60e14ca9b4fa549081de190aa498b&',
    },
    {
      id: 30,
      name: 'After Training Nene',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863189859942440/card_after_training.png?ex=65ae42bd&is=659bcdbd&hm=47ebe63fc2f08c225328704a36f623cc351e57b2b313ed45a8c2347c4771f28f&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193863189859942440/card_after_training.png?ex=65ae42bd&is=659bcdbd&hm=47ebe63fc2f08c225328704a36f623cc351e57b2b313ed45a8c2347c4771f28f&',
    },
    {
      id: 31,
      name: 'Rui',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868140170461184/card_normal.png?ex=65ae4759&is=659bd259&hm=bc5d2c74dc8f1470bcb303a9b67c749dc89ca838c7a3243000538fc9709266b2&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868140170461184/card_normal.png?ex=65ae4759&is=659bd259&hm=bc5d2c74dc8f1470bcb303a9b67c749dc89ca838c7a3243000538fc9709266b2&',
    },
    {
      id: 32,
      name: 'After Training Rui',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868141370028082/card_after_training.png?ex=65ae4759&is=659bd259&hm=b888c9f6bf0701c6133c03056ae7508a802323dcede03e87ce3a591e18acedad&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868141370028082/card_after_training.png?ex=65ae4759&is=659bd259&hm=b888c9f6bf0701c6133c03056ae7508a802323dcede03e87ce3a591e18acedad&',
    },{
      id: 33,
      name: 'Kanade',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868142364082186/card_normal.png?ex=65ae475a&is=659bd25a&hm=6ae13716d82456bfe001a853778f0bae6a38bace9bd82970f0520264ec8e9875&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868142364082186/card_normal.png?ex=65ae475a&is=659bd25a&hm=6ae13716d82456bfe001a853778f0bae6a38bace9bd82970f0520264ec8e9875&',
    },
    {
      id: 34,
      name: 'After Training Kanade',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868143324573777/card_after_training.png?ex=65ae475a&is=659bd25a&hm=0329002c91bc41dcfbd49800246d7ddd5445462755b66622f0c5ae36a1f2ce88&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868143324573777/card_after_training.png?ex=65ae475a&is=659bd25a&hm=0329002c91bc41dcfbd49800246d7ddd5445462755b66622f0c5ae36a1f2ce88&',
    },
    {
      id: 35,
      name: 'Mafuyu',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868144347971614/card_normal.png?ex=65ae475a&is=659bd25a&hm=2493eb113823421f4239430cc81c870a86e8fcc13b8175880744b6dee988c439&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868144347971614/card_normal.png?ex=65ae475a&is=659bd25a&hm=2493eb113823421f4239430cc81c870a86e8fcc13b8175880744b6dee988c439&',
    },
    {
      id: 36,
      name: 'After Training Mafuyu',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868145312673903/card_after_training.png?ex=65ae475a&is=659bd25a&hm=980ba7acb90c17a1315b52dc54da1cf3966e0861f8526bfa261f812fee2a7179&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868145312673903/card_after_training.png?ex=65ae475a&is=659bd25a&hm=980ba7acb90c17a1315b52dc54da1cf3966e0861f8526bfa261f812fee2a7179&',
    },
    {
      id: 37,
      name: 'Ena',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868146029887508/card_normal.png?ex=65ae475b&is=659bd25b&hm=5e9a58144099a2e604fb7edd4afc83799a77d0879bd8e6f03b5c5882318609e8&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868146029887508/card_normal.png?ex=65ae475b&is=659bd25b&hm=5e9a58144099a2e604fb7edd4afc83799a77d0879bd8e6f03b5c5882318609e8&',
    },
    {
      id: 38,
      name: 'After Training Ena',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868147242053663/card_after_training.png?ex=65ae475b&is=659bd25b&hm=55c663a865596132a024ba3806a91e444806710d81f4b9f088b3cfa5f5c25e22&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868147242053663/card_after_training.png?ex=65ae475b&is=659bd25b&hm=55c663a865596132a024ba3806a91e444806710d81f4b9f088b3cfa5f5c25e22&',
    },
    {
      id: 39,
      name: 'Mizuki',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868148072529931/card_normal.png?ex=65ae475b&is=659bd25b&hm=26b93e5237b2cf2d06a150e889b8bf005e892d5fb96581932497088f9c4948ff&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868148072529931/card_normal.png?ex=65ae475b&is=659bd25b&hm=26b93e5237b2cf2d06a150e889b8bf005e892d5fb96581932497088f9c4948ff&',
    },
    {
      id: 40,
      name: 'After Training Mizuki',
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868149041410119/card_after_training.png?ex=65ae475b&is=659bd25b&hm=85c54fdd2dfc503a394ab8597dfdd464191ef02b458d5cb4ddcf447d952dc60b&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1193868149041410119/card_after_training.png?ex=65ae475b&is=659bd25b&hm=85c54fdd2dfc503a394ab8597dfdd464191ef02b458d5cb4ddcf447d952dc60b&',
    },
  ]

  export default function Example() {
    return (
      <div className="bg-cover bg-center bg-image-url" style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <div className="text-container bg-white bg-opacity-75 p-6 rounded-md">
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Artwork Original Project Sekai</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-md p-4 text-center">
                <div className="aspect-h-7 aspect-w-7 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-125 lg:h-80">
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

