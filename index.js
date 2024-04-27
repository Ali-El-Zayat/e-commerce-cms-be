const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 9821;

const authRouter = require("./Routers/Auth.router");
const productsRouter = require("./Routers/Products.router");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/api", authRouter);
app.use("/api", productsRouter);

mongoose.connect(process.env.DB_LINK).then(() => {
  app.listen(PORT, () => {
    console.clear();
    return console.log(
      "🚀 ~ app.listen ~ Server is running on:",
      `\n🌍 ~ http://localhost:${PORT}`
    );
  });
});
