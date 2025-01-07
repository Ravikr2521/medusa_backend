import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"

type HellowWorldReq = {
    name: string,
    age: number
}

export const GET = (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    res.json({
        message: "[GET] Hello world!",
    })
}

export const POST = async (
    req: MedusaRequest<HellowWorldReq>,
    res: MedusaResponse
) => {
    res.json({
        message: `[POST] Hello world! ${req.body.name}`,
    })
}