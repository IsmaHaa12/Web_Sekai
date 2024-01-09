import React from "react";
import Navbar from './Navbar'

export default function Example() {
  return (
    <div class="bg-cover bg-image-url">
      <header><Navbar /></header>
      <div class="flex flex-col min-h-screen" >
        <div className='flex items-center justify-center mt-10 mb-9'>
          <img src='https://cdn.discordapp.com/attachments/1091296534370471997/1193914350893793310/logo_school_refusal.png?ex=65ae7263&is=659bfd63&hm=143fe6cd5abe6a61a9bf5b1b481a98d17a753ce527511aeec0ef049deb9735a4&' width={300} height={100} />
        </div>
        <div class="relative w-full group max-w-md min-w-0 mx-auto mt-11 mb-6 break-words shadow-2xl bg-gradient-to-br from-blue-600 to-lime-900 md:max-w-sm rounded-xl">
         <div class="pb-6">
          <div class="flex flex-wrap justify-center">
            <div class="flex justify-center w-full">
              <div class="relative">
                <img
                  src="https://media.discordapp.net/attachments/1091296534370471997/1171670762982211604/K_2.png?ex=655d866e&is=654b116e&hm=43e42f0b1c9d856bc9caf48584929d5f709fdb7758b32dbcc0b3b29b12a5cde0&=&width=889&height=889"
                  class="dark:shadow-xl bg-gradient-to-br from-orange-500 to-slate-500 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
          </div>
          <div class="mt-20 text-center">
            <h3 class="mb-1 text-2xl font-bold leading-normal bg-gradient-to-br from-lime-500 to-cyan-500 bg-clip-text text-transparent">
              Isma Habiburrohman
            </h3>
            <div class="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
              <div class="text-sm tracking-wide font-bold bg-gradient-to-br from-orange-400 to-slate-500 bg-clip-text text-transparent">
                Universitas Muhammadiyah Purwokerto
              </div>
            </div>
            <div class="w-full text-center">
              <div class="flex justify-center pt-8 pb-0 lg:pt-4">
                <div class="flex space-x-2">
                  <a
                    class="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                    href="https://github.com/IsmaHaa12"
                    rel="noopener"
                    aria-label="Isma Habiburrohman on Github"
                    target="_blank"
                  >
                    <svg
                      class="w-6 h-6 overflow-visible fill-current"
                      alt=""
                      aria-hidden="true"
                      viewBox="0 0 140 140"
                    >
                      <path d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"></path>
                    </svg>
                  </a>

                  <a
                    class="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                    href="https://www.instagram.com/_shinonome_ena/"
                    rel="noopener"
                    aria-label="Isma Habiburrohman on Instagram"
                    target="_blank"
                  >
                    <svg
                      class="w-6 h-6 overflow-visible fill-current"
                      alt=""
                      aria-hidden="true"
                      viewBox="0 0 140 140"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M73.1735 2C89.9405 2 92.3831 2.0897 99.4487 2.414C106.79 2.7521 111.807 3.9182 116.195 5.6225C120.801 7.35353 124.973 10.0686 128.422 13.5782C131.931 17.0266 134.646 21.1993 136.378 25.805C138.082 30.1934 139.248 35.2097 139.586 42.5513C139.917 49.9136 140 52.2596 140 71V71.552C140 89.7887 139.917 92.1623 139.586 99.4487C139.248 106.79 138.082 111.807 136.378 116.195C134.646 120.801 131.931 124.973 128.422 128.422C124.973 131.931 120.801 134.646 116.195 136.378C111.807 138.082 106.79 139.248 99.4487 139.586C92.0864 139.917 89.7404 140 71 140H70.448C52.2113 140 49.8377 139.917 42.5513 139.586C35.2097 139.248 30.1934 138.082 25.805 136.378C21.1993 134.646 17.0266 131.931 13.5782 128.422C10.0686 124.973 7.35353 120.801 5.6225 116.195C3.9182 111.807 2.7521 106.79 2.414 99.4487C2.0897 92.3831 2 89.9336 2 73.1735V68.8265C2 52.0595 2.0897 49.6169 2.414 42.5513C2.7521 35.2097 3.9182 30.1934 5.6225 25.805C7.35353 21.1993 10.0686 17.0266 13.5782 13.5782C17.0266 10.0686 21.1993 7.35353 25.805 5.6225C30.1934 3.9182 35.2097 2.7521 42.5513 2.414C49.6169 2.0897 52.0664 2 68.8265 2H73.1735V2ZM72.6146 14.4338H69.3854C52.439 14.4338 50.1758 14.5097 43.1171 14.834C36.3896 15.1445 32.7395 16.2623 30.3038 17.2076C27.0815 18.4634 24.7838 19.9538 22.3688 22.3688C19.9538 24.7838 18.4634 27.0815 17.2076 30.3038C16.2623 32.7395 15.1376 36.3896 14.834 43.1171C14.5097 50.1758 14.4338 52.439 14.4338 69.3854V72.6146C14.4338 89.561 14.5097 91.8242 14.834 98.8829C15.1445 105.61 16.2623 109.261 17.2076 111.696C18.4634 114.912 19.9607 117.216 22.3688 119.631C24.7838 122.046 27.0815 123.537 30.3038 124.792C32.7395 125.738 36.3896 126.862 43.1171 127.166C50.3897 127.497 52.5701 127.566 71 127.566H71.552C89.4713 127.566 91.6793 127.497 98.876 127.166C105.61 126.855 109.261 125.738 111.696 124.792C114.912 123.537 117.216 122.046 119.631 119.631C122.046 117.216 123.537 114.919 124.792 111.696C125.738 109.261 126.862 105.61 127.166 98.8829C127.497 91.6034 127.566 89.4299 127.566 71V70.448C127.566 52.5287 127.497 50.3207 127.166 43.124C126.855 36.3896 125.738 32.7395 124.792 30.3038C123.687 27.3062 121.923 24.5947 119.631 22.3688C117.405 20.077 114.694 18.3134 111.696 17.2076C109.261 16.2623 105.61 15.1376 98.8829 14.834C91.8242 14.5097 89.561 14.4338 72.6146 14.4338ZM71 35.5685C75.6529 35.5685 80.2603 36.485 84.559 38.2656C88.8578 40.0462 92.7637 42.656 96.0539 45.9461C99.344 49.2363 101.954 53.1422 103.734 57.441C105.515 61.7397 106.432 66.3471 106.432 71C106.432 75.6529 105.515 80.2603 103.734 84.559C101.954 88.8578 99.344 92.7637 96.0539 96.0539C92.7637 99.344 88.8578 101.954 84.559 103.734C80.2603 105.515 75.6529 106.432 71 106.432C61.603 106.432 52.5908 102.699 45.9461 96.0539C39.3015 89.4092 35.5685 80.397 35.5685 71C35.5685 61.603 39.3015 52.5908 45.9461 45.9461C52.5908 39.3015 61.603 35.5685 71 35.5685V35.5685ZM71 48.0023C64.9006 48.0023 59.0511 50.4253 54.7382 54.7382C50.4253 59.0511 48.0023 64.9006 48.0023 71C48.0023 77.0994 50.4253 82.9489 54.7382 87.2618C59.0511 91.5747 64.9006 93.9977 71 93.9977C77.0994 93.9977 82.9489 91.5747 87.2618 87.2618C91.5747 82.9489 93.9977 77.0994 93.9977 71C93.9977 64.9006 91.5747 59.0511 87.2618 54.7382C82.9489 50.4253 77.0994 48.0023 71 48.0023V48.0023ZM107.832 25.8878C110.028 25.8878 112.134 26.7602 113.687 28.313C115.24 29.8658 116.112 31.9718 116.112 34.1678C116.112 36.3638 115.24 38.4698 113.687 40.0226C112.134 41.5754 110.028 42.4478 107.832 42.4478C105.636 42.4478 103.53 41.5754 101.977 40.0226C100.425 38.4698 99.5522 36.3638 99.5522 34.1678C99.5522 31.9718 100.425 29.8658 101.977 28.313C103.53 26.7602 105.636 25.8878 107.832 25.8878Z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    class="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                    href="https://discord.gg/pYkmcPus"
                    rel="noopener"
                    aria-label="25:00 Nightcord"
                    target="_blank"
                  >
                    <svg
                      class="w-4 h-4 overflow-visible fill-current"
                      alt=""
                      aria-hidden="true"
                      viewBox="0 0 140 140"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-6">
                <p class="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                  Konichiwandahoy!!!!
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center pt-8 pb-0 lg:pt-4">
          </div>
          <div class="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
            <div class="absolute flex -space-x-12 rounded-b-2xl">
              <div class="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-blue-400/90 group-hover:bg-amber-600/90 z-10"></div>
              <div class="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-blue-300/90 group-hover:bg-amber-500/90 z-20"></div>
              <div class="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-blue-200/90 group-hover:bg-amber-400/90 z-30"></div>
              <div class="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-blue-100/90 group-hover:bg-amber-300/90 z-40"></div>
              <div class="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-blue-50/90 group-hover:bg-amber-200/90 z-50"></div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
}