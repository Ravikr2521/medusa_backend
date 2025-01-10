import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { createPostWorkflow } from "src/workflows/create-post"

type HellowWorldReq = {
    name: string,
    age: number,
    email: string
}

export const POST = async (
    req: MedusaRequest<HellowWorldReq>,
    res: MedusaResponse
) => {

    const { result } = await createPostWorkflow().run({
        input: req.body
    })
    res.json(result)
}