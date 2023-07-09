import { Router } from "express";
import {registerUser,loginUser,registerMentor,loginMentor} from "../controllers/authController.js"

const authRouter = Router()

//@desc Routes for authentication

authRouter.post('/auth/user/signup',registerUser);
authRouter.post('/auth/mentor/signup',registerMentor);
authRouter.post('/auth/user/login',loginUser);
authRouter.post('/auth/mentor/login',loginMentor);

export default authRouter;