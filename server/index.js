const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(parser.json());

app.use("/", require("./routes/champion"));
app.use("/champion", require("./routes/champion"));
app.use("/team", require("./routes/team"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () =>
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
);
