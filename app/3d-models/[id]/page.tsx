import type { ModelDetailPageProps } from "@/app/types"
import { getModelById } from "@/app/lib/models"
import { log } from "console"
export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
    const { id } = await params
    const model = await getModelById(id)
    console.log(model);

  return <h1>The id of the model is {id}</h1>
}
