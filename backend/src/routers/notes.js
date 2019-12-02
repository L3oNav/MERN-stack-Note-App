const { Router } = require("express");
const router = Router();
const {
  getNotes,
  CreateNote,
  getNote,
  PutNote,
  DeleteNote
} = require("../controllers/notes.controllers");

//? Routes for express
router
  .route("/")
  .get(getNotes)
  .post(CreateNote);

router
  .route("/:id")
  .get(getNote)
  .put(PutNote)
  .delete(DeleteNote);

module.exports = router;
