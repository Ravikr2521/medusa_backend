import { model } from "@medusajs/framework/utils"
const MyCustom = model.define("my_custom",
    {
        id: model.id().primaryKey(),
        shortDes: model.text().nullable(),
        
    }
)
export default MyCustom