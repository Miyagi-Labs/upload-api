const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./src/routes");

// var corsOptions = {
//   origin: "https://upload-api-backend.vercel.app"
// };

app.use(cors());
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
