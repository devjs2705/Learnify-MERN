const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        // const msg = error.errors[0].message;
        console.log(error.issues[0].message);
        return res.status(400).json({ error: error.issues[0].message });
    }
}

module.exports = validate;