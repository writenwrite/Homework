const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

// Endpoint untuk mendaftar pengguna

/**
 * @swagger
 * /api/users/users:
 *   get:
 *     summary: Mendapatkan daftar pengguna
 *     description: Mendapatkan daftar semua pengguna.
 *     responses:
 *       '200':
 *         description: Sukses mendapatkan daftar pengguna
 *       '500':
 *         description: Kesalahan server
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Mendaftarkan pengguna baru
 *     description: Mendaftarkan pengguna baru dengan informasi email, gender, password, dan role.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               
 *     responses:
 *       '201':
 *         description: Pengguna berhasil didaftarkan.
 *       '500':
 *         description: Kesalahan server.
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Mendaftarkan pengguna baru
 *     description: Mendaftarkan pengguna baru dengan informasi email, gender, password, dan role.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               gender:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Pengguna berhasil didaftarkan.
 *       '500':
 *         description: Kesalahan server.
 */


router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser)
router.get('/users', userController.getUsersWithPagination);


module.exports = router;
