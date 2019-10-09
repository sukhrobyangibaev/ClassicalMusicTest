var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var playerSchema = mongoose.Schema({
    username: String,
    points: Number,
    answers: [
        {
            lvl: String,
            right: Boolean,
            givenAnswer: String,
            correctAnswer: String,
            sound:String
        }
    ]
});

playerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Player", playerSchema);
