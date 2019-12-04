// Routes
// =============================================================

  // Displays all possible friends
  app.get("/api/friends", function(req, res) {
    return res.json(friendsArray);
  });

  // Add New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newFriends
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friendsArray.push(newFriend);
  
    res.json(newFriend);
  });