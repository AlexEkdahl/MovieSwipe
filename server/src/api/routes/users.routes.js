import express from 'express'
import UsersCtrl from '../controller/users.controller.js'

const router = express.Router()

router.route('/').get(UsersCtrl.apiGetUsers).post(UsersCtrl.apiPostUser)
router.route('/:id').patch(UsersCtrl.apiUpdateUser)

export default router
