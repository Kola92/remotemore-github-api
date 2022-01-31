const express = require("express");
const router = express.Router();
const https = require("https");

router.get("/github/userinfo/:user/repos", async function (req, res) {
  const user = req.params.user;
  const options = {
    hostname: "api.github.com",
    path: `/users/${user}/repos`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
    OAuth: process.env.GITHUB_PERSONAL_TOKEN,
  };
  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send('Something went wrong');
    });
});

module.exports = router;
