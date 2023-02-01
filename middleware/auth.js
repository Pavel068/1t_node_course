const auth = async (req, res, next) => {
    if (!req.headers['Authorization']) {
        return res.status(401).json({
            message: 'Неверный токен'
        })
    }

    // Какая-то логика аутентификации

    next();
}

module.exports = auth;