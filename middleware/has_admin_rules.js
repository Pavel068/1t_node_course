const has_admin_rules = async (req, res, next) => {
    // Какая-то логика проверки прав
    let has_rules = false;
    if (!has_rules) {
        return res.status(403).json({});
    }

    next();
}

module.exports = has_admin_rules;