import type { CategoryPageProps } from "@/app/types/index"
import { getCategoryBySlug } from "@/app/lib/categories"
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = params; // no need for await
  return <h1>{categoryName}</h1>
}
