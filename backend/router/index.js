import authController from '../controllers/auth-controller.js'
import { authLoginValidator, authRegisterValidator } from '../validations/auth-validation.js'
import authMiddleware from '../middleware/auth-middleware.js'

import { Router } from 'express'

const router = new Router()

router.get('/', () => {
  return 'Hello, this is the API endpoint!'
})
router.post('/register', authRegisterValidator,  authController.register)
router.post('/login', authLoginValidator,  authController.login)
router.post('/logout', authController.logout)
router.get('/refresh', authController.refresh)

export default router