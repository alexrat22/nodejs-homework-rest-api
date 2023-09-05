const express = require("express");
const router = express.Router();
const { authSchema, emailSchema } = require("../../models/user");
const ctrlWrapper = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../middlewares");

router.post("/register", validateBody(authSchema), ctrlWrapper.register);

router.get("/verify/:verificationToken", ctrlWrapper.verifyEmail);

router.post(
  "/verify",
  validateBody(emailSchema),
  ctrlWrapper.resendVerifyEmail
);

router.post("/login", validateBody(authSchema), ctrlWrapper.login);

router.get("/current", authenticate, ctrlWrapper.getCurrent);

router.post("/logout", authenticate, ctrlWrapper.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper.updateAvatar
);

module.exports = router;
