import express from 'express'
import { getExplorePageRepos } from '../controllers/explore.controller.js'


const router = express()

router.get('/repos/:language', getExplorePageRepos)

export default router