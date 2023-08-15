const express = require("express");
const router = express.Router();
const { schemas } = require("../../models/contact");
const ctrlWrapper = require("../../controllers/contacts");
const {
  validateBody,
  isValidId,
  validateEmptyBody,
} = require("../../middlewares");

router.get("/", ctrlWrapper.getAllContacts);

router.get("/:contactId", isValidId, ctrlWrapper.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrlWrapper.addContact);

router.put(
  "/:contactId",
  isValidId,
  validateEmptyBody(schemas.addSchema),
  ctrlWrapper.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper.updateStatusContact
);

router.delete("/:contactId", isValidId, ctrlWrapper.deleteContactById);

module.exports = router;
