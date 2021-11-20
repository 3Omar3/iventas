const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    SERVER_URI: "http://localhost:4000",
  },
};

// MONGO_URI:
// "mongodb+srv://user_1:7l18gvvFk6aIgXgM@cluster0.l8zli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
