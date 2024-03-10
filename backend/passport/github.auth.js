import passport from "passport";
import dotenv from 'dotenv';
import { Strategy as GitHubStrategy } from "passport-github2";

dotenv.config()


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/api/auth/github/callback"
},
  async function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
        console.log(profile);

  }
));
