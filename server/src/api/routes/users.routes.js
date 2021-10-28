import express from 'express'
import UsersCtrl from '../controller/users.controller.js'
import { admin, verify } from '../../middleware/index.js'

const router = express.Router()

router.route('/users').get(admin, UsersCtrl.apiGetUsers)
router.route('/users/:id').patch(verify, UsersCtrl.apiUpdateUser)

export default router
