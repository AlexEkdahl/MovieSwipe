import express from 'express'
import auth from '../../auth/auth.js'

const router = express.Router()

router.route('/register').post(auth.apiRegisterUser)
router.route('/login').post(auth.apiLoginUser)

export default router
