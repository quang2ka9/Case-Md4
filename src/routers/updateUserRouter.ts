import express from "express";
const router = express.Router();

router.get("/updateUser", async (req, res) => {
    res.render("updateUser")
})


export default router;