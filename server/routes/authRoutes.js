import { Router } from "express";
import {registerUser,loginUser,registerMentor,loginMentor} from "../controllers/authController.js"

const authRouter = Router()

//@desc Routes for authentication

authRouter.post('/user/signup',registerUser);
authRouter.post('/mentor/signup',registerMentor);
authRouter.post('/user/login',loginUser);
authRouter.post('/mentor/login',loginMentor);

export default authRouter;