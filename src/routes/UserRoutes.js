function userRoutes(app) {
    app.use();
    app.get("/", (req, res) => {
        res.send("oi");
    });
}

module.exports = userRoutes;
