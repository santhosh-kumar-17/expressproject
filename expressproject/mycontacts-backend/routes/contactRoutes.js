const express = require("express");
const router = express.Router();
const {getcontacts,
    getcontact,
    createcontact,
    updatecontact,
    deletecontact}= require("../controllers/contactcontroller");

router.route("/").get(getcontact);

router.route("/").post(createcontact);

router.route("/:id").get(getcontacts);

router.route("/:id").put(updatecontact);

router.route("/:id").delete(deletecontact);

module.exports=router;