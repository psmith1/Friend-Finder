/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */
var friends = require('../data/friends.js');

module.exports = function(app) {
        app.get('/api/friends', function(req, res) {
                res.json(friends);
        });

        app.post('/api/friends', function(req, res) {
                var bestMatch = {
                        name: '',
                        photo: '',
                        friendDifference: Infinity,
                };

                // Get the results of the user's survey and POST and parse it
                var userData = req.body;
                var userScores = userData.scores;

                console.log(userScores);

                // This variable will be used to calculate the difference between the user's scores and the scores of each potential friend in the database
                var totalDifference;

                //  Loop through all the friend possibilitites in the database
                        for (var i = 0; i < friends.length; i++) {
                                var currentFriend = friends[i];
                                totalDifference = 0;

                                console.log(currentFriend.name);
                                console.log("round");

                                // Loop through all the scores of each friend in the database
                                for (var j = 0; j < currentFriend.scores.length; j++) {
                                        var currentFriendScore = currentFriend.scores[j];
                                        var currentUserScore = userScores[j];
                                        // Calculate the difference between the scores and sum them into the totalDifference
                                        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
                                        }

                                        // If the sum of differences is less than the differences of the current best match
                                        if (userData.name.toLowerCase() !== bestMatch.name.toLowerCase() &&
                                                totalDifference <= bestMatch.friendDifference) {
                                                // Reset the best match to be the new friend
                                                bestMatch.name = currentFriend.name;
                                                // console.log(bestMatch.name);
                                                bestMatch.photo = currentFriend.photo;
                                                // console.log(bestMatch.photo);
                                                bestMatch.friendDifference = totalDifference;
                                                // console.log(bestMatch.friendDifference);
                                                // console.log(totalDifference);
                                        }
                                };
                // Return JSON with the user's best match
                res.json(bestMatch);
        });
};
