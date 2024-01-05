import Navbar from './Navbar'
import React from 'react';
import ImageGallery from './ImageGallery';


export default function Example() {

  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8" class="bg-cover bg-center bg-image-url" style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Navbar/>
        <div className='flex items-center justify-center mt-6'>
          <img src='https://media.discordapp.net/attachments/1078251159757803610/1171398962880725022/pjsk_out.png?ex=65a65d4c&is=6593e84c&hm=943fe478fbade37c5ca972bc5e87b734a84c088375bde8486a88f43f9cfe5072&=&format=webp&quality=lossless&width=1920&height=652' width={300} height={100} />
        </div>
        <ImageGallery />
        <div className='flex items-center justify-center'>
          <img src='https://media.discordapp.net/attachments/1091296534370471997/1162697005550796891/image0.png?ex=65a26477&is=658fef77&hm=294e3ecadebbc667a9dd5ee1ba7733e9e08c7d59a4d6987ade7665b4d84a45a7&width=1288&height=375&' width={300} height={100} />
        </div>
      </div>
    </div>
  )
}