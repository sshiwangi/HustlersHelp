import { Router } from "express";
import {registerUser,loginUser,registerMentor,loginMentor} from "../controllers/authController.js"

const authRouter = Router()

//@desc Routes for authentication

authRouter.post('/entrepreneur/signup',registerUser);
authRouter.post('/mentor/signup',registerMentor);
authRouter.post('/entrepreneur/login',loginUser);
authRouter.post('/mentor/login',loginMentor);

export default authRouter;