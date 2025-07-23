import React from 'react'
import type { ReactNode } from "react"
import { getAllCategories } from "@/app/lib/categories"
export default function ModelsLayout({children} : {children: ReactNode}) {
    const categories = getAllCategories()
    console.log(categories);
  return (
    <div>
        <h1>Navbar will go here</h1>
        {children}
    </div>
  )
}
