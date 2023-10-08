const Movie = require('../Models/movie');

// GET movies with pagination
const getMoviesWithPagination = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Ambil nilai halaman dari query parameter, default ke halaman 1 jika tidak ada
    const limit = parseInt(req.query.limit) || 10; // Ambil nilai batasan dari query parameter, default ke 10 jika tidak ada
    const offset = (page - 1) * limit; // Hitung offset berdasarkan halaman dan batasan

    try {
        const movies = await Movie.findAll({
            limit,
            offset,
        });

        res.status(200).json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching movies' });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/'); // Ganti dengan direktori penyimpanan yang sesuai
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

// POST untuk mengunggah foto ke data movies
const uploadMoviePhoto = upload.single('photo'); // 'photo' adalah nama field file dalam form

const uploadMoviePhotoHandler = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    try {
        // Di sini Anda dapat menyimpan path foto ke data movies atau melakukan operasi yang sesuai
        const photoPath = req.file.path;

        // Lakukan operasi yang diperlukan, misalnya menyimpan path foto ke data movies
        // Movie.create({ name: req.body.name, photoPath });

        res.status(201).json({ message: 'Photo uploaded successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error uploading photo.' });
    }
};



module.exports = {
    getMoviesWithPagination,
    uploadMoviePhoto,
    uploadMoviePhotoHandler
};
