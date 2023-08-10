const express = require("express");
const router = express.Router();
const schema = require("../../schema/contacts");
const ctrlWrapper = require("../../controllers/contacts");
const validateBody = require("../../middleware/validateBody");

router.get("/", ctrlWrapper.getAllContacts);

router.get("/:contactId", ctrlWrapper.getContactById);

router.post("/", validateBody(schema), ctrlWrapper.addContact);

router.put("/:contactId", validateBody(schema), ctrlWrapper.updateContactById);

router.delete("/:contactId", ctrlWrapper.deleteContactById);

module.exports = router;
