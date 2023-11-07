import Navbar from './Navbar'

export default function Example() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8" class="bg-cover bg-center bg-image-url-1" style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Navbar/>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-28 sm:py-28 lg:py-26">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div>
              <p  className="mt-2 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">Web Project Sekai No Yokoso</p>
            </div>
          </div>
          <div className="text-center">
            <p className="mt-6 text-lg leading-8 text-gray-600">
            <img src='https://sekai.best/images/banner-new.webp' height={300} width={660}/>
              <img src='https://media.discordapp.net/attachments/1091296534370471997/1162697005550796891/image0.png?ex=65461b77&is=6533a677&hm=7c8046835d5e242aacd3d5a06b6ea120e93ff260184d6c6b9865430275799fbd&=&width=1288&height=375' height={300} width={660} />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}