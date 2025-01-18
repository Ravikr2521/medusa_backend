import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import HelloModuleService from "src/modules/hello/service"

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    console.log(req.params,"scope")
    const helloService: HelloModuleService = req.scope.resolve('hello')

    const data = await helloService.retrieveMyCustom(req.params.id)
    res.json({
        data
    })
  }