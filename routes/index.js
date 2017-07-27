const express = require('express');
const fileController = require('../controllers/fileController');

const router = express.Router();
// what about catch errors?
router.get('/',fileController.homepage);
router.post('/analyzeFile',fileController.upload,fileController.analyzeFile);
// router.get('/api/imagesearch/:searchTerms(*)',imageController.getImageSearch);
// router.get('/api/latest/imagesearch/',imageController.getSearchList);


module.exports = router;
