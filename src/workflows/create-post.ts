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
  export const createPostWorkflow = createWorkflow(
    "create-post",
    (postInput: CreatePostWorkflowInput) => {
      const post = createPostStep(postInput)
  
      return new WorkflowResponse(post)
    }
  )