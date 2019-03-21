const express = require("express");
const request = require("request-promise");
const app = express();
const port = 5000;

const endpoint = "https://api.github.com/users/spencermcmurray/repos";
const ua =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36";

app.get("/api/projects", (req, res) =>
  (async function() {
    return res.json(
      await request({
        url: endpoint,
        method: "GET",
        headers: {
          "User-Agent": ua
        }
      })
    );
  })()
);

app.listen(port, () => `Server running on port ${port}`);
