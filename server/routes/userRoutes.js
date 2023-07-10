import { Router } from "express";
import { getAllUsers, getUserById} from "../controllers/index.js"


const userRouter = Router()

//@desc Routes for users
userRouter.get('/',getAllUsers);
userRouter.get('/:id',getUserById);
userRouter.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

export default userRouter;
