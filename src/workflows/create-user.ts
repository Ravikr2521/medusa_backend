import { 
  createWorkflow, 
  WorkflowResponse,
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { Modules } from "@medusajs/framework/utils"

const createUserStep = createStep(
  "create-user",
  async ({}, { container }) => {
    const userModuleService = container.resolve(Modules.USER)

    const user = await userModuleService.createUsers({
      email: "useweq23232r@example.com",
      // first_name: "John",
      // last_name: "Smith",
    })

    return new StepResponse({ user }, user.id)
  },
  async (userId, { container }) => {
    if (!userId) {
      return
    }
    const userModuleService = container.resolve(Modules.USER)

    await userModuleService.deleteUsers([userId])
  }
)

export const createUserWorkflow = createWorkflow(
  "create-user",
  () => {
    const { user } = createUserStep()

    return new WorkflowResponse({
      user,
    })
  }
)