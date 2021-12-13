import { Router } from 'express'
import { UserController } from './modules/Users/Controllers/UserController'
import { usersRoutes } from './modules/Users/Routes/UserRoutes'

const router = Router()

router.use('/users', usersRoutes)

export { router }
