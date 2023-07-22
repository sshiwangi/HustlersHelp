import { Router } from "express";
import {registerUser,loginUser,registerMentor,loginMentor} from "../controllers/authController.js"

const authRouter = Router()

//@desc Routes for authentication

authRouter.post('/student/signup',registerUser);
authRouter.post('/student/signin',loginUser);
authRouter.post('/mentor/signup',registerMentor);
authRouter.post('/mentor/signin',loginMentor);

export default authRouter;