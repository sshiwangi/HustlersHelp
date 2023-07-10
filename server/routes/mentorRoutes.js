import { Router } from "express";

import { getAllMentors, getMentorById} from "../controllers/index.js"
import Mentor from "../models/Mentor.js";

const mentorRouter = Router()

//@desc Routes for mentors
mentorRouter.get('/',getAllMentors);
mentorRouter.get('/:id',getMentorById);

export default mentorRouter;
