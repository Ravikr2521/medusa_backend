import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const productModuleService = req.scope.resolve("product")

        const [result, counts] = await productModuleService.listAndCountProducts()
        res.status(200).json({
            counts,
        })
}

