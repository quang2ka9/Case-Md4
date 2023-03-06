import express from "express";
const router = express.Router();

router.get("/waller", async (req, res) => {
    res.render("waller")
})


export default router;