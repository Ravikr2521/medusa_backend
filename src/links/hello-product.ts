import AddProductModule from "../modules/adddetailsinproduct"
import ProductModule from "@medusajs/medusa/product"
import { defineLink } from "@medusajs/framework/utils"

export default defineLink(
  ProductModule.linkable.product,
  AddProductModule.linkable.myAddDetailsProduct
)
