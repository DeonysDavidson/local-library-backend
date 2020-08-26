const { Schema, model } = require("mongoose");

const genreSchema = new Schema({
  name: { type: String, min: 3, max: 100 }
});

// Virtual URL
genreSchema.virtual("url").get(function() {
  return "/catalog/genre/" + this._id;
});

module.exports = model("Genre", genreSchema);
