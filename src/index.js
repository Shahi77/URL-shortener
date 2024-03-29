require("dotenv").config();
const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url.routes");
const { connectToMongoDB } = require("./db/connect");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

connectToMongoDB();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.json());

app.use("/url", urlRoute);
app.get("/url/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    if (!entry) {
      return res.status(404).send("URL not found");
    }

    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
