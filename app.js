var express          = require("express"), 
    app              = express(), 
    mongoose         = require("mongoose"),
    bodyParser       = require("body-parser"),
    Campground       = require("./models/campground"),
    Comment          = require("./models/comment"),
    flash            = require("connect-flash"),
    seedDB           = require("./seeds"),
    passport         = require("passport"),
    LocalStrategy    = require("passport-local"),
    User             = require("./models/user"),
    commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index"),
    methodOverride   = require("method-override");
    
// seedDB(); //seed the database
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(require("express-session")({
    secret: "Burek jest super",
    resave: false,
    saveUninitialize: false
}));
app.use(flash());
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});
app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});