const express = require("express");
const cors = require("cors");
const conn = require("./db/conn");
const mainRouter = require("./routes/router");

const app = express();
const port = 3000;

conn();

app.use(cors());
app.use(express.json());
app.use("/", mainRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
