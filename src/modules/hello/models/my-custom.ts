import { model } from "@medusajs/framework/utils"
const MyCustom = model.define("my_custom",
    {
        id: model.id().primaryKey(),
        name: model.text().nullable(),
        age: model.number().nullable(),
        email: model.text().unique().nullable(),
        hasAccount: model.boolean().default(true),
        date_of_birth: model.dateTime().nullable(),
        favColor: model.enum(["black", "white"]).default("black").nullable()
    }
)
export default MyCustom