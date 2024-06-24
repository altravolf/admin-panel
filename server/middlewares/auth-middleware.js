
const validate = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: err.errors[0].message });
        }
    }
}


module.exports = validate;