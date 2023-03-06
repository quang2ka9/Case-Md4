import express from "express";
const router = express.Router();

router.get("/information", async (req, res) => {
    res.render("information")
})


export default router;