const router = require("express").Router();
const { Twilio } = require("twilio");
async function connectTwilio(req, res, next) {
  try {
    // Create a Twilio client with your credentials
    const client = new Twilio(process.env.ACCOUNTS_ID, process.env.AUTH_TOKEN);

    // Send the SMS message
    const response = await client.messages.create({
      body: "hey from ali",
      from: +13156448221,
      to: +918651688561,
    });
    res.send(response);
    console.log(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

router.get("/msg", connectTwilio);

module.exports = router;
