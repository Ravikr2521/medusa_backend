// other imports...
import helloWorldLoader from "./loaders/hello-world"
import Hello from "./service"
import { Module } from "@medusajs/framework/utils"

export default Module("hello", {
    service: Hello,
    loaders: [helloWorldLoader],
})