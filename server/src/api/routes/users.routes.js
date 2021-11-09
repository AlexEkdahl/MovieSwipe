import express from 'express'
import UsersCtrl from '../controller/users.controller.js'
import { admin, verify, member } from '../../middleware/index.js'

const router = express.Router()

router.route('/').get(admin, UsersCtrl.apiGetUsers)
router.route('/connect').post(member, UsersCtrl.apiAddRelation)
router.route('/:id').patch(verify, UsersCtrl.apiUpdateUser)

export default router
