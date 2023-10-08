const express = require('express');
const multer = require('multer');
const Movie  = require('./Models/movie'); // Sesuaikan dengan path model Anda

const app = express();
const port = 3000;

// Konfigurasi Multer untuk menyimpan foto di direktori "uploads"
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({
    storage: storage
}).single('photo');

app.post('/api/movies/upload', upload, async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    try {
        // Simpan informasi foto ke database
        const { title, description } = req.body;
        const photoPath = req.file.path;

        const movie = await Movie.create({
            title,
            description,
            photoPath, // Simpan path foto ke dalam database
        });

        res.status(201).json({ message: 'Photo uploaded successfully.', movie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error uploading photo.' });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
