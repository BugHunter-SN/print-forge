import type { CategoryPageProps } from "@/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = params; // no need for await
  return <h1>{categoryName}</h1>
}
