import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: '', href: '#'},
  { name: '', href: '#'},
  { name: 'Home', href: '/' },
  { name: 'Art Card', href: '/Product'},
  { name: 'Fan Art', href: '/Feature'},
  { name: 'Video Music', href: '/Video'},
  { name: 'Komik', href: '/koma'},
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50" class="bg-gray-800">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between p-4 lg:px-8">
            <a href="Profile" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src="https://media.discordapp.net/attachments/1091296534370471997/1171670762982211604/K_2.png?ex=655d866e&is=654b116e&hm=43e42f0b1c9d856bc9caf48584929d5f709fdb7758b32dbcc0b3b29b12a5cde0&=&width=889&height=889"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div class="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Cari Sesuatu Bang.."
            />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="Features" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://cdn.discordapp.com/attachments/1091296534370471997/1189928881180909628/K_2.png?ex=65a92d21&is=6596b821&hm=c0a2d24b0394825659c2680c2cad4308d92877933dd5fe97fc1e65bad4bdb9c1&"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-500 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="Navbar"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
