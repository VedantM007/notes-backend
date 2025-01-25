// routes/noteRoutes.js
const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { getAllNotesByUserId, addNote, deleteNote } = require('../controllers/noteController');
const router = express.Router();

router.get('/getAllNotesByUserId', verifyToken, getAllNotesByUserId);
router.post('/addNote', verifyToken, addNote);
router.delete('/deleteNote', verifyToken, deleteNote);

module.exports = router;