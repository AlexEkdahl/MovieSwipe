import express from 'express'
import MoviesCtrl from '../controller/movies.controller.js'
import { member } from '../../middleware/index.js'

const router = express.Router()

router.route('/').get(member, MoviesCtrl.apiGetMovies)

export default router
