var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    seedDB = require("./seeds")
    flash = require("connect-flash");
    
//requiring routes
var gameRoute = require("./routes/game");


//connecting to db
mongoose.connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("connected to db...")
}).catch(err => {
    console.log("error with connection to db", err.message);
});
 
//express settings
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(require("express-session")({
    secret: "secret text",
    resave: false,
    saveUninitialized: false
})); 

app.use((req, res, next) => {
    //to use currentUser in ejs files
    res.locals.currentPlayer = req.user;
    res.locals.errorMsg = req.flash("error");
    res.locals.successMsg = req.flash("success");
    next();
})


app.use("/", gameRoute);

seedDB();

//connecting to port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server is on ${port}`);
});