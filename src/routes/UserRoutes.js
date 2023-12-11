function userRoutes(app) {
    app.get("/", async (req, res) => {
        res.send("oi");
    });
}

module.exports = userRoutes;
