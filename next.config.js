const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    SERVER_URI: "https://api-iventas.herokuapp.com/",
  },
};
