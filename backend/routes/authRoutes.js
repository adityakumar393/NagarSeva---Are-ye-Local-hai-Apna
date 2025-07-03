import express from "express";
import { googleLogin } from "../controllers/authController.js";
const router = express.Router();

router.post("/google-login", googleLogin);
import { adminRegister, adminLogin } from "../controllers/authController.js";

router.post("/admin/register", adminRegister);
router.post("/admin/login", adminLogin);


export default router;
