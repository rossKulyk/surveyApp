const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const app = express();

require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100, // last for 30 days before exp
    keys: [keys.cookieKey],
    secret: "keyboard cat",
  })
);
// handle auth
app.use(passport.initialize());
app.use(passport.session());

// require("./routes/auth").(app);
const authRoutes = require("./routes/auth");
authRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
