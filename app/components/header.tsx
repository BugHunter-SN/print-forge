import Link from 'next/link'
import Image from 'next/image'
import DesktopLogo from '../../public/printforge-logo.svg'
import MobileLogo from '../../public/pringforge-logo-icon.svg'

export default function Header() {
  return (
 <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              {/* Desktop logo */}
              <Image
              src={DesktopLogo}
              alt='Printforge logo'
              className="w-[200px] h-auto hidden md:block"
               />
              {/* Mobile logo */}
              <Image
              src={MobileLogo}
              alt='Printforge logo'
              className="w-[40px] h-auto block md:hidden"
               />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
  )
}      