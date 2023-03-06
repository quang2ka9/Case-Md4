import express from "express";
const router = express.Router();

router.get("/homes", async (req, res) => {
    res.render("homes")
})


export default router;