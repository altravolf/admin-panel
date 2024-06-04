const home = async (req, res) => {
    try {
        res.send("Hello World");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}



const getRegister = async (req, res) => {
    try {
        res.send("Hello World to register again");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = { home, getRegister };