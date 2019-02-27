const postLogout = (req, res) => {
    const cookie = req.cookies.token;

        if (!cookie) {
            res.status(400).json({ message: 'Something went wrong during logout' });
        }

        res.clearCookie("token");
        res.json({ message: 'Logout successful' });
};

module.exports = { postLogout };
