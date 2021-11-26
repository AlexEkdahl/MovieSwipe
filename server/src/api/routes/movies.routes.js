import express from 'express'
import MoviesCtrl from '../controller/movies.controller.js'
import { member } from '../../middleware/index.js'

const router = express.Router()

router.route('/').get(member, MoviesCtrl.apiGetSwipeableMovies)
router.route('/liked').get(member, MoviesCtrl.apiGetLikedMovies)

export default router
