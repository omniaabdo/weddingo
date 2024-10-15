const path = require('path');
const fs = require('fs');
const multer  = require('multer');
const express = require('express');
const app = express();

// const beautyCenterModel = module.require("../models/upload")

const get = async (req, res) => {
    app.get('/image/:filename', (req, res) => {
        const { filename } = req.params;
        const filepath = path.join(__dirname, 'uploads', filename);
      
        if (fs.existsSync(filepath)) {
          res.sendFile(filepath);
        } else {
          res.status(404).json({ message: 'File not found' });
        }
      });
};

const create = (req, res) => {
    console.log('sssas')
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
        cb(null, file.originalname);
        }
    });
    const upload = multer({ storage: storage });

    if (!fs.existsSync('uploads')) {
        fs.mkdirSync('uploads');
    }
    
    app.post('/upload', upload.single('file'), (req, res) => {
        res.json({
        message: 'File uploaded successfully!',
        file: req.file
        });
    });
}

const deleteOne = async (req, res) => {
    try {
        let { id } = req.params;
        await beautyCenterModel.findByIdAndDelete(id);
        res.json({ success: true })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }

}

module.exports = { get, create, deleteOne }
