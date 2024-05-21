import express from "express";
import { createquestion, getsinglequestion } from "../controller/question.controller";
const router =express.Router();

router.post("/createquestion",createquestion);
router.get("/getquestion/:id",getsinglequestion);

export default router;