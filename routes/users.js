const router = require("express").Router();
//User Model
const User = require("../models/users.modal");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//Get users
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));

   
});

//Register new user
router.route("/").post((req, res) => {
const {firstname, lastname, email, password, contact} = req.body;
//validation
if(!firstname || !lastname || !email || !password){
  return res.status(400).json({msg:"please enter all fields"});
}
  //Check for existing user
  User.findOne({ email })
  .then(user =>{
    if(user) return res.status(400).json({msg:"user already exists"});
    const newUser = new User({
      firstname,
      lastname,
      email,
      password,
      contact
    });

    //create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) =>{
        if(err) throw err;
        newUser.password=hash;
        newUser.save()
        .then(user =>{

          jwt.sign(
            { id:user.id },
            config.get("jwtSecret"),
            {expiresIn:3000},
            (err, token)=>{
              if(err) throw err;
              res.json(
                {
                  token,
                  user:{
                    id:user.id,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    contact:user.contact
    
                  }
                });
            }
          )
          
        })
      } )
    })

  });
    //.then(users => res.json(users))
    //.catch(err => res.status(400).json("Error:" + err));

  //   console.log(req.protocol);
  //   console.log(req.hostname);
  //   console.log(req.path);
  //   console.log(req.originalUrl);
  //   console.log(req.subomains);
});



module.exports = router;
