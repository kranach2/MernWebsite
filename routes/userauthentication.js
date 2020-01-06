const router = require("express").Router();
//User Model
const User = require("../models/users.modal");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const authentication=require("../middleware/authentication")

//Post user authentication
//Authenticate  user
router.route("/").post((req, res) => {
const {email, password} = req.body;
//validation
if(!email || !password){
  return res.status(400).json({msg:"please enter all fields"});
}
  //Check for existing user
  User.findOne({ email })
  .then(user =>{
    if(!user) return res.status(400).json({msg:"user does not exists"});
    
    //validate password
    bcrypt.compare(password, user.password)
    .then(isMatch =>{
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials"});

        jwt.sign(
            { id:user.id },
            config.get("jwtSecret"),
            {expiresIn:3600},
            (err, token)=>{
              if(err) throw err;
              res.json(
                {
                  token,
                  user:{
                    id:user.id,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    
    
                  }
                });
            }
          )
    })

  });
    
});

// GET request authentication/user
// GET user data
// Access Private
router.get("/user", authentication, (req, res) =>{
  User.findById(req.user.id)
  .select("-password")
  .then(user => res.json(user));
});

module.exports = router;
