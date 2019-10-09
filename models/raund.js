var mongoose = require("mongoose");
//mongoose model config
var raundSchema = mongoose.Schema({
    lvl: Number,
    titles: [String],
    correct: String,
    sound: String
});
// Piece.create({
//     title: "Beethoven - Violin Concerto in B Major"
// })
module.exports = mongoose.model("Raund", raundSchema);
