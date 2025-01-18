import { model } from "@medusajs/framework/utils"
const MyAddDetailsProduct = model.define("MyAddDetailsProduct",
    {
        id: model.id().primaryKey(),
        short_des: model.text().nullable(),
    }
)
export default MyAddDetailsProduct