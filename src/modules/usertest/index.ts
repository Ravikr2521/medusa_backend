// other imports...
import { Module } from "@medusajs/framework/utils"
import helloWorldLoader from "./loaders/hello-world"
import HelloWorld from "./service"

export default Module("hello", {
    service: HelloWorld,

    loaders: [helloWorldLoader],
})