import express from "express";
const router =express.Router();

router.post("/createquestion",createquestion);
router.post("/getquestion",getallquestions);

export default router;