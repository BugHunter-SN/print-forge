import Link from 'next/link'
import Image from 'next/image'
import DesktopLogo from '@/public/printforge-logo.svg'
import MobileLogo from '@/public/pringforge-logo-icon.svg'

export default function Header() {
  return (
 <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href='/'>
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
             </Link>
            <ul className="flex items-center gap-2.5">
              <li>
                <Link href='/3d-models'>3D Models</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </header>
  )
}      