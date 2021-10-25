import express from 'express'
import auth from '../controller/auth.controller.js'

const router = express.Router()

router.route('/register').post(auth.apiRegisterUser)
router.route('/login').post(auth.apiLoginUser)
router.route('/whoami').get(auth.apiWhoAmI)

export default router
