const path = require("path");

// router.get("/", (req, res, next) => {
//       res.sendFile("./views/funny-name.html");
//     });
module.exports = path.dirname(process.mainModule.filename);
// path.dirname(__filename)
