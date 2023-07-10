import { Router } from "express";
import { getAllUsers, getUserById} from "../controllers/index.js"


const userRouter = Router()

//@desc Routes for users
userRouter.get('/',getAllUsers);
userRouter.get('/:id',getUserById);

export default userRouter;
