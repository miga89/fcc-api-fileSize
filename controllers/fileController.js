//const mongoose = require('mongoose');
//const Review = mongoose.model('Review');
const path = require('path');
const multer = require("multer");

const multerOptions = {
    storage: multer.memoryStorage(),
    limits: {fileSize: 10000000}
};

exports.homepage = (req,res) => {
  res.sendFile(path.join(__dirname,'/../views/index.html'));
};

exports.analyzeFile = (req,res) => {
    if (!req.file){
        res.end("Please upload a file!")
    }
    res.json({size: req.file.size});
};

exports.upload = multer(multerOptions).single('photo');
