import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const cartModuleService = req.scope.resolve('cart')
    const result = await cartModuleService.retrieveCart(req.params.id)
    res.send({
        result
    })

}