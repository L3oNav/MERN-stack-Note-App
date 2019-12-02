const { Router } = require('express')
const router = Router();

const {
    getUsers, CreateUser, DeleteUser
} = require('../controllers/users.controllers')

//? Routes for express

router.route("/")
    .get(getUsers)
    .post(CreateUser)

//* http://localhost:4000/api/notes/#id
router.route("/:id")
    .delete(DeleteUser)

module.exports = router;
