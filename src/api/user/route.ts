import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { createUserWorkflow } from "src/workflows/create-user";

export const POST = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const { result } = await createUserWorkflow(req.scope)
        .run()
        res.send(result)
}