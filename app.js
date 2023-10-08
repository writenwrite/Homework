const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./Config/db");
const userRoutes = require("./Routes/userRoutes");
const movieRoutes = require("./Routes/movieRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const multer = require('multer');


const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// Menghubungkan routes
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Tambahkan rute untuk dokumentasi Swagger

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads/'); // Ganti dengan direktori penyimpanan yang sesuai
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  // Rute untuk mengunggah foto
  app.post('/upload', upload.single('photo'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('Tidak ada file yang diunggah.');
    }
    // Lakukan penyimpanan data foto ke data movies atau database lainnya
    const photoPath = req.file.path;
    // Lakukan operasi yang diperlukan, misalnya menyimpan path foto ke data movies
  
    res.status(200).json({ message: 'Foto berhasil diunggah.' });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
