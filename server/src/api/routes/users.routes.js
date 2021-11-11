import express from 'express'
import UsersCtrl from '../controller/users.controller.js'
import { verify, member } from '../../middleware/index.js'

const router = express.Router()

router.route('/').get(member, UsersCtrl.apiGetUsers)
router.route('/friends').get(member, UsersCtrl.apiGetUserFriends)
router.route('/friends/:id/match').get(member, UsersCtrl.apiGetMatchingMovies)

router.route('/connect').post(member, UsersCtrl.apiAddRelation)
router.route('/:id').patch(verify, UsersCtrl.apiUpdateUser)

export default router
