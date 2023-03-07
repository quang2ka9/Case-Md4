import express from "express";
const router = express.Router();

router.get("/homes", async (req, res) => {
    console.log(req.signedCookies.authorization)
    res.render("homes")
})


export default router;