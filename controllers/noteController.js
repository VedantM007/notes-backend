// controllers/noteController.js
const Note = require('../models/Notes');
const mongoose = require('mongoose');

exports.getAllNotesByUserId = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid or missing User ID' });
    }

    const notes = await Note.find({ userId });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

exports.addNote = async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    if (!title || !body || !userId) {
      return res.status(400).json({ error: 'Title, body, and userId are required' });
    }

    const newNote = new Note({
      title,
      body,
      userId,
    });

    const savedNote = await newNote.save();
    res.status(201).json({ success: 'Note saved successfully', savedNote });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add note' });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.query;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return res.status(404).json({ error: 'Note not found' });

    res.status(200).json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
};
