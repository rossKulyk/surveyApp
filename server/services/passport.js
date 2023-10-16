const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

//serialize user out of the session
passport.serializeUser((user, done) => {
  done(null, user.id); //identify user who's stored in db
});
//deserialize user out of the session
passport.deserializeUser((id, done) => {
  // done(null, user.id);
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      //identify user who's coming from OAuth flow
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        console.log("hello, its me :))");
        done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
