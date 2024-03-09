import express from 'express'
import { getUserProfileAndRepos } from '../controllers/user.controller.js'

const router = express()

router.get('/profile/:username', getUserProfileAndRepos)

export default router