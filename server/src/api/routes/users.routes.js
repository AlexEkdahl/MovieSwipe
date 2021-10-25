import express from 'express'
import UsersCtrl from '../controller/users.controller.js'
// import { auth, admin } from '../../middleware/authenticate.js'

const router = express.Router()

router.route('/users').get(UsersCtrl.apiGetUsers)
router.route('/users/:id').patch(UsersCtrl.apiUpdateUser)

export default router
