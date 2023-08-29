const express = require("express");
const router = express.Router();
const { schemas } = require("../../models/contact");
const ctrlWrapper = require("../../controllers/contacts");
const {
  validateBody,
  isValidId,
  validateEmptyBody,
  authenticate,
} = require("../../middlewares");

router.get("/", ctrlWrapper.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrlWrapper.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper.addContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateEmptyBody(schemas.addSchema),
  ctrlWrapper.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper.updateStatusContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper.deleteContactById
);

module.exports = router;
