import express from 'express';
import { signup, login, requestPasswordReset, passwordReset } from '../controllers/authController';

const router = express.Router();
// Public routes
router.post("/signup", (req, res, next) => {
	Promise.resolve(signup(req, res)).catch(next);
});
router.post("/login", (req, res, next) => {
	Promise.resolve(login(req, res)).catch(next);
});
router.post('/request-reset',(req,res,next)=>{
	Promise.resolve(requestPasswordReset(req,res)).catch(next);
})
router.post('/reset-password/',(req,res,next)=>{
	Promise.resolve(passwordReset(req,res)).catch(next);
})


export default router;