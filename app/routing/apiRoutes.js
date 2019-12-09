var express = require("express");
var app = express();
var friendsArray = require("../data/friends");
var bodyParser = require("body-parser");
// Routes
// =============================================================

module.exports= (app) => {
    // Displays all possible friends
app.get("/api/friends", function(req, res) {
    // return res.json(friendsArray);
    app.use(bodyParser.json());
    });

// Add New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log(req.body.scores);
    var newFriend = req.body;
    var differences = [];
    // Remove spaces from newFriends
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    // friendsArray.push(newFriend);
    
    // *****
    console.log(newFriend.scores);

    // const user = userData;

    for (var i = 0; i < newFriend.scores.length; i++) {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;

    for (var i = 0; i < friendsArray.length; i++) {
        var totalDifference = 0;
        for (var j = 0; j < friendsArray[i].scores.length; j++) {
            var difference = Math.abs(newFriend.scores[j] - friendsArray[i].scores[j]);
            console.log(difference);
            totalDifference += difference;
            console.log(`apiRoutes line 46 => ${totalDifference}`);
        }
console.log(`apiRoutes line 48 ${totalDifference}`)
    if (totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
        console.log(`apiRoutes line 52 ${minimumDifference}`)
        console.log(`apiRoutes line 53 ${totalDifference}`)
    }
differences.push(totalDifference);
// Find the lowest score in the totalDifferences array
const leastDiff = Math.min(...differences);

// Find the friend with the closest match in scores
const bestMatch = friendsArray[differences.indexOf(leastDiff)];
console.log(bestMatch);
}

// res.json(friendsArray[bestFriendIndex]);
res.json(bestMatch);

// Find the friend with the minimum total difference

// Write this friend's attributes to the friend modal


    // // Convert newFriend from an object to an array (or just the newFriend.score)

    // // Declare empty array for form data

    // // Loop over each potential friend
    // for (var i = 0; i<friendsArray[i].scores[i].length; i++)

    // Calculate the total difference between arrays


    // res.json(newFriend);
    });
}