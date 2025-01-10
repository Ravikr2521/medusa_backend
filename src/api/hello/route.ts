import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { createPostWorkflow, createPuttWorkflow } from "src/workflows/create-post"

type HellowWorldReq = {
    name: string,
    age: number,
    email: string
}
type HelloWorldPutReq = {
    id: string,
    name: string,
    email: string,
    hasAccount: boolean
}
type HellowWorldDeleteReq = {
    id: string
}
import HelloModuleService from '../../modules/hello/service';

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const helloService: HelloModuleService = req.scope.resolve('hello')
    const data = await helloService.listMyCustoms();
    res.send({
        data
    })
}

export const DELETE = async (
    req: MedusaRequest<HellowWorldDeleteReq>,
    res: MedusaResponse
) => {
    const hellowService: HelloModuleService = req.scope.resolve('hello')
    const data = await hellowService.deleteMyCustoms(req.body.id)
    res.json({
        data
    })
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

export const PUT = async (
    req: MedusaRequest<HelloWorldPutReq>,
    res: MedusaResponse
) => {
    const { result } = await createPuttWorkflow().run({
        input: req.body
    })
    res.json(result)

}