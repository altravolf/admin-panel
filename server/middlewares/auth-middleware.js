
const validate = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            // ! Remove if not needed
            // console.log(err);
            // res.status(400).json({ message: err.errors[0].message });

            error = {
                status: 400,
                message: error.errors[0].message
            }

            next(error);

        }
    }
}


module.exports = validate;