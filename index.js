const express = require("express");

const urlRoute = require("./routes/url.routes");
const app = express();
const PORT = 8001;

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
