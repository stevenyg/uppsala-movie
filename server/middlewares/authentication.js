
const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models/index');

const authentication = async (req, res, next) => {
    try {

        const { access_token } = req.headers
        const payload = verifyToken(access_token)


        const userFound = await User.findByPk(payload.id)

        if (!userFound) {
            // throw new Error('userNotFound')
            throw {
                code: 401,
                name: "AuthenticationError",
                message: "User not found Authentication Failed"
            }
        }
        req.userTryingToLogin = {
            id: userFound.id,
            email: userFound.email,
            role: userFound.role
        }
        next()
    } catch (error) {
        next(error)

    }

}

module.exports = authentication