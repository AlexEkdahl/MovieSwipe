import express from 'express'
import auth from '../controller/auth.controller.js'
import { guest, member } from '../../middleware/index.js'

const router = express.Router()

router.route('/register').post(guest, auth.apiRegisterUser)
router.route('/login').post(guest, auth.apiLoginUser)
router.route('/logout').post(member, auth.apiLogoutUser)
router.route('/whoami').get(member, auth.apiWhoAmI)

export default router
