var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    data = [
        {
         name: "Cloud's Rest",
         image: "https://farm4.staticflickr.com/3836/15028085327_1faed78eb0.jpg",
         description: "blah blah blah"
        },
        {
         name: "Desert Mesa",
         image: "https://farm4.staticflickr.com/3932/34113753285_11378e75e0.jpg",
         description: "blah blah blah"
        },        
        {
         name: "Canyon Floor",
         image: "https://farm8.staticflickr.com/7345/9062279640_e3462523f0.jpg",
         description: "blah blah blah"
        },
        {
         name: "Ghostly Forest",
         image: "https://farm4.staticflickr.com/3836/15028085327_1faed78eb0.jpg",
         description: "blah blah blah"
        }
        ];
function seedDB(){
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds!")
    });
    // data.forEach(function(seed){
    //   Campground.create(seed, function(err, campground){
    //       if(err){
    //           console.log(err)
    //       } else {
    //           console.log("added a campground");
    //           Comment.create({
    //               text: "This place is great, but I wish there was internet",
    //               author: "Homer"
    //           }, function(err, comment){
    //               if(err){
    //               console.log(err);
    //               } else {
    //               campground.comments.push(comment)
    //               campground.save();
    //               console.log("Created a new comment")
    //           }
    //           });
    //       }
    //   });
    // });
}

module.exports = seedDB;