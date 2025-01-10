import { MedusaService, InjectManager } from "@medusajs/framework/utils"
import MyCustom from "./models/my-custom"

type ModuleOptions = {
    capitalize?: boolean
}

class HelloModuleService extends MedusaService({
    MyCustom,
}) {

    protected options_: ModuleOptions

    constructor({ }, options?: ModuleOptions) {
        super(...arguments)

        this.options_ = options || {
            capitalize: false,
        }
    }


    // async createCustomUser( data: { name: string; age: number; email: string; date_of_birth: Date; favColor?: string }) {
    //     // const manager = dataSource.manager

    //     const { name, age, email, date_of_birth, favColor = "black" } = data
    //     const finalName = this.options_.capitalize ? name.toUpperCase() : name

    // const newUser = await manager.MyCustom.create({
    //     name: finalName,
    //     age,
    //     email,
    //     date_of_birth,
    //     favColor
    // })
    //     return newUser
    // }
}
export default HelloModuleService