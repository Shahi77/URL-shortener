require("dotenv").config();
const express = require("express");
const urlRoute = require("./routes/url.routes");
const { connectToMongoDB } = require("./db/connect");
const app = express();
const PORT = 8001;

connectToMongoDB();
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
