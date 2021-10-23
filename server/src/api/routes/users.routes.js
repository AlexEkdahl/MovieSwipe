import express from 'express'
import UsersCtrl from '../controller/users.controller.js'

const router = express.Router()

router.route('/users').get(UsersCtrl.apiGetUsers)
router.route('/users/:id').patch(UsersCtrl.apiUpdateUser)

export default router
