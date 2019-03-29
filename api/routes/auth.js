const request = require("superagent");

// Set environment variables
const config = require("../utilities/config");

//GITHUB CREDS
const GITHUB_CLIENT_ID = global.gConfig.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = global.gConfig.GITHUB_CLIENT_SECRET;

module.exports = auth = (req, res, next) => {
  const { code } = req.query;

  request
    .post("https://github.com/login/oauth/access_token")
    .send({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code: code
    })
    .set("Accept", "application/json")
    .then(result => {
      const token = result.body.access_token;

      request
        .get("https://api.github.com/user")
        .set("Authorization", "token " + token)
        .then(userReq => {
          const user = userReq.body;
          let newUser = new User({
            username: user.login,
            avatar: user.avatar_url,
            name: user.name
          });

          User.find({ username: user.login }, (err, arr) => {
            if (arr.length > 0) {
              res.send(arr[0]);
            }
          });

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
