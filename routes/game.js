var express = require("express");
var router = express.Router();
var passport = require("passport");
var Raund = require("../models/raund");
var Player = require("../models/player");

var password = " ";

// USE METHOD IN METHOD TO ASYNC MOVE

router.get("/", (req, res) => {
    res.render("welcome");
});

router.post("/addPlayer", (req, res) => {
    var newPlayer = new Player({
        username: req.body.playerName,
        points: 0
    });
    Player.register(newPlayer, password, (err, player) => {
        if (err) {
            req.flash("error", err.message);
            console.log(err);
            return res.redirect("back");
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect(`/game/${player._id}/1`);
        });
    });
});

router.get("/game/:player/:lvl", (req, res) => {
    var points = 0;
    Player.findById(req.params.player, (err, player) => {
        if (err) {
            console.log(err);
        } else {
            for( let i = 0; i < player.answers.length; i++){
                if(player.answers[i].right){
                    points++;
                }
            }
            Raund.find({lvl: req.params.lvl}, (err, raund) => {
                if (err) {
                    console.log(err);
                } else {
                    shuffle(raund);
                    shuffle(raund[0].titles);
                    res.render("game", {
                        raund: raund[0],
                        lvl: req.params.lvl,
                        player: req.params.player,
                        points: points
                    });
                }
            });
        }
    });
});

router.post("/game/:player/:lvl", checkLevel, (req, res) => {
    var right = false;
    var lvl = 0;
    var points = req.body.points;
    if (req.body.givenAnswer === req.body.answerCorrect) {
        right = true;
        points++;
    }
    Player.findByIdAndUpdate(req.params.player, {
        points: points,
        $push: {
            answers: {
                lvl: req.params.lvl,
                right: right,
                givenAnswer: req.body.givenAnswer,
                correctAnswer: req.body.answerCorrect,
                sound: req.body.sound
            }
        }
    }, {new: true}, (err, player) => {
        lvl = player.answers.length + 1;
        if (err) {
            console.log(err);
        } else {
            if (lvl > 10) {
                res.redirect(`/finish/${req.params.player}`)
            } else {
                res.redirect(`/game/${req.params.player}/${lvl}`);
            }
        }
    });
});

router.get("/finish/:player", (req, res) => {
    Player.findById(req.params.player, (err, player) => {
        if (err) {
            console.log(err);
        } else {
            res.render("finish", {
                player: player
            });
        }
    })
});

router.post("/retry", (req, res) => {
    Player.findByIdAndUpdate(req.body.playerID,{
        points: 0,
        answers: []
    },{new: true}, (err, player) => {
        if(err){
            console.log(err);
        } else {
            res.redirect(`/game/${player._id}/1`);
        }
    })
});

router.get("/toplist", (req, res) => {
    Player.find({}, (err, allPlayers) => {
        if(err){
            console.log(err);
        } else {
            allPlayers.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));
            var player = [], points = [];
            for(let i = 0; i < allPlayers.length; i++){
                player.push(allPlayers[i].username);
                points.push(allPlayers[i].points);
            }
            res.render("toplist", {player: player, points: points});
        }
    });
});


function checkLevel(req, res, next) {
    Player.findById(req.params.player, (err, player) => {
        if (err) {
            console.log(err);
        } else {
            if (player.answers.length > 9) {
                res.redirect(`/finish/${req.params.player}`);
            } else {
                next();
            }
        }
    })
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

module.exports = router;