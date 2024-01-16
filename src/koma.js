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
const komik = [
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172205744009286/FB_IMG_1704782964960.jpg?ex=65af6288&is=659ced88&hm=bdde9d1ba4f210f0f4de06a8ee0c39fc71fb6c4b2b42ba2d67f97690ad90bbaf&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172205744009286/FB_IMG_1704782964960.jpg?ex=65af6288&is=659ced88&hm=bdde9d1ba4f210f0f4de06a8ee0c39fc71fb6c4b2b42ba2d67f97690ad90bbaf&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206004064406/FB_IMG_1704782967544.jpg?ex=65af6288&is=659ced88&hm=95c3233b364041b533afd37a4a2d73c5edbd2bddd46c11aebba6f97fbd8a8dcf&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206004064406/FB_IMG_1704782967544.jpg?ex=65af6288&is=659ced88&hm=95c3233b364041b533afd37a4a2d73c5edbd2bddd46c11aebba6f97fbd8a8dcf&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206226346004/FB_IMG_1704782969502.jpg?ex=65af6288&is=659ced88&hm=96a1209238f9961d8e076916d88a1ab729386e3f065e83cf436ae4f48bcbf21a&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206226346004/FB_IMG_1704782969502.jpg?ex=65af6288&is=659ced88&hm=96a1209238f9961d8e076916d88a1ab729386e3f065e83cf436ae4f48bcbf21a&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206494789703/FB_IMG_1704782971364.jpg?ex=65af6288&is=659ced88&hm=49f20848a600c3481a09eb7d5d49ab874ae21c1cfa27a91c36c932249b5c8ee2&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206494789703/FB_IMG_1704782971364.jpg?ex=65af6288&is=659ced88&hm=49f20848a600c3481a09eb7d5d49ab874ae21c1cfa27a91c36c932249b5c8ee2&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206733873172/FB_IMG_1704782973257.jpg?ex=65af6288&is=659ced88&hm=f58090a06768fb2957863dd5014423db7c126e63ed6ec143df52b645ab5e1897&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206733873172/FB_IMG_1704782973257.jpg?ex=65af6288&is=659ced88&hm=f58090a06768fb2957863dd5014423db7c126e63ed6ec143df52b645ab5e1897&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206977126472/FB_IMG_1704782975098.jpg?ex=65af6288&is=659ced88&hm=33c4fe74ad8574a5464ad163413767b272797d992a6d8d0abff8f73a965a5ab5&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172206977126472/FB_IMG_1704782975098.jpg?ex=65af6288&is=659ced88&hm=33c4fe74ad8574a5464ad163413767b272797d992a6d8d0abff8f73a965a5ab5&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172207232987176/FB_IMG_1704782977167.jpg?ex=65af6288&is=659ced88&hm=8bac80278cb177e8f0b71f5d66d03ccaaa4b5eb0d36c07edf775585c20001fa6&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172207232987176/FB_IMG_1704782977167.jpg?ex=65af6288&is=659ced88&hm=8bac80278cb177e8f0b71f5d66d03ccaaa4b5eb0d36c07edf775585c20001fa6&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172207488831518/FB_IMG_1704782979306.jpg?ex=65af6288&is=659ced88&hm=2c4a2fcafe88108aae9c28e5c16b77322fffadf27b56aeec8363145e4d0e262a&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172207488831518/FB_IMG_1704782979306.jpg?ex=65af6288&is=659ced88&hm=2c4a2fcafe88108aae9c28e5c16b77322fffadf27b56aeec8363145e4d0e262a&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172207774052403/FB_IMG_1704782981185.jpg?ex=65af6288&is=659ced88&hm=4172f59ddc2f4029c17c5f918bcbe759ce626b7e402384ecd169bff08aa09a21&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172207774052403/FB_IMG_1704782981185.jpg?ex=65af6288&is=659ced88&hm=4172f59ddc2f4029c17c5f918bcbe759ce626b7e402384ecd169bff08aa09a21&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172208000553000/FB_IMG_1704782983806.jpg?ex=65af6289&is=659ced89&hm=c65441bac2d4b49ca82392b329c723606763762d80a0e3e33b11363ac270a452&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172208000553000/FB_IMG_1704782983806.jpg?ex=65af6289&is=659ced89&hm=c65441bac2d4b49ca82392b329c723606763762d80a0e3e33b11363ac270a452&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172269635842048/FB_IMG_1704782985939.jpg?ex=65af6297&is=659ced97&hm=fa4ce87a854e5b2215f269ae5461e278a1aaf4672b2c8a5ea79f2ddfc4e3da3b&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172269635842048/FB_IMG_1704782985939.jpg?ex=65af6297&is=659ced97&hm=fa4ce87a854e5b2215f269ae5461e278a1aaf4672b2c8a5ea79f2ddfc4e3da3b&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172269862338610/FB_IMG_1704782987976.jpg?ex=65af6297&is=659ced97&hm=20669f0323c6275f93bb14954352548239fa51da569fcdfe10032487bfb856de&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172269862338610/FB_IMG_1704782987976.jpg?ex=65af6297&is=659ced97&hm=20669f0323c6275f93bb14954352548239fa51da569fcdfe10032487bfb856de&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172270197887007/FB_IMG_1704782990138.jpg?ex=65af6297&is=659ced97&hm=69e7e87a02a7e86cdf53ac39716d47c289b3893a269656908edcdd4be6ab4076&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172270197887007/FB_IMG_1704782990138.jpg?ex=65af6297&is=659ced97&hm=69e7e87a02a7e86cdf53ac39716d47c289b3893a269656908edcdd4be6ab4076&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172270432759918/FB_IMG_1704782992484.jpg?ex=65af6297&is=659ced97&hm=e39998d1d1882e8e1cb8d98092f7d570a04973469c06b42aa2b37b4045d7051b&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172270432759918/FB_IMG_1704782992484.jpg?ex=65af6297&is=659ced97&hm=e39998d1d1882e8e1cb8d98092f7d570a04973469c06b42aa2b37b4045d7051b&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172270663450684/FB_IMG_1704782994593.jpg?ex=65af6297&is=659ced97&hm=e56f0df4e69e2fcfacb9f8f723b339aaf1031ea6a58975bf4b185c8e27f44e5c&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172270663450684/FB_IMG_1704782994593.jpg?ex=65af6297&is=659ced97&hm=e56f0df4e69e2fcfacb9f8f723b339aaf1031ea6a58975bf4b185c8e27f44e5c&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172270873170022/FB_IMG_1704782996913.jpg?ex=65af6298&is=659ced98&hm=523163ce299c6b598a0fa83e8ef78de1e017465d214f3102fe34c73be2a6456b&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172270873170022/FB_IMG_1704782996913.jpg?ex=65af6298&is=659ced98&hm=523163ce299c6b598a0fa83e8ef78de1e017465d214f3102fe34c73be2a6456b&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172271254847518/FB_IMG_1704782998858.jpg?ex=65af6298&is=659ced98&hm=6b92cfd6c62db7c036eea47f7a62ec102add2c330f966bb788c0a5eac6beba77&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172271254847518/FB_IMG_1704782998858.jpg?ex=65af6298&is=659ced98&hm=6b92cfd6c62db7c036eea47f7a62ec102add2c330f966bb788c0a5eac6beba77&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172271552647208/FB_IMG_1704783000994.jpg?ex=65af6298&is=659ced98&hm=bbdc59c802eca1578af59b1b7a2ec25e5ae2e36d34e3c6b1bb99018ad360ecaa&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172271552647208/FB_IMG_1704783000994.jpg?ex=65af6298&is=659ced98&hm=bbdc59c802eca1578af59b1b7a2ec25e5ae2e36d34e3c6b1bb99018ad360ecaa&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172271795908689/FB_IMG_1704783003101.jpg?ex=65af6298&is=659ced98&hm=25f7a165b35aa63404933f5ce35b3e4324f256dadbb9aba7f975e61980faec2f&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172271795908689/FB_IMG_1704783003101.jpg?ex=65af6298&is=659ced98&hm=25f7a165b35aa63404933f5ce35b3e4324f256dadbb9aba7f975e61980faec2f&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172272030793750/FB_IMG_1704783005136.jpg?ex=65af6298&is=659ced98&hm=ea98fff4ab868c4e19e64969577f9ec00813b522f19b7c63b77dcf0d31b9f619&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172272030793750/FB_IMG_1704783005136.jpg?ex=65af6298&is=659ced98&hm=ea98fff4ab868c4e19e64969577f9ec00813b522f19b7c63b77dcf0d31b9f619&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172318574973019/FB_IMG_1704783007269.jpg?ex=65af62a3&is=659ceda3&hm=16cf28a57cf9bed7d0bb60de4b12961c77052d8c18ea4da8d3b49a58cc1b1951&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172318574973019/FB_IMG_1704783007269.jpg?ex=65af62a3&is=659ceda3&hm=16cf28a57cf9bed7d0bb60de4b12961c77052d8c18ea4da8d3b49a58cc1b1951&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172318809849856/FB_IMG_1704783009474.jpg?ex=65af62a3&is=659ceda3&hm=790c23a7ad0ca53a5515d8cbd5d9062fec3dee48d5f37ec832ea4c6b7735ebca&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172318809849856/FB_IMG_1704783009474.jpg?ex=65af62a3&is=659ceda3&hm=790c23a7ad0ca53a5515d8cbd5d9062fec3dee48d5f37ec832ea4c6b7735ebca&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172319153799188/FB_IMG_1704783011413.jpg?ex=65af62a3&is=659ceda3&hm=29532a547ce963b89641c8ce785a7d822cfcbe754d515bf94be2b0806ef9de08&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172319153799188/FB_IMG_1704783011413.jpg?ex=65af62a3&is=659ceda3&hm=29532a547ce963b89641c8ce785a7d822cfcbe754d515bf94be2b0806ef9de08&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172319430611005/FB_IMG_1704783013410.jpg?ex=65af62a3&is=659ceda3&hm=c3edf52984fdb2f890a338a35506ccd84bc33723fe282feef5f493ff8033c931&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172319430611005/FB_IMG_1704783013410.jpg?ex=65af62a3&is=659ceda3&hm=c3edf52984fdb2f890a338a35506ccd84bc33723fe282feef5f493ff8033c931&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172319673876620/FB_IMG_1704783015672.jpg?ex=65af62a3&is=659ceda3&hm=25075d31aa259e7b79cf963ffb22db5953cfe2a464c2ce5e0b74988e14bd8dad&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172319673876620/FB_IMG_1704783015672.jpg?ex=65af62a3&is=659ceda3&hm=25075d31aa259e7b79cf963ffb22db5953cfe2a464c2ce5e0b74988e14bd8dad&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172319942316113/FB_IMG_1704783018372.jpg?ex=65af62a3&is=659ceda3&hm=578c393b9bee244695f9c963c7b581d8ce4bffb0681a7fe4597afb264b5c4594&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172319942316113/FB_IMG_1704783018372.jpg?ex=65af62a3&is=659ceda3&hm=578c393b9bee244695f9c963c7b581d8ce4bffb0681a7fe4597afb264b5c4594&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172320223330304/FB_IMG_1704783020750.jpg?ex=65af62a3&is=659ceda3&hm=05d04555ef875f208532b9179ea848f1f3ec8c90406df1ae9777c04989eedf2f&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172320223330304/FB_IMG_1704783020750.jpg?ex=65af62a3&is=659ceda3&hm=05d04555ef875f208532b9179ea848f1f3ec8c90406df1ae9777c04989eedf2f&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172320521130034/FB_IMG_1704783022873.jpg?ex=65af62a3&is=659ceda3&hm=fce2c9345970f62d033dae42449bb2c03220f652a9dc4559ca018cbfa717e7e0&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172320521130034/FB_IMG_1704783022873.jpg?ex=65af62a3&is=659ceda3&hm=fce2c9345970f62d033dae42449bb2c03220f652a9dc4559ca018cbfa717e7e0&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172320789561374/FB_IMG_1704783025231.jpg?ex=65af62a3&is=659ceda3&hm=76e2c1e3347467bd09b7cc58dd344d9b5395d95bd3f9b7e1f6e8843c95aa3994&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172320789561374/FB_IMG_1704783025231.jpg?ex=65af62a3&is=659ceda3&hm=76e2c1e3347467bd09b7cc58dd344d9b5395d95bd3f9b7e1f6e8843c95aa3994&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172321158676500/FB_IMG_1704783028442.jpg?ex=65af62a4&is=659ceda4&hm=b3dce0dd2e6334525319ff819a7a05f07fe8def2781ab0223f6b35e2e2aa80c4&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172321158676500/FB_IMG_1704783028442.jpg?ex=65af62a4&is=659ceda4&hm=b3dce0dd2e6334525319ff819a7a05f07fe8def2781ab0223f6b35e2e2aa80c4&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172358005633094/FB_IMG_1704783030592.jpg?ex=65af62ac&is=659cedac&hm=76f79ee3edbef2dbe555b16f7bf691634e780c6e9edabeed51ef5548bf11e926&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172358005633094/FB_IMG_1704783030592.jpg?ex=65af62ac&is=659cedac&hm=76f79ee3edbef2dbe555b16f7bf691634e780c6e9edabeed51ef5548bf11e926&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172358311821433/FB_IMG_1704783032651.jpg?ex=65af62ac&is=659cedac&hm=f2d363a69d637c5934821ab7e3aced595b6a01eb47dafe57c87ce8e502c9f48e&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172358311821433/FB_IMG_1704783032651.jpg?ex=65af62ac&is=659cedac&hm=f2d363a69d637c5934821ab7e3aced595b6a01eb47dafe57c87ce8e502c9f48e&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172358567661619/FB_IMG_1704783034967.jpg?ex=65af62ac&is=659cedac&hm=764c440bb0e18be1a814d6ab460af65b2ce44afd54f9ecdc7e36788a603d67b4&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172358567661619/FB_IMG_1704783034967.jpg?ex=65af62ac&is=659cedac&hm=764c440bb0e18be1a814d6ab460af65b2ce44afd54f9ecdc7e36788a603d67b4&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172358848688158/FB_IMG_1704783037132.jpg?ex=65af62ac&is=659cedac&hm=e5896086fb156c36f59a9859c4ec00283670f890d3e63d433396936d9ea57730&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172358848688158/FB_IMG_1704783037132.jpg?ex=65af62ac&is=659cedac&hm=e5896086fb156c36f59a9859c4ec00283670f890d3e63d433396936d9ea57730&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172359125516368/FB_IMG_1704783039104.jpg?ex=65af62ad&is=659cedad&hm=7403f6034e1d0819943b86521688aa1d1743e79bed6c764f8a91debd9029e358&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172359125516368/FB_IMG_1704783039104.jpg?ex=65af62ad&is=659cedad&hm=7403f6034e1d0819943b86521688aa1d1743e79bed6c764f8a91debd9029e358&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172359385550848/FB_IMG_1704783041134.jpg?ex=65af62ad&is=659cedad&hm=355316e675d2863ec86fc67e584c3a6c9b3df1b5a59c5d0daeb1aa3dc7a9be8a&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172359385550848/FB_IMG_1704783041134.jpg?ex=65af62ad&is=659cedad&hm=355316e675d2863ec86fc67e584c3a6c9b3df1b5a59c5d0daeb1aa3dc7a9be8a&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172359817572352/FB_IMG_1704783043093.jpg?ex=65af62ad&is=659cedad&hm=dd174531808e922b36d560d80dcd54be5c1736567ca743b1d0c96b6cafeffdf5&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172359817572352/FB_IMG_1704783043093.jpg?ex=65af62ad&is=659cedad&hm=dd174531808e922b36d560d80dcd54be5c1736567ca743b1d0c96b6cafeffdf5&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172360086011955/FB_IMG_1704783045036.jpg?ex=65af62ad&is=659cedad&hm=7184a73267e514215370bc3c845a949ff98d82d7d4ebcd0cda2d875554c2b015&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172360086011955/FB_IMG_1704783045036.jpg?ex=65af62ad&is=659cedad&hm=7184a73267e514215370bc3c845a949ff98d82d7d4ebcd0cda2d875554c2b015&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172360358637598/FB_IMG_1704783048286.jpg?ex=65af62ad&is=659cedad&hm=c71d575b1c56df4042a7b5b3e3dc8853d83b7ac6ba05dc90de219555324e21b5&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172360358637598/FB_IMG_1704783048286.jpg?ex=65af62ad&is=659cedad&hm=c71d575b1c56df4042a7b5b3e3dc8853d83b7ac6ba05dc90de219555324e21b5&',
    },
    {
      href: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172360614494278/FB_IMG_1704783050491.jpg?ex=65af62ad&is=659cedad&hm=5f4a2de97e5559f00cfa67f24a0b65cbf1d4666f5e99aa151531b804a50484db&',
      imageSrc: 'https://cdn.discordapp.com/attachments/1091296534370471997/1194172360614494278/FB_IMG_1704783050491.jpg?ex=65af62ad&is=659cedad&hm=5f4a2de97e5559f00cfa67f24a0b65cbf1d4666f5e99aa151531b804a50484db&',
    },
  ]

  export default function Example() {
    return (
      <div className="bg-cover bg-center bg-image-url" style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <div className="text-container bg-white bg-opacity-75 p-6 rounded-md">
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Komik 1koma Original Project Sekai</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {komik.map((komik) => (
              <div className="group relative bg-white rounded-md p-4 text-center">
                <div className="aspect-h-7 aspect-w-7 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-125">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={komik.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg text-gray-700 font-semibold">
                    <a href={komik.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
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

