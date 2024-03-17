import express from 'express'
import { getUserProfileAndRepos, likeProfile, getLikes  } from '../controllers/user.controller.js'
import { ensureAuth } from '../middleware/ensureAuth.js'

const router = express()

router.get('/profile/:username', getUserProfileAndRepos)
router.get('/likes', ensureAuth, getLikes)
router.post('/like/:username', ensureAuth, likeProfile)

export default router