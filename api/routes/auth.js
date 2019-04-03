const request = require("superagent");

// Set environment variables
const config = require("../utilities/config");

//GITHUB CREDS
const GITHUB_CLIENT_ID = global.gConfig.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = global.gConfig.GITHUB_CLIENT_SECRET;

module.exports = auth = (req, res) => {
  // access code from GITHUB
  const { code } = req.query;

  // send code to receive access token from GitHub
  request
    .post("https://github.com/login/oauth/access_token")
    .send({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code: code
    })
    .set("Accept", "application/json")
    .then(result => {
      // access token from GitHub
      const token = result.body.access_token;

      // fetch the data about the user
      request
        .get("https://api.github.com/user")
        .set("Authorization", "token " + token)
        .then(userReq => {
          // user data
          const user = userReq.body;

          // store information about the user
          let newUser = new User({
            username: user.login,
            avatar: user.avatar_url,
            name: user.name
          });

          // look to see if the user already exist
          User.find({ username: user.login }, (err, arr) => {
            if (err) {
              res.send(err);
            } else {
              if (arr.length > 0) {
                res.send(arr[0]);
              }
            }
          });

          // if the user does not exist
          // create a new user and save to the databse
          newUser.save().then(
            user => {
              res.send(user);
            },
            e => {
              res.send(e);
            }
          );
        });
    });
};
