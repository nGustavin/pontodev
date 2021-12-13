import {Router} from 'express'
import { UserController } from '../Controllers/UserController'

const usersRoutes = Router()
const usersController = new UserController()

usersRoutes.post('/create', usersController.create)

export {usersRoutes}