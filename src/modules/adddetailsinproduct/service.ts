import { MedusaService, InjectManager } from "@medusajs/framework/utils"
import MyAddDetailsProduct from "./models/MyAddDetailsProduct"


type ModuleOptions = {
    capitalize?: boolean
}

class AddProductModuleService extends MedusaService({
    MyAddDetailsProduct,
}) {

    protected options_: ModuleOptions

    constructor({ }, options?: ModuleOptions) {
        super(...arguments)

        this.options_ = options || {
            capitalize: false,
        }
    }

}
export default AddProductModuleService