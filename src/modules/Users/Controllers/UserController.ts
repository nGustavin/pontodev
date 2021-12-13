import monk from 'monk'
import {Request, Response} from 'express'
import { mongo } from '../../../shared/mongo_connection'

export class UserController {
  async create(req: Request, res:Response): Promise<any>{
    const {
      name,
      email,
      permission
    } = req.body


    const users = mongo.get('users')
    await users.insert({
      name,
      email, 
      permission
    })
    await mongo.close()

    return res.status(200).json({message: "create user route!"})
  }
}