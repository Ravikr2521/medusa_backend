import { model } from "@medusajs/framework/utils"
import { PrimaryKey } from "@mikro-orm/core"
const MyCustom = model.define("my_custom", 
    {
    id: model.id().decorate(PrimaryKey),
    name: model.text(),
    age: model.number(),
    email: model.text().unique(),
    hasAccount: model.boolean(),
    date_of_birth: model.dateTime(),
    favColor: model.enum(["black", "white"]).default("black")
}
)
export default MyCustom