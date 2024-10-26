// packages
const emailCheck = require("email-check");

// check
async function check(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        ok: false,
        message: "Missing email",
      });
    }

    if (!isNaN(email)) {
      return res.status(400).json({
        ok: false,
        message: "Invalid email format",
      });
    }

    emailCheck(email)
      .then(function (response) {
        res.status(200).json({
          ok: true,
          message: "Email found",
          data: response,
        });
      })
      .catch(function (err) {
        res.status(404).json({
          ok: false,
          message: "Email not found",
        });
      });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "Internal Server Error",
      error: err,
    });
  }
}

module.exports = { check };
