import { Router } from "express";
import usersRouter from "../controllers/user.controllers";
const router = Router();

router.get("/", usersRouter.readUsers);
router.post("/create", usersRouter.createUser);
router.delete("/delete/:id", usersRouter.deleteUser);
router.patch("/update", usersRouter.updateUser);
export default router;
