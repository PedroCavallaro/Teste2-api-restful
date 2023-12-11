const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");
const userRoutes = require("./routes/UserRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
conn();

app.use("/user", userRoutes);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
