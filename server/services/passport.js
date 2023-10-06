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
    function (accessToken, refreshToken, profile, done) {
      // console.log("accessToken:", accessToken);
      // console.log("refreshToken:", refreshToken);
      // console.log("profile:", profile);
      // console.log("done:", done);
      //identify user who's coming from OAuth flow
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          console.log("hello, its me :))");
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id }).save().then((user) => {
            done(null, user);
          });
        }
      });
    }
  )
);
