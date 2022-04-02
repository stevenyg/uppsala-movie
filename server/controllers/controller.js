const { User, Movie, Cast, Genre, sequelize } = require('../models/index');
const { comparePassword, hashPassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const { Op } = require("sequelize");

class Controller {

    static async register(req, res, next) {
        const { email, password, phoneNumber, address } = req.body
        try {
            const data = await User.create({ email, password, role: 'Admin', phoneNumber, address })
            res.status(201).json({ message: 'User Created' })

        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body
        try {
            const data = await User.findOne({
                where: {
                    email
                }
            })
            if (!data) {
                throw {
                    code: 401,
                    name: "AuthenticationError",
                    message: "Invalid Email or Password"
                }
            }

            const verifiedPassword = comparePassword(password, data.password)

            if (!verifiedPassword) {
                throw {
                    code: 401,
                    name: "AuthenticationError",
                    message: "Invalid Email or Password"
                }
            }

            const payload = {
                id: data.id,
                role: data.role
            }

            const token = createToken(payload)

            res.status(200).json({ access_token: token })

        } catch (error) {
            console.log(error);
            next(error)

        }
    }

    static async searchMovies(req, res, next) {
        try {
            const { search } = req.query

            const movies = await Movie.findAll({
                where: {
                    title: {
                        [Op.iLike]: `%${search}%`,
                    }
                }
            })


            res.status(200).json(movies)

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async addMovies(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const { title, synopsis, trailerUrl, rating, imageUrl, GenreId, name1, profilePicture1, name2, profilePicture2, name3, profilePicture3 } = req.body
            const UserId = req.userTryingToLogin.id
            const slug = title.split(' ').join('-')

            const movieCheck = await Movie.findOne({ where: { title } })

            if (movieCheck) {
                throw {
                    code: 400,
                    name: "Bad Request",
                    message: "Movie Already Exists"
                }
            }

            const movie = await Movie.create({ title, slug, rating, synopsis, trailerUrl, imageUrl, GenreId, UserId }, { transaction: t })

            // if (name1 !== undefined) {
            const cast1 = await Cast.create({ MovieId: movie.id, name: name1, profilePicture: profilePicture1 }, { transaction: t })
            // } else {
            //     const cast = await Cast.create({ MovieId: movie.id, name: "etc", profilePicture: "" }, { transaction: t })
            // }

            // if (name2 !== undefined) {
            const cast2 = await Cast.create({ MovieId: movie.id, name: name2, profilePicture: profilePicture2 }, { transaction: t })
            // } else {
            //     const cast = await Cast.create({ MovieId: movie.id, name: "etc", profilePicture: "" }, { transaction: t })
            // }

            // if (name3 !== undefined) {
            const cast3 = await Cast.create({ MovieId: movie.id, name: name3, profilePicture: profilePicture3 }, { transaction: t })
            // } else {
            //     const cast = await Cast.create({ MovieId: movie.id, name: "etc", profilePicture: "" }, { transaction: t })
            // }

            await t.commit();
            res.status(201).json({ message: "Movie Added" })

        } catch (error) {
            console.log(error);
            await t.rollback()
            next(error)
        }
    }

    static async updateMovies(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const { id } = req.params
            const { idcast1, idcast2, idcast3 } = req.query
            const { title, synopsis, trailerUrl, rating, imageUrl, GenreId, name1, profilePicture1, name2, profilePicture2, name3, profilePicture3 } = req.body
            const UserId = req.userTryingToLogin.id
            const slug = title.split(' ').join('-')

            const movieCheck = await Movie.findByPk(id)

            if (!movieCheck) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Movie Not Found"
                }
            }

            const movie = await Movie.update({ title, slug, rating, synopsis, trailerUrl, imageUrl, GenreId, UserId }, { where: { id } }, { transaction: t })

            // if (name1 !== undefined) {
            const cast1 = await Cast.update({ MovieId: movie.id, name: name1, profilePicture: profilePicture1 }, { where: { id: idcast1 } }, { transaction: t })
            // }

            // if (name2 !== undefined) {
            const cast2 = await Cast.update({ MovieId: movie.id, name: name2, profilePicture: profilePicture2 }, { where: { id: idcast2 } }, { transaction: t })
            // }

            // if (name3 !== undefined) {
            const cast3 = await Cast.update({ MovieId: movie.id, name: name3, profilePicture: profilePicture3 }, { where: { id: idcast3 } }, { transaction: t })
            // }

            await t.commit();
            res.status(200).json({ message: "Movies Updated" })

        } catch (error) {
            console.log(error);
            await t.rollback()
            next(error)
        }
    }

    static async getUserMoviesDetail(req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({
                include: [
                    { model: Cast },
                    { model: Genre }
                ],
                where: {
                    id
                }
            })

            if (!movie) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Movie Not Found"
                }
            }

            res.status(200).json(movie)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getMovies(req, res, next) {
        try {
            const movies = await Movie.findAll({
                include: {
                    model: Cast
                }
            })

            res.status(200).json(movies)

        } catch (error) {
            next(error)
        }
    }

    static async getMoviesDetail(req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({
                include: {
                    model: Cast
                },
                where: {
                    id
                }
            })

            if (!movie) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Movie Not Found"
                }
            }


            res.status(200).json(movie)

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async deleteMovie(req, res, next) {
        try {
            const { id } = req.params

            const movie = await Movie.findByPk(req.params.id)

            if (!movie) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Movie Not Found"
                }
            }

            const response = await Movie.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({ message: `Movie ${movie.id} deleted` })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async addGenre(req, res, next) {
        try {
            const { name } = req.body
            console.log(name);
            const response = await Genre.create({ name })

            if (!response) {
                throw {
                    code: 400,
                    name: "Bad Request",
                    message: "Bad Request"
                }
            }

            res.status(201).json({ message: `Genre ${name} Created` })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async updateGenre(req, res, next) {
        try {
            const { name } = req.body
            const { id } = req.params

            const genre = await Genre.findByPk(id)

            if (!genre) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Genre Not Found"
                }
            }

            const response = await Genre.update({ name }, {
                where: {
                    id
                }
            })

            if (!response) {
                throw {
                    code: 400,
                    name: "Bad Request",
                    message: "Bad Request"
                }
            }

            res.status(201).json({ message: `Genre Updated ${name} ` })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getGenres(req, res, next) {
        try {
            const genre = await Genre.findAll()

            res.status(200).json(genre)

        } catch (error) {
            next(error)
        }
    }

    static async getGenresDetail(req, res, next) {
        try {
            const { id } = req.params
            const genre = await Genre.findByPk(id)

            if (!genre) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Genre Not Found"
                }
            }

            res.status(200).json(genre)

        } catch (error) {
            next(error)
        }
    }

    static async deleteGenre(req, res, next) {
        try {
            const { id } = req.params
            const genre = await Genre.findByPk(req.params.id)
            if (!genre) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Genre Not Found"
                }
            }

            const response = await Genre.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({ message: `Genre ${genre.id} deleted` })

        } catch (error) {
            next(error)
        }
    }




}

module.exports = Controller