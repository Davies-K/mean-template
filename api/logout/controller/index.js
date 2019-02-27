const postLogout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(400).json({ message: 'Something went wrong during logout' });
        }
        res.json({ message: 'Logout successful' });
    });
};

module.exports = { postLogout };
