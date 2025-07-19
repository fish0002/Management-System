import { createMemoryHistory, createRouter } from 'vue-router'
import routes from './router'



const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router