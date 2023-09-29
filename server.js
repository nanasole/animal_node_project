const express = require("express");
const app = express();

const homeRoutes = require("./routes/home");
const nameRoutes = require("./routes/funny-name");
// ./routes/funny - names;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoutes);
app.use(nameRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
