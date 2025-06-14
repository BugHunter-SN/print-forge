import Link from 'next/link';
import React from 'react'


export default function Button() {
  return (
     <Link
          href="/3d-models"
          className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
                >
                Browse Models
      </Link>
  )
}
