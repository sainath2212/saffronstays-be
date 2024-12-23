const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/rooms/:roomId', roomController.getRoomData);

module.exports = router;
