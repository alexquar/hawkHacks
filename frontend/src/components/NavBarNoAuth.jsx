
import { Disclosure} from '@headlessui/react'
import { Link } from "react-router-dom"

const navigation = [
  { name: 'Signup', href: '/signup' },
  { name: 'Login', href: '/login' }
]


export default function Example() {
  return (
    <Disclosure as="nav" className="bg-secondary py-2">
         {({ open }) => (
            <div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-around">
                <h1 className='text-3xl text-white'>Geese Spotter</h1>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className= 'text-white hover:bg-white hover:text-primary rounded-md px-3 py-2 text-sm font-medium'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
)}
    </Disclosure>
         
  )
}