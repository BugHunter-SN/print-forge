import type { CategoryPageProps } from "@/app/types/index"
import { getCategoryBySlug } from "@/app/lib/categories"
import { log } from "console";
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = params; // no need for await
  const category = getCategoryBySlug(categoryName)
  // console.log(category);
  return <h1>{category.displayName}</h1>
}
