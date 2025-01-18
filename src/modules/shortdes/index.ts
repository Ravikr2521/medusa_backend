import Hello from "./service"
import { Module } from "@medusajs/framework/utils"

export default Module("shortdes", {
    service: Hello,
})