const { Op } = require('sequelize');
const Authors = require('../models/Authors');

const getAuthors = async (req, res) => {
    const authors = await Authors.findAll({
        where: {
            first_name: {
                [Op.like]: `%${req.query.name}%`
            }
        }
    });
    return res.status(200).json({
        items: authors
    })
}

module.exports = { getAuthors }