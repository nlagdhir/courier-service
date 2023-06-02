import express from "express";
import { check } from "express-validator";
import {
  register,
  login,
  logout,
  resetPasswordMessage,
  resetPasswordReq,
} from "../controllers/auth.js";

const router = express.Router();

const RegisterValidationRules = [
  check("username")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long"),
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

const LoginValidationRules = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

router.post("/register", RegisterValidationRules, register);
router.post("/login", LoginValidationRules, login);
router.post("/logout", logout);
router.post("/reset", resetPasswordMessage);
router.post("/reset-password", resetPasswordReq);

export default router;
