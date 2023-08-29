const express = require("express");
const router = express.Router();
const { authSchema } = require("../../models/users");
const ctrlWrapper = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares");

router.post("/register", validateBody(authSchema), ctrlWrapper.register);

router.post("/login", validateBody(authSchema), ctrlWrapper.login);

router.get("/current", authenticate, ctrlWrapper.getCurrent);

router.post("/logout", authenticate, ctrlWrapper.logout);

module.exports = router;
