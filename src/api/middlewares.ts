import {
    defineMiddlewares,
    type MedusaNextFunction,
    type MedusaRequest,
    type MedusaResponse,
} from "@medusajs/framework/http"

export default defineMiddlewares({
    routes: [
        {
            matcher: "/hellow-world",
            middlewares: [
                (
                    req: MedusaRequest,
                    res: MedusaResponse,
                    next: MedusaNextFunction
                ) => {
                    console.log("Received a request!")
                    next()
                },
            ],
        },
    ],
})