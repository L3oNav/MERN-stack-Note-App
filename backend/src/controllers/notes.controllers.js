const notesCtrl = {};

const NoteModel = require("../models/Note");

notesCtrl.getNotes = async (req, res) => {
  const notes = await NoteModel.find();
  res.json(notes);
};

notesCtrl.CreateNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new NoteModel({
    title: title,
    content: content,
    date: date,
    author: author
  });
  await newNote.save();
  res.json({ message: "Note Saved", note: newNote });
};

//* Controllers with id
notesCtrl.getNote = async (req, res) => {
  const note = await NoteModel.find({ _id: req.params.id }).catch((error)=>{
    return error.message;
  });
  res.json(note);
};

notesCtrl.PutNote = async (req, res) => {
  const { title, content, author } = req.body;
  await NoteModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: title,
      content: content,
      author: author
    }
  );
  req.json({ message: "Note Updated" });
};

notesCtrl.DeleteNote = async (req, res) => {
  await NoteModel.findByIdAndDelete(req.params.id);
  res.json({
    message: "Note Delete"
  });
};

module.exports = notesCtrl;