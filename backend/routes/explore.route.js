import express from 'express'
import { getExplorePageRepos } from '../controllers/explore.controller.js'
import { ensureAuth } from '../middleware/ensureAuth.js'


const router = express()

router.get('/repos/:language',ensureAuth,  getExplorePageRepos)

export default router