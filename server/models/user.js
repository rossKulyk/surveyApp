const mongoose = require("mongoose");
const Schema = mongoose.Schema; // schema => collection

// define schema to holds properties
const userSchema = new Schema({
  googleId: String,
});
//create a new collection called users; doesn't overwrite existing collection, create a new one if does not exist
mongoose.model("users", userSchema);
