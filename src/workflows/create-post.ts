import {
  createStep,
  createWorkflow,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import HelloModuleService from "src/modules/hello/service"
type CreatePostWorkflowInput = {
  name: string
  age: number
  email: string
}
type createPutWorkFlowInput = {
  id: string,
  name: string,
  email: string,
  hasAccount: boolean
}
const createPostStep = createStep(
  "create-post",
  async ({ name, age, email }: CreatePostWorkflowInput, { container }) => {
    const blogModuleService: HelloModuleService = container.resolve("hello")


    const post = await blogModuleService.createMyCustoms({
      name,
      age,
      email,
      date_of_birth: Date.now()
    })
    return new StepResponse(post, post)
  },
)

const createPutStep = createStep(
  "update-post",
  async ({ id, name, email, hasAccount }: createPutWorkFlowInput, { container }) => {
    const blogModuleService: HelloModuleService = container.resolve("hello")


    const put = await blogModuleService.updateMyCustoms({
      id,
      name,
      email,
      hasAccount
    })

    return new StepResponse(put, put)
  },
)

export const createPostWorkflow = createWorkflow(
  "create-post",
  (postInput: CreatePostWorkflowInput) => {
    const post = createPostStep(postInput)

    return new WorkflowResponse(post)
  }
)

export const createPuttWorkflow = createWorkflow(
  "update-post",
  (putInput: createPutWorkFlowInput) => {
    const post = createPutStep(putInput)

    return new WorkflowResponse(post)
  }
)