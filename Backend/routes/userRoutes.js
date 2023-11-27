const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers")
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT); // middleware

router.route("/")
    .get(usersControllers.getAllusers)
    .post(usersControllers.createNewUser)
    .patch(usersControllers.updateUser)
    .delete(usersControllers.deleteUser)

module.exports = router