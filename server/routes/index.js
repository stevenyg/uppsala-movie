const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller');
const authentication = require('../middlewares/authentication');

router.post('/login', Controller.login)
router.post('/register', Controller.register)
router.get('/user/search', Controller.searchMovies)
router.get('/user/movies/:slug/:id', Controller.getUserMoviesDetail)

router.use(authentication)

router.get('/movies', Controller.getMovies)
router.get('/movies/:id', Controller.getMoviesDetail)
router.post('/movies', Controller.addMovies)
router.put('/movies/:id/', Controller.updateMovies)
router.delete('/movies/:id', Controller.deleteMovie)

router.get('/genres', Controller.getGenres)
router.get('/genres/:id', Controller.getGenresDetail)
router.post('/genres', Controller.addGenre)
router.put('/genres/:id', Controller.updateGenre)
router.delete('/genres/:id', Controller.deleteGenre)



module.exports = router