const express = require("express");
const router = express.Router();
const { schemas } = require("../../models/users");
const ctrlWrapper = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares");

router.post =
  ("/register", validateBody(schemas.registerSchema), ctrlWrapper.register);

router.post = ("/login", validateBody(schemas.loginSchema), ctrlWrapper.login);

router.get("/current", authenticate, ctrlWrapper.getCurrent);

router.post("/logout", authenticate, ctrlWrapper.logout);

module.exports = router;
